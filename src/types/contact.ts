// ─── Form Data (from UI) ─────────────────────────────────────────────────────
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

// ─── Email Payload (passed to the email layer) ───────────────────────────────
export interface ContactEmailPayload {
  fullName: string;
  email: string;
  company: string;
  message: string;
  submittedAt: string;
  pageUrl: string;
}

// ─── Email Send Result ───────────────────────────────────────────────────────
export interface SendEmailResult {
  success: boolean;
  error?: string;
}
