"use client";

import PullQuote from "@/app/components/pull_quote";
import IntroText from "@/app/components/intro_text";
import Image from "next/image";
export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-start md:justify-start md:items-center mx-auto pb-4">
      <div
        className="w-full max-w-[1000px] mx-auto lg:h-fit flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start gap-0
        mt-16 md:overflow-scroll scroll-smooth
      "
      >
        <Image
          src="/new_poster_trimmed.png"
          alt="Blake Montgomery Headshot"
          width={1000}
          height={1000}
          className="w-full h-auto max-w-[420px] md:max-w-[500px] pt-4 md:pl-8 md:pr-0 opacity-100"
        />

        <div className="w-full h-full font-serif px-4 sm:px-8 pt-8 md:pt-14 md:mr-auto md:pl-0 md:pr-8 flex flex-col justify-start items-center text-neutral-400 md:items-start md:justify-start md:max-w-[500px] pb-16">
          <PullQuote />
          {/* <hr className="w-full border-neutral-400/80 mt-16 mb-8" /> */}
          <div className="w-full h-4 flex justify-center items-center my-8">
            <Image
              src={"/diamond-3.png"}
              alt={"decoration"}
              width={20}
              height={20}
              className="opacity-75 w-4 h-auto"
            />
          </div>
          <IntroText />
          {/* <div className="w-full h-4 flex justify-center items-center my-8">
            <Image
              src={"/diamond-3.png"}
              alt={"decoration"}
              width={20}
              height={20}
              className="opacity-75 w-4 h-auto"
            />
          </div> */}
        </div>
      </div>

      {/* <Footer /> */}
    </main>
  );
}
