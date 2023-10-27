import prisma from "./connect";

export default async function getBlogById(blogId) {
  // const { blogId } = params;

  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id: blogId,
      },
      include: {
        user: true,
      },
    });

    if (!blog) {
      return null;
    }

    return {
      ...blog,
    };
  } catch (error) {
    throw new Error(error);
  }
}
