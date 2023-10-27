"use client";

import ImageUpload from "@/components/ImageUpload";
import Input from "@/components/Input";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const initialState = {
  name: "",
  imageSrc: "",
  description: "",
};

const page = () => {
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return router.push("/");
  }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const customValue = (id, value) => {
    setState((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/blogs", state);
      router.refresh();
      router.push("/");
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <form className="w-[600px] h-[700px] mx-auto py-8" onSubmit={onSubmit}>
      <div>
        <ImageUpload
          value={state.imageSrc}
          onChange={(value) => customValue("imageSrc", value)}
        />
      </div>

      <div className="flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2">
        <div>
          <Input
            name="name"
            id="name"
            placeholder="Blog Header"
            type="text"
            value={state.name}
            onChange={handleChange}
          />
          <Input
            name="description"
            id="description"
            placeholder="Blog Description"
            type="text"
            value={state.description}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-slate-200 py-4"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default page;
