import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.ZEPTOMAIL_HOST,
  port: Number(process.env.ZEPTOMAIL_PORT),
  secure: true,
  auth: {
    user: process.env.ZEPTOMAIL_USER,
    pass: process.env.ZEPTOMAIL_PASS,
  },
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const { fname, lname, email, phone, message } = req.body;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); padding: 30px 40px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Contact Message</h1>
                    <p style="color: #e9d5ff; margin: 8px 0 0 0; font-size: 14px;">Someone reached out via your website</p>
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="padding: 40px;">
                    
                    <!-- Contact Info Card -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #faf5ff; border-radius: 8px; margin-bottom: 24px;">
                      <tr>
                        <td style="padding: 24px;">
                          <h2 style="margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #7c3aed;">Contact Details</h2>
                          
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="padding: 8px 0;">
                                <span style="color: #6b7280; font-size: 13px;">Name</span><br>
                                <span style="color: #1f2937; font-size: 16px; font-weight: 500;">${fname} ${lname || ""}</span>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 8px 0;">
                                <span style="color: #6b7280; font-size: 13px;">Email</span><br>
                                <a href="mailto:${email}" style="color: #7c3aed; font-size: 16px; font-weight: 500; text-decoration: none;">${email}</a>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 8px 0;">
                                <span style="color: #6b7280; font-size: 13px;">Phone</span><br>
                                <span style="color: #1f2937; font-size: 16px; font-weight: 500;">${phone || "Not provided"}</span>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <!-- Message -->
                    <h2 style="margin: 0 0 12px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #7c3aed;">Message</h2>
                    <div style="background-color: #f9fafb; border-left: 4px solid #7c3aed; padding: 20px; border-radius: 0 8px 8px 0;">
                      <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                    </div>

                    <!-- Reply Button -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 32px;">
                      <tr>
                        <td align="center">
                          <a href="mailto:${email}" style="display: inline-block; background-color: #7c3aed; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 14px;">Reply to ${fname}</a>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color: #f9fafb; padding: 24px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
                    <p style="margin: 0; color: #9ca3af; font-size: 13px;">This message was sent from the contact form on your website.</p>
                    <p style="margin: 8px 0 0 0; color: #9ca3af; font-size: 13px;">© ${new Date().getFullYear()} Optic Digital</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const textContent = `
New Contact Form Submission

Name: ${fname} ${lname || ""}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}

---
This message was sent from the contact form on your website.
    `;

    await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `✉️ New message from ${fname} ${lname || ""}`,
      html: htmlContent,
      text: textContent,
      replyTo: email,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email Error:", error);
    return res.status(500).json({ success: false, message: "Failed to send email" });
  }
}
