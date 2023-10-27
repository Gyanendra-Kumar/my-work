"use client";

import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsFillPencilFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import axios from "axios";

const GetIcons = ({ blog }) => {
  const router = useRouter();
  //   console.log(blog);

  const onDelete = async (id) => {
    try {
      await axios.delete(`/api/blogs/${id}`);
      router.push("/");
      router.refresh();
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div>
      <div className="flex gap-4 mt-4">
        <RiDeleteBin5Line
          onClick={() => onDelete(blog?.id)}
          className=" cursor-pointer text-[1.5rem]"
        />
        <BsFillPencilFill
          onClick={() => router.push(`/edit/${blog?.id}`)}
          className=" cursor-pointer text-[1.2rem]"
        />
      </div>
    </div>
  );
};

export default GetIcons;
