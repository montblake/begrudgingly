"use client";

import PullQuote from "@/app/components/pull_quote";
import IntroText from "@/app/components/intro_text";
import Image from "next/image";
export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-start lg:justify-between mx-auto pb-4 lg:pb-16">


      <div
        className="w-full max-w-[1200px] mx-auto lg:h-fit flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-start gap-0
        mt-16 lg:overflow-scroll
      "
      >
          <Image
            src="/new_poster_trimmed.png"
            alt="Blake Montgomery Headshot"
            width={1000}
            height={1000}
            className="w-full h-auto pt-4 px-4 opacity-100"
          />

        <div className="w-full h-full lg:w-1/2 font-serif px-4 sm:px-12 lg:px-16 -mt-8 lg:pt-0 lg:px-8 lg:pr-24 flex flex-col justify-start items-start text-neutral-400">
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
          <div className="w-full h-4 flex justify-center items-center my-8">
                          <Image
                            src={"/diamond-3.png"}
                            alt={"decoration"}
                            width={20}
                            height={20}
                            className="opacity-75 w-4 h-auto"
                            />
                          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </main>
  );
}
