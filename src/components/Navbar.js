"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = ({ currentUser }) => {
  const { data, status } = useSession();
  const router = useRouter();

  // if (status === "authenticated") {
  //   router.push("/");
  // }
  // console.log(currentUser);
  return (
    <header className="w-full bg-slate-200">
      <nav className="max-w-6xl mx-auto flex justify-between py-6 font-semibold">
        <Link href="/">My-Work</Link>

        <div>
          {currentUser ? (
            <div className="flex gap-4  items-center">
              {currentUser?.name}
              <Link href="/write">Write</Link>
              <button onClick={() => signOut()}>Sign out</button>

              <Image
                src={currentUser?.image}
                alt={currentUser?.name}
                width={30}
                height={30}
                className="rounded-full cursor-pointer"
              />
            </div>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>

        {/* <div>
          {status === "unauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <div className="flex gap-4">
              {data?.user?.name}
              <button onClick={() => signOut()}>Logout</button>
            </div>
          )}
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
