import Image from "next/image";
import OnSaleButtonMobile from "./on-sale_button_mobile";
import OnSaleButtonMedium from "./on-sale_button_medium";

export default function Schedule() {
  return (
    <div className="w-full mt-4 md:pr-2 md:pl-6">
      <div className="w-full h-auto flex flex-row justify-center items-start gap-8 md:gap-12 px-4 pt-4 md:pt-8 pb-6 md:pb-12 md:px-8 bg-gradient-to-b from-amber-200/80 via-amber-400/80 to-amber-500/80 rounded-t-xl md:rounded-xl overflow-hidden">
        <div className="w-1/3 md:w-1/4 h-auto self-stretch flex flex-col items-between justify-between gap-0 pl-0">
          <div className="w-full flex flex-col items-start justify-center gap-0">
            <h2 className="text-4xl md:text-7xl tracking-tighter font-bold text-neutral-950 text-center">
              2025
            </h2>
            <h3 className="text-xs md:text-xl tracking-tighter md:-mt-2 font-bold uppercase text-neutral-950 text-center">
              Performances
            </h3>
            <p className="text-xs md:text-sm mt-4">at</p>
            <div className="flex flex-col items-start justify-center gap-0">
              <h2 className="text-base md:text-lg font-bold">Theater Wit</h2>
              <p className="text-xs md:text-base">1229 W. Belmont</p>
              <p className="text-xs md:text-base mb-4">Chicago, IL 60657</p>
              <h3 className="text-xs md:text-sm font-bold uppercase">
                Box Office
              </h3>
              <a
                href="tel:773-975-8150"
                className="text-xs md:text-base hover:border-b border-neutral-950"
              >
                (773) 975-8150
              </a>
              <a
                href="https://theaterwit.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-base hover:border-b border-neutral-950"
              >
                theaterwit.org
              </a>
            </div>
          </div>
          <div className="w-full md:w-[80%] aspect-square flex flex-col items-center justify-center gap-0 rounded-xl p-0 relative">
            <a
              href="https://thisisaclownshow.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/clownshow_logo_tent.avif"
                alt="This is a clownshow."
                width={200}
                height={200}
                quality={50}
                loading="lazy"
                sizes="(max-width: 768px) 33vw, 25vw"
                className="w-full h-auto object-contain object-center relative -left-0 top-1 md:top-0 opacity-80 rotate-[-4deg] hover:scale-105 transition-all duration-300"
              />
            </a>
          </div>
        </div>
        <div className="w-2/3 md:w-1/2 flex flex-col items-start justify-center gap-0">
          <p className="text-xs md:text-base">
            Thu<span className="hidden md:inline">rsday</span>, December 4 at
            8pm <span className="text-xs md:text-sm">[1]</span>
          </p>
          <p className="text-xs md:text-base">
            Fri<span className="hidden md:inline">day</span>, December 5 at 8pm{" "}
            <span className="text-xs md:text-sm">[1]</span>
          </p>
          <p className="text-xs md:text-base">
            Sat<span className="hidden md:inline">urday</span>, December 6 at
            8pm <span className="text-xs md:text-sm">[1]</span>
          </p>
          <p className="text-xs md:text-base mb-2">
            Sun<span className="hidden md:inline">day</span>, December 7 at 7pm{" "}
            <span className="text-xs md:text-sm">[2]</span>
          </p>
          <p className="text-xs md:text-base">
            Thu<span className="hidden md:inline">rsday</span>, December 11 at
            8pm
          </p>
          <p className="text-xs md:text-base">
            Fri<span className="hidden md:inline">day</span>, December 12 at 8pm
          </p>
          <p className="text-xs md:text-base">
            Sat<span className="hidden md:inline">urday</span>, December 13 at
            8pm
          </p>
          <p className="text-xs md:text-base mb-2">
            Sun<span className="hidden md:inline">day</span>, December 14 at 3pm
          </p>
          <p className="text-xs md:text-base">
            Thu<span className="hidden md:inline">rsday</span>, December 18 at
            8pm <span className="text-xs md:text-sm">[3]</span>
          </p>
          <p className="text-xs md:text-base">
            Fri<span className="hidden md:inline">day</span>, December 19 at 8pm
          </p>
          <p className="text-xs md:text-base">
            Sat<span className="hidden md:inline">urday</span>, December 20 at
            8pm
          </p>
          <p className="text-xs md:text-base mb-2">
            Sun<span className="hidden md:inline">day</span>, December 21 at 3pm
          </p>
          <p className="text-xs md:text-base">
            Fri<span className="hidden md:inline">day</span>, December 26 at 8pm
          </p>
          <p className="text-xs md:text-base">
            Sat<span className="hidden md:inline">urday</span>, December 27 at
            3pm
          </p>
          <p className="text-xs md:text-base">
            Sat<span className="hidden md:inline">urday</span>, December 27 at
            8pm
          </p>
          <p className="text-xs md:text-base">
            Sun<span className="hidden md:inline">day</span>, December 28 at 3pm
          </p>

          <hr className="px-8 w-[100%] md:w-[80%] border-neutral-600 my-4" />
          <div className="flex flex-col items-start justify-center gap-0 text-xs md:text-sm">
            <p>[1] Previews, $30</p>
            <p>[2] Opening and Reception, $60</p>
            <p>[3] Archival Video Recording</p>
          </div>
        </div>
        <OnSaleButtonMedium />
      </div>

      <OnSaleButtonMobile />
    </div>
  );
}
