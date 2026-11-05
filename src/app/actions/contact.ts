"use server";

import { Resend } from "resend";
import { siteConfig } from "@/data/siteConfig";

// Make sure not to fail at build time if env var is missing
const resendApiKey = process.env.RESEND_API_KEY || "";
const resend = new Resend(resendApiKey);

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string;
};

export type ContactFormState = {
  success: boolean;
  message?: string;
  error?: string;
  /** Echoed back on error so the form can keep what the user typed. */
  values?: ContactFormValues;
};

const FALLBACK = `Please try again, or call / WhatsApp us on ${siteConfig.phone}.`;

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values: ContactFormValues = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    program: String(formData.get("program") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  // Name, phone and inquiry type are required; email and message are optional.
  if (!values.name) return { success: false, values, error: "Please enter your name." };
  if (values.phone.replace(/\D/g, "").length < 10)
    return { success: false, values, error: "Please enter a 10-digit phone number so we can call you back." };
  if (!values.program) return { success: false, values, error: "Please choose what you're asking about." };

  try {
    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY");
      return { success: false, values, error: `We couldn't send your request. ${FALLBACK}` };
    }

    const e = {
      name: escapeHtml(values.name),
      email: escapeHtml(values.email || "Not given"),
      phone: escapeHtml(values.phone),
      program: escapeHtml(values.program),
      message: escapeHtml(values.message || "No message.").replace(/\n/g, "<br>"),
    };

    const { error } = await resend.emails.send({
      from: "PowerMyTennis <noreply@powermysport.com>",
      to: [siteConfig.email],
      ...(values.email ? { replyTo: values.email } : {}),
      subject: `New Inquiry: ${values.program} — ${values.name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f7f6f2;">
          <div style="background:#22261B;padding:24px 32px;border-radius:12px 12px 0 0;">
            <h2 style="color:#C6D92B;margin:0;font-size:20px;letter-spacing:1px;text-transform:uppercase;">New Inquiry — PowerMyTennis</h2>
          </div>
          <div style="background:#ffffff;padding:32px;border:1px solid #e2e0da;border-top:none;border-radius:0 0 12px 12px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0efeb;color:#6b6960;font-size:12px;text-transform:uppercase;letter-spacing:1px;width:140px;">Inquiry</td><td style="padding:10px 0;border-bottom:1px solid #f0efeb;font-weight:700;color:#22261B;">${e.program}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0efeb;color:#6b6960;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #f0efeb;color:#22261B;">${e.name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0efeb;color:#6b6960;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f0efeb;color:#22261B;">${e.phone}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0efeb;color:#6b6960;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Email</td><td style="padding:10px 0;border-bottom:1px solid #f0efeb;color:#22261B;">${e.email}</td></tr>
            </table>
            <div style="margin-top:24px;">
              <p style="color:#6b6960;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;">Message</p>
              <p style="background:#f7f6f2;padding:16px;border-radius:8px;color:#22261B;line-height:1.6;margin:0;">${e.message}</p>
            </div>
          </div>
          <p style="text-align:center;color:#a09d95;font-size:11px;margin-top:16px;">${values.email ? `Reply directly to this email to respond to ${e.name}.` : `No email given — call ${e.name} on ${e.phone}.`}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, values, error: `We couldn't send your request. ${FALLBACK}` };
    }

    return {
      success: true,
      message: `We'll call you on ${values.phone} within 24 hours to confirm a time. Need us sooner? WhatsApp ${siteConfig.phone}.`,
    };
  } catch (err) {
    console.error("Contact form failed:", err);
    return { success: false, values, error: `We couldn't send your request. ${FALLBACK}` };
  }
}
