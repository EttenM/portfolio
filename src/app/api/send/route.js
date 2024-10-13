import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, socialLink, description } = await request.json();

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "yandex",
    auth: { user: process.env.NODEMAIL_USER, pass: process.env.NODEMAIL_PASS },
    // "gqyu iltb mmow szht"
  });
  // Define the email options
  const mailOptions = {
    from: process.env.NODEMAIL_MAIL,
    to: process.env.NODEMAIL_MAIL,
    subject: "Портфолио-форма",
    html: `
      <h1>Новый отклик</h1>
      <h2>Имя: ${name}</h2>
      <h2>Социальная сеть: ${socialLink}</h2>
      <h2>Описание: ${description}</h2>
  `,
  };
  // Send the email
  console.log("mailOptions " + mailOptions);
  console.log("Send the email");
  await transporter.sendMail(mailOptions);
  console.log("after Send the email");
  return NextResponse.json({ msg: "Сообщение отправлено!" });
}
