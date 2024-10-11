import { NextResponse } from "next/server";
import prisma from "../../../prisma/prisma";

export async function POST(request) {
  const { name, socialLink, description } = await request.json();
  await prisma.message.create({
    data: {
      name: name,
      socialLink: socialLink,
      description: description,
    },
  });
  return NextResponse.json({ msg: "Сообщение отправлено!" });
}
