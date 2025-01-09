import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-2 py-6">
        <Link
          href="github"
          className=" text-blue-300 border border-blue-300 rounded-md px-4 py-2 w-36 text-center"
        >
          github_signIn
        </Link>
      </div>
    </>
  );
}
