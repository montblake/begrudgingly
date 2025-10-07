import { Button } from "./ui/button";
import Image from "next/image";

export default function Schedule() {
  return (
    <div className="w-full md:pr-2 md:pl-6">
      <div className="w-full h-auto flex flex-row justify-center gap-8 px-4 pt-4 pb-6 md:p-8 bg-gradient-to-b from-amber-200/80 via-amber-400/80 to-amber-500/80 md:rounded-xl overflow-hidden">
        <div className="w-1/3 md:w-1/2 h-auto flex flex-col items-start justify-between gap-0">
          <div className="w-full">
            <h2 className="text-5xl tracking-tighter md:text-xl font-bold">
              2025
            </h2>
            <h3 className="text-xs md:text-base font-bold uppercase">
              Performances
            </h3>
            <hr className="px-8 w-[100%] md:w-[80%] border-neutral-600 my-4" />
            <div className="flex flex-col items-start justify-center gap-0">
              <h2 className="text-base md:text-lg font-bold">Theater Wit</h2>
              <p className="text-xs md:text-base">1229 W. Belmont</p>
              <p className="text-xs md:text-base">(773) 975-8150</p>
              <p className="text-xs md:text-base">theaterwit.org</p>
            </div>
          </div>

          <Button className="w-full bg-neutral-900 px-8 py-2 rounded-2xl mx-auto font-bold  uppercase text-neutral-300 border-2 border-black transition-all duration-300 text-center text-xs h-[100px]">
            On Sale Now
          </Button>
        </div>
        <div className="w-2/3 md:w-1/2 flex flex-col items-start justify-center gap-0">
          <p className="text-xs md:text-sm">
            Thu, December 4 at 8pm <span className="text-xs">[1]</span>
          </p>
          <p className="text-xs md:text-sm">
            Fri, December 5 at 8pm <span className="text-xs">[1]</span>
          </p>
          <p className="text-xs md:text-sm">
            Sat, December 6 at 8pm <span className="text-xs">[1]</span>
          </p>
          <p className="text-xs md:text-sm mb-2">
            Sun, December 7 at 7pm <span className="text-xs">[2]</span>
          </p>
          <p className="text-xs md:text-sm">Thu, December 11 at 8pm</p>
          <p className="text-xs md:text-sm">Fri, December 12 at 8pm</p>
          <p className="text-xs md:text-sm">Sat, December 13 at 8pm</p>
          <p className="text-xs md:text-sm mb-2">Sun, December 14 at 3pm</p>
          <p className="text-xs md:text-sm">
            Thu, December 18 at 8pm <span className="text-xs">[3]</span>
          </p>
          <p className="text-xs md:text-sm">Fri, December 19 at 8pm</p>
          <p className="text-xs md:text-sm">Sat, December 20 at 8pm</p>
          <p className="text-xs md:text-sm mb-2">Sun, December 21 at 3pm</p>
          <p className="text-xs md:text-sm">Fri, December 26 at 8pm</p>
          <p className="text-xs md:text-sm">Sat, December 27 at 3pm</p>
          <p className="text-xs md:text-sm">Sat, December 27 at 8pm</p>
          <p className="text-xs md:text-sm">Sun, December 28 at 3pm</p>

          <hr className="px-8 w-[100%] md:w-[80%] border-neutral-600 my-4" />
          <div className="flex flex-col items-start justify-center gap-0 text-xs">
            <p>[1] Previews, $30</p>
            <p>[2] Opening and Reception, $60</p>
            <p>[3] Archival Video Recording</p>
          </div>
        </div>
      </div>
    </div>
  );
}
