"use client";

import Image from "next/image";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsFillPencilFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const SingleBlogs = ({ data, currentUser }) => {
  const { id, name, imageSrc, description, userId } = data;
  const router = useRouter();

  // console.log(data);
  //   const onDelete = async () => {
  //     try {
  //       await axios.delete(`/api/blogs/${id}`);
  //       router.refresh();
  //     } catch (error) {
  //       throw new Error(error);
  //     }
  //   };

  const onDelete = async (id) => {
    try {
      await axios.delete(`/api/blogs/${id}`);
      router.push("/");
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="w-[1100px] border-2 p-4">
      <Link href={`/blog/${id}`}>
        <div>
          <div className="flex gap-2 justify-between items-center">
            <Image
              width={400}
              height={400}
              className="  object-contain"
              src={imageSrc}
              alt="Blog Image"
            />

            <div className="w-[530px] flex flex-col gap-4 leading-[1.5]">
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          </div>
          <h4 className="mt-2">Created By: {data?.user?.name}</h4>
        </div>
      </Link>

      {userId === currentUser?.id && (
        <div className="flex gap-4 mt-4">
          <RiDeleteBin5Line
            onClick={() => onDelete(id)}
            className=" cursor-pointer text-[1.5rem]"
          />
          <BsFillPencilFill
            onClick={() => router.push(`/edit/${id}`)}
            className=" cursor-pointer text-[1.2rem]"
          />
        </div>
      )}
    </div>
  );
};

export default SingleBlogs;
