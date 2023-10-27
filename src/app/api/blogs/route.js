import prisma from "@/utils/connect";
import getCurrentUser from "@/utils/getCurrentUser";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
    });
    // console.log(blogs);
    // const safeBlogs = blogs.map((blog) => ({
    //   ...blog,
    //   createdAt: blog.createdAt.toISOString(),
    // }));
    // console.log(safeBlogs);
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred while fetching blogs" },
      { status: 500 }
    );
  }
}

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
