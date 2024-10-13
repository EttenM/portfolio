import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, socialLink, description } = await request.json();

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: { user: "ermishkin.m0001@gmail.com", pass: "gqyu iltb mmow szht" },
    // "gqyu iltb mmow szht"
  });
  // Define the email options
  const mailOptions = {
    from: "ermishkin.m0001@gmail.com",
    to: "ermishkin.m0001@gmail.com",
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
