"use client";

import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import LayeredImage from "@/app/components/layered_image";
import BuyButton from "@/app/components/buy_button";
import PullQuote from "@/app/components/pull_quote";
import IntroText from "@/app/components/intro_text";
import SecondNav from "@/app/components/second_nav";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-start lg:justify-between bg-black relative mx-auto">
      <Nav />

      <div
        className="w-full max-w-[1200px] mx-auto lg:h-fit flex flex-col bg-black lg:flex-row lg:justify-between lg:items-start gap-0
        mt-6 lg:mt-12 lg:overflow-scroll
      "
      >
        <div className="w-full lg:hidden pt-8 lg:pt-0">
          <LayeredImage />
          <div className="mt-8">
            <BuyButton />
          </div>
        </div>

        <div className="w-1/2 hidden lg:block lg:flex flex-col justify-start items-start ">
          <LayeredImage />
        </div>

        <div className="w-full h-full lg:w-1/2 relative z-40 font-serif px-12 sm:px-24 md:px-32 lg:px-48 pb-8 lg:pt-0 lg:px-8 lg:pb-0 lg:pr-24 flex flex-col justify-start items-start text-gray-400">
          <hr className="w-full border-gray-400/80 mt-16 lg:mt-8" />
          <PullQuote />
          <hr className="w-full border-gray-400/80 mt-16 mb-8" />
          <div className="mt-0 mb-8 w-full hidden lg:block">
            <BuyButton />
          </div>
          <IntroText />
          <div className="w-full hidden lg:block">
            <SecondNav />
          </div>
        </div>
      </div>
      <div className="w-full lg:hidden px-12 sm:px-24 md:px-32 lg:px-48 xl:px-48 lg:px-16">
        <SecondNav />
      </div>
      <Footer />
    </main>
  );
}
