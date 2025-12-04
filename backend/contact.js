import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();
const resend = new Resend(process.env.RESEND_API_KEY);
console.log("Resend API Key:", process.env.RESEND_API_KEY);
export async function sendContactEmail({ name, email, subject, message }) {
  return resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "olubodunalade@gmail.com",
    subject: subject,
    html: `
      <h3>New Contact Message</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b> ${message}</p>
    `,
  });
}
