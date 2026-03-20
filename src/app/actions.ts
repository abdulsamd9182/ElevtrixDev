"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendHireUsEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const projectType = formData.get('projectType') as string;
  const details = formData.get('details') as string;

  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_your_api_key_here') {
    return { error: "Email service is not configured. Please add your Resend API key to .env.local." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'ElevtrixDev <onboarding@resend.dev>',
      to: 'abdulsamadkhan9182@gmail.com',
      subject: `New Project Inquiry: ${projectType} from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #3b82f6;">New Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
            <p><strong>Project Details:</strong></p>
            <p>${details}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #888;">This email was sent from your ElevtrixDev contact form.</p>
        </div>
      `,
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch (error) {
    return { error: "An unexpected error occurred while sending the email." };
  }
}
