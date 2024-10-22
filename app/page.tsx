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
    <main className="w-full min-h-screen flex flex-col justify-start items-start bg-black relative mx-auto">
      <Nav />

      <div
        className="w-full landscape:h-fit flex flex-col bg-black landscape:flex-row landscape:justify-between landscape:items-start gap-0
        mt-6 landscape:mt-12 landscape:overflow-scroll
      "
      >
        <div className="w-full landscape:hidden pt-8 landscape:pt-0">
          <LayeredImage />
          <div className="mt-8">
            <BuyButton />
          </div>
        </div>

        <div className="w-1/2 hidden landscape:block landscape:flex flex-col justify-start items-start ">
          <LayeredImage />
        </div>

        <div className="w-full h-full landscape:w-1/2 relative z-40 font-serif px-12 sm:px-24 md:px-32 lg:px-48 pb-8 landscape:pt-0 landscape:px-8 landscape:pb-0 landscape:pr-24 flex flex-col justify-start items-start text-gray-400">
          <hr className="w-full border-gray-400/80 mt-16 landscape:mt-8" />
          <PullQuote />
          <hr className="w-full border-gray-400/80 mt-16 mb-8" />
          <div className="mt-0 mb-8 w-full hidden landscape:block">
            <BuyButton />
          </div>
          <IntroText />
          <div className="w-full hidden landscape:block">
            <SecondNav />
          </div>
        </div>
      </div>
      <div className="w-full landscape:hidden px-12 sm:px-24 md:px-32 lg:px-48 xl:px-48 landscape:px-16">
        <SecondNav />
      </div>
      <Footer />
    </main>
  );
}
