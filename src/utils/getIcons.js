"use client";

import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsFillPencilFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import axios from "axios";

const GetIcons = (id) => {
  const router = useRouter();

  const onDelete = async (id) => {
    try {
      await axios.delete(`/api/blogs/${id}`);
      router.refresh();
      router.push("/");
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default GetIcons;
