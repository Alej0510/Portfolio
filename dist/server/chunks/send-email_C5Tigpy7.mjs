import { Resend } from 'resend';

const resend = new Resend("re_Z8xtm8d7_4zSDaSw47GhFBcjeMCnyStQZ");
const POST = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const subject = data.get("subject");
    if (!name || !email || !message) {
      return new Response("Bad request", { status: 400 });
    }
    const emailData = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["alejandrocm1406@gmail.com"],
      replyTo: email,
      subject: subject || "New message from portfolio",
      html: `<div style="font-family: sans-serif; line-height: 1.5;">
          <h2>New Message from ${name}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>`
    });
    if (emailData.error) {
      return new Response("Failed to send email", { status: 500 });
    }
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal server error", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
