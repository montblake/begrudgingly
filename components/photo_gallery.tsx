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
import PhotoNav from "@/components/photo_nav";

export default function PhotoGallery({
  HeaderInfo,
  photos,
  links,
}: {
  HeaderInfo: {
    headerText: string;
    photographerLink: string;
    photographer: string;
  };
  photos: { src: string; alt: string; credit: string; vertical: boolean }[];
  intro: string;
  links: { href: string; text: string; icon: string; internal: boolean }[];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <main className="w-full flex-1 min-h-0 py-4 overflow-y-auto">
      <div className="w-full h-full flex flex-col items-center justify-start max-w-[800px] mx-auto pl-4 relative overflow-y-auto">
        <Carousel
          className="w-full h-auto flex flex-col justify-center items-center "
          setApi={setApi}
        >
          <div className="w-[calc(100%-1rem)] mr-4 flex flex-col justify-center items-center bg-neutral-800 rounded-t-2xl p-4 border border-neutral-700 border-b-0">
            <div className="w-full flex flex-col items-center justify-center bg-neutral-900 rounded-2xl p-4 border border-neutral-700">
              <h1 className="text-xs text-center text-neutral-400 px-4 mb-0">
                {HeaderInfo.headerText}
                <a
                  href={HeaderInfo.photographerLink}
                  target="_blank"
                  className="text-neutral-200 hover:underline focus:outline-none focus:border-b-2 focus:border-blue-400"
                >
                  {HeaderInfo.photographer}
                </a>
              </h1>
              <p className="italic text-neutral-600 text-xs text-center mt-1">
                swipe or use buttons to navigate photos
              </p>
            </div>
          </div>
          <div className="w-[calc(100%-1rem)] mr-4 flex justify-between items-center bg-neutral-800 px-4 pb-4 border-x border-neutral-700">
            <CarouselPrevious className="" />
            <div className="flex flex-wrap gap-2 justify-center items-center w-1/2">
              {photos.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
                    current === index ? "bg-neutral-200" : "bg-neutral-500"
                  }`}
                />
              ))}
            </div>
            <CarouselNext className="" />
          </div>
          <CarouselContent className="w-full h-full">
            {photos.map((photo, index) => (
              <CarouselItem key={index} className={`w-full h-auto`}>
                <div
                  className={`w-full h-full max-h-[65vh] bg-neutral-800 overflow-hidden pb-0 border-x border-neutral-700`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={800}
                    priority
                    className={` border-[.5px] border-neutral-700 mx-auto ${
                      photo.vertical
                        ? "h-full w-auto"
                        : "w-full h-auto max-w-[800px]"
                    }`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="w-[calc(100%-1rem)] mr-4 bg-neutral-800 rounded-b-2xl border border-neutral-700 border-t-0 flex items-center justify-center pb-8">
          <PhotoNav links={links} />
        </div>
        <div className="w-full h-24 md:h-36 bg-gradient-to-b from-neutral-950/0 to-neutral-950/100 md:bg-none" />
      </div>
    </main>
  );
}
