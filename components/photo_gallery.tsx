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

export default function PhotoGallery({
  HeaderInfo,
  photos,
  links,
  textElement,
}: {
  HeaderInfo: {
    headerText: string;
    photographerLink: string;
    photographer: string;
  };
  photos: { src: string; alt: string; credit: string; vertical: boolean }[];
  links: { href: string; text: string; icon: string; internal: boolean }[];
  textElement: React.ReactNode;
}) {
  // links is kept for API compatibility but currently unused (PhotoNav is commented out)
  void links;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  // Track which images should be rendered (visible + adjacent)
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 2 });

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      const newCurrent = api.selectedScrollSnap();
      setCurrent(newCurrent);
      // Render current image + 1 adjacent on each side for smooth transitions
      setVisibleRange({
        start: Math.max(0, newCurrent - 1),
        end: Math.min(photos.length - 1, newCurrent + 1),
      });
    };

    updateCurrent();
    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api, photos.length]);
  return (
    <main className="w-full flex-1 min-h-0 py-4 overflow-y-auto">
      <div className="w-full h-full flex flex-col items-center justify-start max-w-[800px] mx-auto pl-4 relative overflow-y-auto bg-neutral-950 border border-neutral-800 rounded-2xl">
        <Carousel
          className="w-full h-auto flex flex-col justify-center items-center "
          setApi={setApi}
        >
          <div className="w-[calc(100%-1rem)] mr-4 flex flex-col justify-center items-centerm py-4">
            <div className="w-full flex flex-col items-center justify-center bg-neutral-800 rounded-2xl p-4">
              <h1 className="text-xs text-center text-neutral-300 px-4 mb-0">
                {HeaderInfo.headerText}
                <a
                  href={HeaderInfo.photographerLink}
                  target="_blank"
                  className="text-neutral-200 hover:underline focus:outline-none focus:border-b-2 focus:border-blue-400"
                >
                  {HeaderInfo.photographer}
                </a>
              </h1>
              <p className="italic text-neutral-500 text-xs text-center mt-1">
                swipe or use buttons to navigate photos
              </p>
            </div>
          </div>
          <div className="w-[calc(100%-1rem)] mr-4 flex justify-center items-center bg-neutral-950 px-4 pb-4">
            <CarouselPrevious className="bg-gradient-to-br from-yellow-200 to-yellow-900 text-neutral-950 text-xs font-bold border border-neutral-700 hover:scale-110" />
            <div className="flex flex-wrap gap-2 justify-center items-center w-1/2">
              {photos.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
                    current === index ? "bg-neutral-300" : "bg-neutral-700"
                  }`}
                />
              ))}
            </div>
            <CarouselNext className="bg-gradient-to-br from-yellow-200 to-yellow-900 text-neutral-950 text-xs font-bold border border-neutral-700 hover:scale-110" />
          </div>
          <CarouselContent className="w-full h-full">
            {photos.map((photo, index) => {
              // Only render images in the visible range
              const isVisible =
                index >= visibleRange.start && index <= visibleRange.end;
              const isCurrent = index === current;

              // Don't render images outside visible range
              if (!isVisible) {
                return (
                  <CarouselItem key={index} className={`w-full h-auto`}>
                    <div
                      className={`w-full h-full max-h-[65vh] bg-neutral-950 overflow-hidden pb-0`}
                    >
                      {/* Placeholder div to maintain carousel structure */}
                      <div
                        className={`border-[.5px] border-neutral-700 mx-auto bg-neutral-900 ${
                          photo.vertical
                            ? "h-full w-auto"
                            : "w-full h-auto max-w-[800px]"
                        }`}
                        style={{
                          aspectRatio: photo.vertical ? "2/3" : "16/9",
                        }}
                      />
                    </div>
                  </CarouselItem>
                );
              }

              // Determine quality: high for current, low for adjacent
              const quality = isCurrent ? 75 : 20;

              return (
                <CarouselItem key={index} className={`w-full h-auto`}>
                  <div
                    className={`w-full h-full max-h-[65vh] bg-neutral-950 overflow-hidden pb-0`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={800}
                      height={800}
                      quality={quality}
                      priority={index === 0 && isCurrent}
                      loading={isCurrent ? "eager" : "lazy"}
                      className={`border-[.5px] border-neutral-700 mx-auto ${
                        photo.vertical
                          ? "h-full w-auto"
                          : "w-full h-auto max-w-[800px]"
                      }`}
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        <div className="w-[calc(100%-1rem)] mr-4 flex flex-col justify-start items-start py-0">
          {textElement}
        </div>
        {/* <div className="w-[calc(100%-1rem)] mr-4 bg-neutral-950 rounded-b-2xl border border-neutral-800 border-t-0 flex items-center justify-center pb-8">
          <PhotoNav links={links} />
        </div> */}
      </div>
    </main>
  );
}
