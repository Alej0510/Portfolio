import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    //validation
    if (!name || !email || !message) {
      return new Response("Bad request", { status: 400 });
    }

    //send email via resend
    const emailData = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["alejandrocm1406@gmail.com"],
      reply_to: email as string,
      subject: "New message from portfolio",
      html: 
      `<div style="font-family: sans-serif; line-height: 1.5;">
          <h2>New Message from ${name}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>`,
    });

    if(emailData.error) {
      return new Response("Failed to send email", { status: 500 });
    }
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal server error", { status: 500 });
  }
};