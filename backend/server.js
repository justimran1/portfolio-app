import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, message } = req.body;

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "your@email.com",
      subject: "New Contact Message",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
