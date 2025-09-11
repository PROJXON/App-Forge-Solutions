// app/api/contact/route.ts
import { Resend } from 'resend';

// export const runtime = 'edge';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const response = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'admin@appforgesolutions.com',
      subject: 'New Contact Form Submission',
      replyTo: email,
      html: `
        <strong>Name:</strong> ${name}<br />
        <strong>Email:</strong> ${email}<br />
        <strong>Message:</strong><br />
        <p>${message}</p>
      `
    });

    return new Response(JSON.stringify({ status: 'ok', response }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
