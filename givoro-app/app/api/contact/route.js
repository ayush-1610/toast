import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT || '587', 10),
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: 'hello@givoro.com',
      subject: `Website Contact from ${data.name}`,
      text: JSON.stringify(data, null, 2),
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response('Error', { status: 500 });
  }
}
