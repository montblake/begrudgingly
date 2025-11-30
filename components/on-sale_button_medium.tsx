"use client";

import Image from "next/image";
import { fireAdsConversion } from "@/lib/fireAdsConversion";
import { track } from "@vercel/analytics/react";

export default function OnSaleButtonMedium() {
  return (
    <a
      href="https://www.theaterwit.org/tickets/productions/564/performances#top"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:block w-1/3 h-auto flex flex-col items-center justify-center bg-neutral-900 rounded-2xl p-4 -ml-12 self-stretch hover:scale-105 transition-all duration-300"
      onClick={() => {
        track("Tickets Button Clicked", {
          location: "On Sale Button Medium",
        });
        fireAdsConversion();
      }}
    >
      <div className="w-full h-[10%] flex flex-col items-center justify-center">
        <h3 className="text-center text-xl font-bold text-neutral-100 uppercase mb-4">
          On Sale Now
        </h3>
      </div>
      <div className="w-full h-[90%] relative">
        <Image
          src="/dickens_house_poster_2.avif"
          alt="Holiday Dickens Wrapped With Ribbon"
          width={500}
          height={750}
          quality={50}
          loading="lazy"
          sizes="(max-width: 768px) 50vw, 25vw"
          className="w-full h-full object-cover object-top rounded-xl"
        />
      </div>
    </a>
  );
}
