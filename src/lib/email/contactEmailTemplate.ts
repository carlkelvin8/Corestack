import type { ContactEmailPayload } from '@/types/contact';

/** Escape HTML special chars to prevent injection via user-submitted data. */
function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Preserve line breaks inside the message body. */
function nl2br(str: string): string {
  return esc(str).replace(/\n/g, '<br />');
}

/**
 * Generates a fully self-contained branded HTML email for CoreStack Technologies.
 * Uses inline CSS only for maximum Gmail compatibility.
 */
export function contactEmailTemplate(data: ContactEmailPayload): string {
  return /* html */ `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Form Submission – CoreStack Technologies</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f7fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

  <!-- Outer wrapper -->
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f7fb;padding:40px 16px;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table role="presentation" width="100%" style="max-width:640px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- ── HEADER ── -->
          <tr>
            <td style="background:linear-gradient(135deg,#0b5ed7 0%,#0d47a1 100%);padding:36px 40px;">
              <!-- Logo row -->
              <table role="presentation" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="width:40px;height:40px;background:rgba(255,255,255,0.18);border-radius:10px;text-align:center;vertical-align:middle;">
                    <!-- Grid icon -->
                    <table role="presentation" cellspacing="2" cellpadding="0" style="margin:8px auto;">
                      <tr>
                        <td style="width:9px;height:9px;background:#ffffff;border-radius:2px;opacity:.95;"></td>
                        <td style="width:9px;height:9px;background:#ffffff;border-radius:2px;opacity:.55;"></td>
                      </tr>
                      <tr>
                        <td style="width:9px;height:9px;background:#ffffff;border-radius:2px;opacity:.55;"></td>
                        <td style="width:9px;height:9px;background:#ffffff;border-radius:2px;opacity:.95;"></td>
                      </tr>
                    </table>
                  </td>
                  <td style="padding-left:12px;font-size:17px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;white-space:nowrap;">
                    CoreStack Technologies
                  </td>
                </tr>
              </table>
              <!-- Headline -->
              <p style="margin:20px 0 4px;font-size:24px;font-weight:700;color:#ffffff;line-height:1.3;">
                New Website Inquiry
              </p>
              <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.75);">
                A new message has arrived from your website contact form.
              </p>
            </td>
          </tr>

          <!-- ── BODY ── -->
          <tr>
            <td style="padding:36px 40px;">

              <!-- Intro -->
              <p style="margin:0 0 24px;font-size:15px;color:#374151;line-height:1.6;">
                Hello, you have received a new contact form submission through the
                <strong style="color:#0b5ed7;">CoreStack Technologies</strong> website.
                Here are the details:
              </p>

              <!-- Details card -->
              <table role="presentation" width="100%" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;margin-bottom:24px;">
                <tr>
                  <td style="padding:20px 24px 4px;">
                    <p style="margin:0 0 16px;font-size:11px;font-weight:700;color:#64748b;letter-spacing:0.1em;text-transform:uppercase;">
                      Contact Details
                    </p>
                  </td>
                </tr>

                <!-- Full Name -->
                <tr>
                  <td style="padding:10px 24px;border-top:1px solid #f1f5f9;">
                    <table role="presentation" cellspacing="0" cellpadding="0" width="100%">
                      <tr>
                        <td style="width:24px;font-size:16px;vertical-align:top;padding-top:2px;">👤</td>
                        <td style="padding-left:10px;">
                          <p style="margin:0;font-size:11px;color:#94a3b8;font-weight:500;">Full Name</p>
                          <p style="margin:2px 0 0;font-size:15px;color:#111827;font-weight:600;">${esc(data.fullName)}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Email -->
                <tr>
                  <td style="padding:10px 24px;border-top:1px solid #f1f5f9;">
                    <table role="presentation" cellspacing="0" cellpadding="0" width="100%">
                      <tr>
                        <td style="width:24px;font-size:16px;vertical-align:top;padding-top:2px;">✉️</td>
                        <td style="padding-left:10px;">
                          <p style="margin:0;font-size:11px;color:#94a3b8;font-weight:500;">Work Email</p>
                          <p style="margin:2px 0 0;font-size:15px;font-weight:600;">
                            <a href="mailto:${esc(data.email)}" style="color:#0b5ed7;text-decoration:none;">${esc(data.email)}</a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Company -->
                <tr>
                  <td style="padding:10px 24px;border-top:1px solid #f1f5f9;">
                    <table role="presentation" cellspacing="0" cellpadding="0" width="100%">
                      <tr>
                        <td style="width:24px;font-size:16px;vertical-align:top;padding-top:2px;">🏢</td>
                        <td style="padding-left:10px;">
                          <p style="margin:0;font-size:11px;color:#94a3b8;font-weight:500;">Company</p>
                          <p style="margin:2px 0 0;font-size:15px;color:#111827;font-weight:600;">${esc(data.company)}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Submitted at -->
                <tr>
                  <td style="padding:10px 24px 20px;border-top:1px solid #f1f5f9;">
                    <table role="presentation" cellspacing="0" cellpadding="0" width="100%">
                      <tr>
                        <td style="width:24px;font-size:16px;vertical-align:top;padding-top:2px;">🕐</td>
                        <td style="padding-left:10px;">
                          <p style="margin:0;font-size:11px;color:#94a3b8;font-weight:500;">Submitted At</p>
                          <p style="margin:2px 0 0;font-size:15px;color:#111827;font-weight:600;">${esc(data.submittedAt)}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message box -->
              <table role="presentation" width="100%" style="background:#f1f6ff;border:1px solid #bfdbfe;border-left:4px solid #0b5ed7;border-radius:0 12px 12px 0;margin-bottom:28px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#0b5ed7;letter-spacing:0.1em;text-transform:uppercase;">
                      💬 Message
                    </p>
                    <p style="margin:0;font-size:15px;color:#1e293b;line-height:1.75;white-space:pre-wrap;">${nl2br(data.message)}</p>
                  </td>
                </tr>
              </table>

              <!-- CTA button -->
              <table role="presentation" cellspacing="0" cellpadding="0" width="100%" style="margin-bottom:8px;">
                <tr>
                  <td align="center">
                    <a
                      href="mailto:${esc(data.email)}?subject=Re%3A%20Your%20CoreStack%20Website%20Inquiry"
                      style="display:inline-block;background:#0b5ed7;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:8px;letter-spacing:0.02em;"
                    >
                      ↩ Reply to ${esc(data.fullName.split(' ')[0])}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ── FOOTER ── -->
          <tr>
            <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:24px 40px;">
              <table role="presentation" cellspacing="0" cellpadding="0" width="100%">
                <tr>
                  <td>
                    <p style="margin:0 0 2px;font-size:13px;font-weight:700;color:#1e293b;">CoreStack Technologies</p>
                    <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.7;">
                      Source: CoreStack Website Contact Form<br />
                      Page: ${esc(data.pageUrl)}
                    </p>
                  </td>
                  <td style="text-align:right;vertical-align:top;">
                    <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.7;">
                      SJDM Bulacan, Philippines<br />
                      corestacktechph@gmail.com
                    </p>
                  </td>
                </tr>
              </table>
              <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;" />
              <p style="margin:0;font-size:11px;color:#94a3b8;text-align:center;line-height:1.6;">
                This email was automatically generated by the CoreStack Technologies website contact form.<br />
                Please use the <strong>Reply to</strong> button above to respond to the sender.
              </p>
            </td>
          </tr>

        </table>
        <!-- / Card -->

      </td>
    </tr>
  </table>

</body>
</html>
`.trim();
}

/**
 * Minimal plain-text fallback for email clients that cannot render HTML.
 */
export function contactEmailTextFallback(data: ContactEmailPayload): string {
  return [
    'NEW CONTACT FORM SUBMISSION — CoreStack Technologies',
    '='.repeat(52),
    '',
    `Name:         ${data.fullName}`,
    `Email:        ${data.email}`,
    `Company:      ${data.company}`,
    `Submitted At: ${data.submittedAt}`,
    '',
    'MESSAGE',
    '-'.repeat(52),
    data.message,
    '',
    '-'.repeat(52),
    `Source: CoreStack Website Contact Form`,
    `Page:   ${data.pageUrl}`,
  ].join('\n');
}
