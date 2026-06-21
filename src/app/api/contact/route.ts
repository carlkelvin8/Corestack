import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, message } = body;

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Message length validation
    if (message.length < 10) {
      return NextResponse.json(
        { success: false, message: 'Message must be at least 10 characters long.' },
        { status: 400 }
      );
    }

    const emailTo = process.env.CONTACT_EMAIL_TO || 'corestacktechph@gmail.com';
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser || emailTo;

    if (!smtpHost || !smtpUser || !smtpPass) {
      // Log error but return a generic failure message to the client
      console.error('SMTP configuration is missing in environment variables.');
      return NextResponse.json(
        { success: false, message: 'Unable to send message at this time. Please try again later or email us directly.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      <br />
      <h3>Message:</h3>
      <p style="white-space: pre-wrap;">${message}</p>
    `;

    const textContent = `
      New Contact Form Submission
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Company: ${company || 'Not provided'}
      Date: ${new Date().toLocaleString()}
      
      Message:
      ${message}
    `;

    const mailOptions = {
      from: `"CoreStack Website" <${smtpFrom}>`,
      to: emailTo,
      replyTo: email,
      subject: 'New Contact Form Submission from CoreStack Website',
      text: textContent,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Unable to send message. Please try again or email us directly at corestacktechph@gmail.com.' },
      { status: 500 }
    );
  }
}
