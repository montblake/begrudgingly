"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

const photos = [
  {
    src: "/photos/bravelux/1_joe-mazza-chicago-brave-lux-inc-5108630.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
  },
  {
    src: "/photos/bravelux/4-joe-mazza-chicago-brave-lux-inc-5206468.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
  },
  {
    src: "/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5108673.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
  },

  {
    src: "/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5206766.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
  },
  {
    src: "/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5206555.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
  },
  {
    src: "/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5206804-2.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
  },
  {
    src: "/photos/bravelux/202_joe-mazza-chicago-brave-lux-inc-5206819.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
  },
  {
    src: "/photos/bravelux/100-joe-mazza-chicago-brave-lux-inc-5206928.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
  },
];

export default function PhotosPublicity() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <main className="w-full h-full py-8">
      {/* <div className="relative w-full"> */}
      {/* <div className="fixed z-40 top-36 left-0 w-full flex flex-col justify-center items-center">
          <h1 className="text-xs text-neutral-500 italic border border-neutral-500 rounded-xl px-4 py-2 -mt-2 bg-black/50">
            Publicity photos by{" "}
            <a
              href="https://www.bravelux.com/"
              target="_blank"
              className="text-neutral-200 hover:underline"
            >
              Joe Mazza / brave lux inc.
            </a>
          </h1>
        </div> */}
      {/* </div> */}

      {/* <div className="w-full h-full flex flex-col justify-start items-center gap-y-8 md:gap-y-16 px-4 pt-24 pb-24 overflow-y-scroll">
        {photos.map((photo, index) => (
          <Image
            key={index}
            src={photo.src}
            alt={photo.alt}
            className="border border-neutral-500 rounded-2xl"
            width={800}
            height={800}
          />
        ))}
      </div> */}
      <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-950 max-w-[800px] mx-auto rounded-2xl pl-4">
        <Carousel className="w-full h-full" setApi={setApi}>
          <CarouselContent className="w-full">
            {photos.map((photo, index) => (
              <CarouselItem key={index} className="w-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={800}
                  className="rounded-2xl border-[.5px] border-neutral-700"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="relative -left-2">
          <div className="mt-4 pb-3 flex gap-2 justify-center items-center">
            {photos.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
                  current === index ? "bg-neutral-200" : "bg-neutral-400"
                }`}
              />
            ))}
          </div>
          <h1 className="text-xs text-center text-neutral-500 italic px-4">
            Publicity photos by{" "}
            <a
              href="https://www.bravelux.com/"
              target="_blank"
              className="text-neutral-200 hover:underline"
            >
              Joe Mazza / brave lux inc.
            </a>
          </h1>
        </div>
      </div>
    </main>
  );
}
