import EditForm from "@/components/EditForm";
import getBlogById from "@/utils/getBlogsById";
import getCurrentUser from "@/utils/getCurrentUser";

const page = async ({ params }) => {
  const { blogId } = params;

  const blog = await getBlogById(blogId);
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return null;
  }

  const { name, imageSrc, description } = blog;

  if (!blogId || typeof blogId !== "string") {
    return null;
  }

  if (!blog) {
    throw new Error("No blog found");
  }
  // console.log(blogId);
  // console.log(blog);

  return (
    <div>
      <EditForm
        name={blog?.name}
        description={blog?.description}
        blogId={blog?.id}
        imageSrc={blog?.imageSrc}
      />
    </div>
  );
};

export default page;
