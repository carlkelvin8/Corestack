import { NextResponse } from 'next/server';
import type { ContactFormData } from '@/types/contact';
import { formatContactEmailData } from '@/utils/formatContactEmailData';
import { sendContactEmail } from '@/lib/email/sendContactEmail';

// ── Validation helpers ───────────────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: ContactFormData): string | null {
  if (!data.firstName?.trim()) return 'First name is required.';
  if (!data.lastName?.trim()) return 'Last name is required.';
  if (!data.email?.trim()) return 'Work email is required.';
  if (!EMAIL_REGEX.test(data.email.trim())) return 'Please provide a valid email address.';
  if (!data.message?.trim()) return 'Message is required.';
  if (data.message.trim().length < 10) return 'Message must be at least 10 characters long.';
  return null;
}

// ── POST /api/contact ────────────────────────────────────────────────────────
export async function POST(request: Request) {
  let body: ContactFormData;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid request body.' }, { status: 400 });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ success: false, message: validationError }, { status: 400 });
  }

  const pageUrl = request.headers.get('referer') ?? undefined;
  const payload = formatContactEmailData(body, pageUrl);
  const result = await sendContactEmail(payload);

  if (result.success) {
    return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
  }

  return NextResponse.json(
    { success: false, message: 'Unable to send your message. Please try again or email us directly at corestacktechph@gmail.com.' },
    { status: 500 }
  );
}
