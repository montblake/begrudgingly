import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-2 text-center text-neutral-400 p-8">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        <button className="bg-neutral-950 border border-neutral-400 text-neutral-400 text-sm px-4 py-2 rounded-xl hover:bg-neutral-800 transition-all duration-300 ease-in-out active:scale-95">
          Return Home
        </button>
      </Link>
    </div>
  );
}
