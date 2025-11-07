"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Images = [
  {
    src: "/photos/2025/1_joe-mazza.webp",
    alt: "Charles Dickens Begrudgingly... Poster",
    width: 300,
    height: 300,
    quote: "charming and sly",
    publisher: "Chicago Reader",
  },
  {
    src: "/photos/2025/42_joe-mazza.webp",
    alt: "Charles Dickens Begrudgingly... Poster",
    width: 300,
    height: 300,
    quote: "wonderfully off-the-cuff and intimate",
    publisher: "Chicago Stage and Screen",
  },
  {
    src: "/photos/2025/45_joe-mazza.webp",
    alt: "Charles Dickens Begrudgingly... Poster",
    width: 300,
    height: 300,
    quote: "one-man yuletide tour de force",
    publisher: "The Fourth Walsh",
  },
  {
    src: "/photos/2025/4_joe-mazza.webp",
    alt: "Charles Dickens Begrudgingly... Poster",
    width: 300,
    height: 300,
    quote: "a remarkably artful riff",
    publisher: "Buzz Center Stage",
  },
  {
    src: "/photos/2025/23_joe-mazza.webp",
    alt: "Charles Dickens Begrudgingly... Poster",
    width: 300,
    height: 300,
    quote: "witty, heartfelt and (mostly) true to Dickens",
    publisher: "Chicago Stage and Screen",
  },
  {
    src: "/photos/2025/joe-mazza-chicago-brave-lux-inc-5108673.webp",
    alt: "Charles Dickens Begrudgingly... Poster",
    width: 300,
    height: 300,
    quote: "rediscover comfort and joy",
    publisher: "The Fourth Walsh",
  },
];
export default function PictureReviewScramble() {
  const [replaced, setReplaced] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setReplaced((prev) => (prev + 1) % Images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [replaced]);

  return (
    <div className="w-full pl-2 pr-2 md:pl-6 md:pr-0">
      <div className="IMAGES_CONTAINER w-full bg-transparent grid grid-cols-2 md:grid-cols-3 gap-2 rounded-xl p-0 md:p-0">
        {Images.map((image, index) => (
          <div
            key={index}
            className="w-full h-[200px] md:h-[250px] rounded-xl bg-neutral-300 border border-neutral-600 overflow-hidden flex flex-col justify-center items-center relative"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              sizes="(max-width: 768px) 50vw, 33vw"
              quality={85}
              className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${
                replaced != index ? "opacity-100" : "opacity-0"
              }`}
            />
            <div className="w-full h-full md:h-full bg-neutral-300">
              <h2
                className={`w-full text-neutral-950 font-bold text-center text-xl sm:text-2xl leading-tight md:text-3xl lg:text-4xl p-4 absolute top-0 transition-opacity duration-1000 ${
                  replaced == index ? "opacity-100" : "opacity-0"
                }`}
              >
                {image.quote}
              </h2>
              <p
                className={`w-full text-neutral-950 italic text-center text-xs md:text-sm p-4 absolute bottom-0 transition-opacity duration-1000 ${
                  replaced == index ? "opacity-100" : "opacity-0"
                }`}
              >
                {image.publisher}
              </p>
            </div>
          </div>
        ))}
        <div className="w-full col-span-2 md:col-span-3 flex justify-center items-center">
          <p className="w-full text-neutral-400 text-center text-xs py-2">
            The{" "}
            <Link
              href="/2024/program/"
              className="hover:border-b border-neutral-400"
            >
              2024 Clownshow production
            </Link>{" "}
            at The Den Theatre in Chicago. Photos by Joe Mazza/Brave Lux Inc.
          </p>
        </div>
      </div>
    </div>
  );
}
