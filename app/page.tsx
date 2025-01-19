"use client";

import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import LayeredImage from "@/app/components/layered_image";
import PullQuote from "@/app/components/pull_quote";
import IntroText from "@/app/components/intro_text";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-start lg:justify-between bg-victorian-texture bg-cover bg-center bg-no-repeat relative relative mx-auto">
      <Nav />
      <div className="w-full h-full bg-black/85 absolute top-0 left-0 z-0" />

      <div
        className="w-full max-w-[1200px] mx-auto lg:h-fit flex flex-col lg:flex-row lg:justify-between lg:items-start gap-0
        mt-16 lg:overflow-scroll mb-12
      "
      >
        <div className=" w-full pt-8 lg:pt-0 lg:w-1/2 lg:flex flex-col justify-start items-start ">
          <LayeredImage />
        </div>

        <div className="w-full h-full lg:w-1/2 relative z-40 font-serif px-4 sm:px-12 lg:px-16 pb-8 lg:pt-0 lg:px-8 lg:pb-0 lg:pr-24 flex flex-col justify-start items-start text-gray-400">
          <hr className="w-full border-gray-400/80 mt-0 lg:mt-8" />
          <PullQuote />
          <hr className="w-full border-gray-400/80 mt-16 mb-8" />
          <IntroText />
        </div>
      </div>

      <Footer />
    </main>
  );
}
