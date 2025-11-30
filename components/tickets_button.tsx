"use client";

import { track } from "@vercel/analytics/react";
import { fireAdsConversion } from "@/lib/fireAdsConversion";

export default function TicketsButton() {
  return (
    <a
      href="https://www.theaterwit.org/tickets/productions/564/performances#top"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full relative z-30 flex flex-col items-center justify-center mb-4"
      onClick={() => {
        track("Tickets Button Clicked");
        fireAdsConversion();
      }}
    >
      <span className="w-[80%] bg-gradient-to-b from-amber-200/80 via-amber-400/80 to-amber-500/80 px-8 py-6 rounded-2xl mx-auto font-bold uppercase text-neutral-900 border-2 border-black hover:scale-105 hover:bg-amber-300/90 transition-all duration-300 text-center text-base mt-6 mb-4 cursor-pointer inline-block">
        Tickets
      </span>
    </a>
  );
}
