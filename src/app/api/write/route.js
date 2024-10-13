import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

export async function POST(request) {
  const { name, socialLink, description } = await request.json();
  console.log(name, socialLink, description);
  console.log(process.env.MAIL_USER, process.env.MAIL_PASS);
  await prisma.message.create({
    data: {
      name: name,
      socialLink: socialLink,
      description: description,
    },
  });
  return NextResponse.json({ msg: "Сообщение отправлено!" });
}
