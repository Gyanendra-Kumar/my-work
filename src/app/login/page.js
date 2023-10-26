"use client";

import { signIn, useSession } from "next-auth/react";
import React from "react";

const page = () => {
  const { data, status } = useSession();

  console.log(data, status);

  return <button onClick={() => signIn("google")}>Google</button>;
};

export default page;
