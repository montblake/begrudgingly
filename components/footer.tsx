// import Link from "next/link";
// import BuyButton from "./buy_button";

export default function Footer() {
  return (
    <div className="w-full hidden md:block h-[3rem] text-neutral-400 bg-neutral-800 px-4 md:px-12 py-0 border-t border-neutral-700">
      <div className="w-full h-full flex flex-row justify-between items-center gap-x-4  ">
        <h1 className="text-xs uppercase inline-block">
          Charles Dickens Begrudgingly{" "}
          <span className="inline xl:hidden">...</span>
          <span className="hidden xl:inline">
            Performs <span className="italic">A Christmas Carol</span> Again.
          </span>
        </h1>
        <p className="text-xs inline-block">
          <span className="hidden lg:inline lowercase">
            Created and performed
          </span>
          <span className=""> by Blake Montgomery</span>
        </p>

        <a
          href="https://thisisaclownshow.com"
          target="_blank"
          className="focus:outline-none focus:border-b-2 focus:border-blue-400 hover:text-red-600 active:scale-95 transition-all duration-300 ease-in-out"
        >
          <p className="text-xs inline-block text-neutral-400 hover:text-red-600 active:underline">
            <span className="hidden lg:inline">This is a </span>
            <span className=" uppercase">clownshow</span>
          </p>
        </a>
      </div>
    </div>
  );
}
