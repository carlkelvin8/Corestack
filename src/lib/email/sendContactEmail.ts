import nodemailer from 'nodemailer';
import type { ContactEmailPayload, SendEmailResult } from '@/types/contact';
import { emailConfig } from './emailConfig';
import { contactEmailTemplate, contactEmailTextFallback } from './contactEmailTemplate';

/**
 * Sends the branded CoreStack contact notification email via SMTP (Nodemailer).
 * All configuration is sourced from emailConfig — no credentials in this file.
 */
export async function sendContactEmail(
  payload: ContactEmailPayload
): Promise<SendEmailResult> {
  // Guard: ensure SMTP credentials are configured
  if (!emailConfig.smtp.auth.user || !emailConfig.smtp.auth.pass) {
    console.error('[sendContactEmail] SMTP credentials are missing from environment variables.');
    return { success: false, error: 'SMTP credentials are not configured.' };
  }

  const transporter = nodemailer.createTransport({
    host: emailConfig.smtp.host,
    port: emailConfig.smtp.port,
    secure: emailConfig.smtp.secure,
    auth: emailConfig.smtp.auth,
  });

  try {
    await transporter.sendMail({
      from: `"CoreStack Website" <${emailConfig.from}>`,
      to: emailConfig.recipient,
      replyTo: payload.email,
      subject: emailConfig.subject,
      html: contactEmailTemplate(payload),
      text: contactEmailTextFallback(payload),
    });

    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[sendContactEmail] Failed to send email:', message);
    return { success: false, error: message };
  }
}
