"use client";

import Nav from "@/app/components/nav";
import CallToAction from "@/app/components/call_to_action";
import Footer from "@/app/components/footer";
import LayeredImage from "@/app/components/layered_image";
import PullQuote from "@/app/components/pull_quote";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-start bg-black relative mx-auto">
      <Nav />
      <PullQuote />

      <div
        className="w-full landscape:h-[80vh] flex flex-col bg-black landscape:flex-row-reverse landscape:justify-between landscape:items-start gap-0

      "
      >
        <div className="w-full landscape:hidden ">
          <LayeredImage />
        </div>

        <div className="w-full landscape:w-1/3 landscape:h-full">
          <CallToAction />
        </div>
        <div className="w-1/2 hidden landscape:block landscape:flex flex-col justify-start items-start ">
          <LayeredImage />
        </div>

        <div className="w-full h-full landscape:w-1/3 relative z-40 font-serif px-12 sm:px-24 md:px-32 lg:px-48 pb-16 sm:pb-24 md:pb-32 lg:pb-48 pt-0 sm:pt-4 md:pt-8 lg:pt-12 landscape:pt-0 landscape:pl-8 landscape:pr-0 landscape:mt-0 landscape:pb-0 flex flex-col justify-start items-start ">
          <div className="flex flex-col justify-end items-end   px-20 landscape:px-8  landscape:pr-16 h-full pb-12">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl landscape:text-base drop-shadow-lg">
              This one-of-a-kind holiday production, which imagines a
              still-living Dickens forced to perform his famous{" "}
              <span className="italic">A Christmas Carol</span> for the 171st
              consecutive year, lovingly celebrates and skewers the famous
              author and our Christmas traditions.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl landscape:text-base drop-shadow-lg mt-4">
              <span className="italic">Charles Dickens Begrudgingly...</span>{" "}
              originally charmed audiences during its Chicago debut at The
              Building Stage in December 2011 and 2012. Now, ten years after the
              closing of The Building Stage, former Artistic Director Blake
              Montgomery revives his Jeff Award-winning solo performance for the
              2024 holiday season.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
