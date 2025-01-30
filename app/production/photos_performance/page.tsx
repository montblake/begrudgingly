"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const photos = [
  {
    src: "/photos/brosilow/DSC_6384.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_1266.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: false,
  },
  {
    src: "/photos/brosilow/DSC_6405.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: false,
  },
  {
    src: "/photos/brosilow/DSC_6395.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: false,
  },
  {
    src: "/photos/brosilow/MBP_0883.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_1033.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_0739.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_0761.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_1062.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_0863.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_0866.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_0897.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_1010.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_1056.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: false,
  },

  {
    src: "/photos/brosilow/MBP_1224.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: false,
  },
  {
    src: "/photos/brosilow/MBP_1259.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_1229.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_1070.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
];

const HeaderInfo = {
  headerText: "Photos of first preview by ",
  photographer: "Michael Brosilow",
  photographerLink: "https://www.brosilow.com/",
};

export default function PhotoGallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <main className="w-full h-full py-4 bg-neutral-950">
      <div className="w-full h-full flex flex-col items-center justify-start max-w-[800px] mx-auto rounded-2xl pl-4">
        <div className="relative -left-2 mb-4">
          <h1 className="text-xs text-center text-neutral-400 px-4 mb-0">
            {HeaderInfo.headerText}
            <a
              href={HeaderInfo.photographerLink}
              target="_blank"
              className="text-neutral-200 hover:underline"
            >
              {HeaderInfo.photographer}
            </a>
          </h1>
          <div className="mt-2 pb-3 flex gap-2 justify-center items-center">
            {photos.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
                  current === index ? "bg-neutral-200" : "bg-neutral-500"
                }`}
              />
            ))}
          </div>
        </div>
        <Carousel
          className="w-full flex flex-col justify-center items-center"
          setApi={setApi}
        >
          <CarouselContent className="w-full h-auto">
            {photos.map((photo, index) => (
              <CarouselItem key={index} className={`w-full`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={800}
                  className={`rounded-2xl border-[.5px] border-neutral-700 mx-auto ${
                    photo.vertical
                      ? "h-fit w-auto max-h-[65vh]"
                      : "w-full h-auto max-w-[800px]"
                  }`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <p className="italic text-neutral-400 text-xs text-center mt-2">
          swipe or use buttons to navigate photos
        </p>
      </div>
    </main>
  );
}
