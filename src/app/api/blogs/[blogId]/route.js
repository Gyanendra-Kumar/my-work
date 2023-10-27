import prisma from "@/utils/connect";
import getCurrentUser from "@/utils/getCurrentUser";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    throw new Error("No current user - Delete api");
  }

  const { blogId } = params;

  if (!blogId || typeof blogId !== "string") {
    throw new Error("Invalid Id");
  }

  const blog = await prisma.blog.deleteMany({
    where: {
      id: blogId,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(blog, { status: 200 });
}

export async function PUT(request, { params }) {
  const currentUser = await getCurrentUser();
  const json = await request.json();

  if (!currentUser) {
    throw new Error("No current user - Update api");
  }

  const { blogId } = params;

  if (!blogId || typeof blogId != "string") {
    throw new Error("Invalid Id");
  }

  const updated = await prisma.blog.update({
    where: {
      id: blogId,
    },
    data: json,
  });

  return NextResponse.json(updated, { status: 200 });
}
