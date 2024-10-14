import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, socialLink, description } = await request.json();
  console.log(
    "env " + process.env.NODEMAIL_USER,
    process.env.NODEMAIL_PASS,
    process.env.NODEMAIL_MAIL
  );
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "yandex",
    secure: true,
    port: 465,
    auth: { user: process.env.NODEMAIL_USER, pass: process.env.NODEMAIL_PASS },
  });
  // Define the email options
  const mailOptions = {
    from: "Mixailerm03@ya.ru",
    to: "Mixailerm03@ya.ru",
    subject: "Портфолио-форма",
    html: `
      <h1>Новый отклик</h1>
      <h2>Имя: ${name}</h2>
      <h2>Социальная сеть: ${socialLink}</h2>
      <h2>Описание: ${description}</h2>
  `,
  };
  // Send the email
  console.log("mailOptions " + mailOptions.from);
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  console.log("before Send the email");

  await transporter.sendMail(mailOptions);
  console.log("after Send the email");
  return NextResponse.json({ msg: "Сообщение отправлено!" });
}
