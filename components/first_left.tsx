// app/components/first_left.tsx

import Image from "next/image";
import { Button } from "./ui/button";

const MainImage = {
  src: "/2025_dickens_web_transparency.webp",
  alt: "Charles Dickens Begrudgingly... Poster",
  width: 800,
  height: 800,
};

export default function FirstLeft() {
  return (
    <div className="LEFT_COLUMN w-full">
      <Image
        src={MainImage.src}
        alt={MainImage.alt}
        width={MainImage.width}
        height={MainImage.height}
        priority
        fetchPriority="high"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="w-full h-auto object-cover object-center rounded-xl relative -top-0 md:-top-4 mb-4 md:-mb-4"
      />

      <div className="w-full flex flex-col gap-0 rounded-xl px-2 md:px-6 text-neutral-950">
        <div className="w-full rounded-xl px-6 py-0 md:px-6 md:py-0 bg-neutral-900/30c backdrop-blur border border-neutral-600 relative flex flex-col items-start justify-start overflow-hidden">
          <div className="w-full px-4 py-2">
            <h2 className="text-3xl uppercase font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-amber-100/80 via-amber-300/80 to-amber-500/80 my-2">
              C<span className="text-2xl">hicago</span> 2025
            </h2>
          </div>
          <div className="w-full bg-neutral-300 backdrop-blur relative z-30 flex flex-col items-start justify-center overflow-hidden h-full md:h-auto rounded-xl px-4">
            <div className="absolute bottom-[10%] md:bottom-0 left-[60%] md:left-[50%] w-3/4 h-3/4 md:w-full md:h-full bg-[url('/dickens_illustration.webp')] bg-contain bg-bottom-left bg-no-repeat z-1 mix-blend-multiply opacity-100" />
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

          <a
            href="https://www.theaterwit.org/tickets/productions/564/performances#top"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full relative z-30 flex flex-col items-center justify-center mb-4"
          >
            <Button className="w-[80%] bg-gradient-to-b from-amber-200/80 via-amber-400/80 to-amber-500/80  px-8 py-6 rounded-2xl mx-auto font-bold  uppercase text-neutral-900 border-2 border-black hover:scale-105 hover:bg-amber-300/90 transition-all duration-300 text-center text-base mt-6 mb-4">
              Tickets
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
