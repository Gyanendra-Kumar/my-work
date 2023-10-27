import getBlogById from "@/utils/getBlogsById";
import getCurrentUser from "@/utils/getCurrentUser";

const page = async ({ params }) => {
  const currentUser = await getCurrentUser();
  const { blogId } = params;

  if (!blogId || typeof blogId !== "string") {
    return null;
  }

  const blog = await getBlogById(blogId);

  if (!blog) {
    throw new Error("No blog found");
  }
  // console.log(blogId);
  console.log(blog);

  return (
    <div>
      <p>Edit page</p>
      <img src={blog?.imageSrc} />
    </div>
  );
};

export default page;
