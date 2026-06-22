/**
 * Central email configuration.
 * All sensitive values are read from environment variables — never hardcoded.
 */
export const emailConfig = {
  smtp: {
    host: process.env.SMTP_HOST ?? '',
    port: parseInt(process.env.SMTP_PORT ?? '587', 10),
    secure: parseInt(process.env.SMTP_PORT ?? '587', 10) === 465,
    auth: {
      user: process.env.SMTP_USER ?? '',
      pass: process.env.SMTP_PASS ?? '',
    },
  },
  from: process.env.SMTP_FROM ?? process.env.SMTP_USER ?? '',
  recipient: process.env.CONTACT_EMAIL_TO ?? 'corestacktechph@gmail.com',
  subject: 'New Contact Form Submission from CoreStack Website',
} as const;
