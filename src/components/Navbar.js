"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/");
  }
  //   console.log(data);
  return (
    <header className="w-full bg-slate-200">
      <nav className="max-w-6xl mx-auto flex justify-between py-6 font-semibold">
        <Link href="/">My-Work</Link>

        <div>
          {status === "unauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <div className="flex gap-4">
              {data?.user?.name}
              <button onClick={() => signOut()}>Logout</button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
