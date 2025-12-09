// app/components/first_left.tsx

import Image from "next/image";
import TicketsButton from "./tickets_button";

const MainImage = {
  src: "/dickens_poster_2025.avif",
  alt: "Charles Dickens Begrudgingly... Poster",
  width: 600,
  height: 900,
};

export default function FirstLeft() {
  return (
    <div className="LEFT_COLUMN w-full ">
      <Image
        src={MainImage.src}
        alt={MainImage.alt}
        width={MainImage.width}
        height={MainImage.height}
        // fill
        sizes="(max-width: 768px) 100vw, 600pc"
        loading="eager"
        priority
        quality={75}
        className="object-contain object-center rounded-xl -mt-2 md:-mt-4 mx-auto"
      />
      <div className="w-full md:hidden flex flex-col items-center justify-center -mt-8">
        <TicketsButton />
      </div>
      <div className="w-full flex flex-col gap-0 rounded-xl px-2 md:px-6 text-neutral-950">
        <div className="w-full rounded-xl px-6 py-0 md:px-6 md:py-0 bg-neutral-900/30c backdrop-blur border border-neutral-600 relative flex flex-col items-start justify-start overflow-hidden">
          <div className="w-full px-4 py-2">
            <h2 className="text-3xl uppercase font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-amber-100/80 via-amber-300/80 to-amber-500/80 my-2">
              C<span className="text-2xl">hicago</span> 2025
            </h2>
          </div>
          <div className="w-full bg-neutral-300 backdrop-blur relative z-30 flex flex-col items-start justify-center overflow-hidden h-full md:h-auto rounded-xl px-4 mb-8 md:mb-0 relative">
            <Image
              src="/dickens_illustration.avif"
              alt="Charles Dickens Illustration"
              width={200}
              height={200}
              loading="lazy"
              quality={50}
              className="w-1/2 absolute bottom-2 md:bottom-2 right-2 md:right-2 mix-blend-multiply opacity-100"
            />
            <div className="w-full rounded-xl flex flex-col items-start justify-start gap-0 pt-6 pb-8 pl-2 md:pl-0">
              <h2 className="text-lg md:text-xl font-bold">
                December 4&ndash;28
              </h2>
              <p className="text-sm italic font-bold my-2">at</p>
              <h3 className="text-lg md:text-xl font-bold mb-0">Theater Wit</h3>
              <h4 className="text-sm font-bold text-center ">
                1229 W. Belmont
              </h4>
              <p className="text-sm italic font-bold text-center mt-2">
                box office
              </p>
              <div className="text-sm font-bold text-center flex flex-col items-start justify-center gap-0">
                <a
                  href="tel:773-975-8150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:border-b border-neutral-950"
                >
                  (773) 975-8150
                </a>
                <a
                  href="https://theaterwit.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:border-b border-neutral-950"
                >
                  theaterwit.org
                </a>
              </div>
            </div>
          </div>
          <div className="w-full hidden md:block">
            <TicketsButton />
          </div>
        </div>
      </div>
    </div>
  );
}
