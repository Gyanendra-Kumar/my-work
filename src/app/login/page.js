"use client";

import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Loading from "../loading";

const page = () => {
  const { status } = useSession();
  const router = useRouter();

  //   console.log(data, status);
  if (status === "loading") {
    return <Loading />;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <>
      <div className="flex justify-center items-center h-[80vh]">
        <div className="w-[500px] h-[300px] bg-slate-100 rounded-xl shadow-lg">
          <div className="flex justify-between items-center flex-col gap-4 mt-8 ">
            <h3 className="uppercase font-semibold text-xl">Login Page</h3>
            <div className="flex flex-col justify-center items-center w-full h-full gap-8 mt-8">
              <button
                className="bg-slate-300 w-[75%] py-4 rounded-md font-bold text-xl text-[#1E2f97] hover:shadow-md transition-all"
                onClick={() => signIn("github")}
              >
                GitHub Login
              </button>

              <button
                className="bg-slate-300 w-[75%] py-4 rounded-md font-bold text-xl text-[#971e1ead] hover:shadow-md transition-all"
                onClick={() => signIn("google")}
              >
                Google Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
