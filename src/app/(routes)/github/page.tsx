"use client";
import { signIn } from "next-auth/react";

const githubPage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center gap-2 py-12">
    <button
      className="text-red-300 border border-red-300 rounded-md px-4 py-2"
      onClick={() => signIn("github")}
    >
      Sign in with GitHub
    </button>
  </div>
  );
};

export default githubPage;