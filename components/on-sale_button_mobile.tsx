"use client";

import Image from "next/image";
import { fireAdsConversion } from "@/lib/fireAdsConversion";
import { track } from "@vercel/analytics/react";

export default function OnSaleButtonMobile() {
  return (
    <div className="md:hidden w-full h-auto flex flex-row items-center justify-center bg-amber-500/80 p-4 rounded-b-xl">
      <a
        className="w-full h-auto flex flex-row items-center justify-center bg-neutral-900 rounded-2xl hover:scale-105 transition-all duration-300"
        href="https://www.theaterwit.org/tickets/productions/564/performances#top"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          track("Tickets Button Clicked", {
            location: "On Sale Button Mobile",
          });
          fireAdsConversion();
        }}
      >
        <div className="w-full flex flex-col items-center justify-center pl-4">
          <h3 className="text-center text-base font-bold text-neutral-300 uppercase">
            On Sale Now
          </h3>
        </div>
        <div className="w-full h-auto p-4">
          <Image
            src="/dickens_house_poster_2.avif"
            alt="Holiday Dickens Wrapped With Ribbon"
            width={300}
            height={450}
            quality={50}
            loading="lazy"
            sizes="25vw"
            className="w-full h-full object-cover object-top rounded-xl border border-neutral-400"
          />
        </div>
      </a>
    </div>
  );
}
