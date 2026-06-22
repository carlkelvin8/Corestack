import type { ContactFormData, ContactEmailPayload } from '@/types/contact';

/**
 * Transforms raw form data into the structured payload consumed by
 * the email template and sending layer.
 */
export function formatContactEmailData(
  data: ContactFormData,
  pageUrl: string = 'https://corestackph.tech/#contact'
): ContactEmailPayload {
  return {
    fullName: `${data.firstName.trim()} ${data.lastName.trim()}`,
    email: data.email.trim(),
    company: data.company.trim() || 'Not provided',
    message: data.message.trim(),
    submittedAt: new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
    }),
    pageUrl: pageUrl || 'CoreStack Website Contact Form',
  };
}
