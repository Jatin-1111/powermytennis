'use server';

import { Resend } from 'resend';
import { siteConfig } from '@/data/siteConfig';

// Make sure not to fail at build time if env var is missing
const resendApiKey = process.env.RESEND_API_KEY || '';
const resend = new Resend(resendApiKey);

export type ContactFormState = {
  success: boolean;
  message?: string;
  error?: string;
};

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const program = formData.get('program') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !phone || !program || !message) {
      return { success: false, error: 'All fields are required.' };
    }

    if (!resendApiKey) {
       console.error("Missing RESEND_API_KEY");
       return { success: false, error: 'Server configuration error: Missing API Key.' };
    }

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Placeholder domain. Must be a verified domain in production.
      to: [siteConfig.email],
      subject: `New Inquiry: ${program} - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProgram of Interest: ${program}\n\nMessage:\n${message}`,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, message: 'Your inquiry has been sent successfully! Our team will contact you soon.' };
  } catch (error) {
    return { success: false, error: 'Failed to send message. Please try again later.' };
  }
}
