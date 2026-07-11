"use server";

import { Resend } from "resend";
import { siteConfig } from "@/data/siteConfig";

// Make sure not to fail at build time if env var is missing
const resendApiKey = process.env.RESEND_API_KEY || "";
const resend = new Resend(resendApiKey);

export type ContactFormState = {
  success: boolean;
  message?: string;
  error?: string;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const program = formData.get("program") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !phone || !program || !message) {
      return { success: false, error: "All fields are required." };
    }

    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY");
      return {
        success: false,
        error: "Server configuration error: Missing API Key.",
      };
    }

    const { data, error } = await resend.emails.send({
      from: "PowerMyTennis <noreply@powermysport.com>",
      to: [siteConfig.email],
      replyTo: email,
      subject: `New Inquiry: ${program} — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f7f6f2;">
          <div style="background:#22261B;padding:24px 32px;border-radius:12px 12px 0 0;">
            <h2 style="color:#C6D92B;margin:0;font-size:20px;letter-spacing:1px;text-transform:uppercase;">New Inquiry — PowerMyTennis</h2>
          </div>
          <div style="background:#ffffff;padding:32px;border:1px solid #e2e0da;border-top:none;border-radius:0 0 12px 12px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0efeb;color:#6b6960;font-size:12px;text-transform:uppercase;letter-spacing:1px;width:140px;">Program</td><td style="padding:10px 0;border-bottom:1px solid #f0efeb;font-weight:700;color:#22261B;">${program}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0efeb;color:#6b6960;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #f0efeb;color:#22261B;">${name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0efeb;color:#6b6960;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f0efeb;color:#22261B;">${phone}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0efeb;color:#6b6960;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Email</td><td style="padding:10px 0;border-bottom:1px solid #f0efeb;color:#22261B;">${email}</td></tr>
            </table>
            <div style="margin-top:24px;">
              <p style="color:#6b6960;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;">Message</p>
              <p style="background:#f7f6f2;padding:16px;border-radius:8px;color:#22261B;line-height:1.6;margin:0;">${message}</p>
            </div>
          </div>
          <p style="text-align:center;color:#a09d95;font-size:11px;margin-top:16px;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return {
      success: true,
      message:
        "Your inquiry has been sent. We'll get back to you within 24 hours. For urgent queries, WhatsApp us at 86992 12962.",
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to send message. Please try again later.",
    };
  }
}
