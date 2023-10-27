import prisma from "@/utils/connect";
import getCurrentUser from "@/utils/getCurrentUser";
import { NextResponse } from "next/server";

export async function POST(request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return null;
  }

  try {
    const body = await request.json();

    const blog = await prisma.blog.create({
      data: {
        ...body,
        userId: currentUser.id,
      },
    });
    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong in blog POST api" },
      { status: 500 }
    );
  }
}
