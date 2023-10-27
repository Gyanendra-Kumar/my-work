import SingleBlogs from "@/components/SingleBlogs";
import getBlogs from "@/utils/getBlogs";
import getCurrentUser from "@/utils/getCurrentUser";
import axios from "axios";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blogs");

  if (!res.ok) {
    throw new Error("Couldn't get data");
  }
  const data = res.json();
  return data;
};

export default async function Home() {
  const currentUser = await getCurrentUser();
  // const blogs = await getBlogs();
  const blogs = await getData();

  // console.log(blogs);
  return (
    <>
      <h1 className="text-center mt-4 uppercase text-xl font-semibold">
        All Blogs
      </h1>
      <div className="flex min-h-screen flex-col items-center justify-between p-24 gap-4">
        {blogs.map((item) => (
          <div key={item.id}>
            <SingleBlogs {...item} currentUser={currentUser} />
          </div>
        ))}
      </div>
    </>
  );
}
