"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Images = [
  {
    src: "/photos/2025/1_joe-mazza.jpg",
    alt: "Charles Dickens Begrudgingly... Poster",
    width: 800,
    height: 800,
    quote: "charming and sly",
    publisher: "Chicago Reader",
  },
  {
    src: "/photos/2025/42_joe-mazza.jpg",
    alt: "Charles Dickens Begrudgingly... Poster",
    width: 800,
    height: 800,
    quote: "wonderfully off-the-cuff and intimate",
    publisher: "Chicago Stage and Screen",
  },
  {
    src: "/photos/2025/45_joe-mazza.jpg",
    alt: "Charles Dickens Begrudgingly... Poster",
    width: 800,
    height: 800,
    quote: "one-man yuletide tour de force",
    publisher: "The Fourth Walsh",
  },
  {
    src: "/photos/2025/4_joe-mazza.jpg",
    alt: "Charles Dickens Begrudgingly... Poster",
    width: 800,
    height: 800,
    quote: "a remarkably artful riff",
    publisher: "Buzz Center Stage",
  },
  {
    src: "/photos/2025/23_joe-mazza.jpg",
    alt: "Charles Dickens Begrudgingly... Poster",
    width: 800,
    height: 800,
    quote: "witty, heartfelt and (mostly) true to Dickens",
    publisher: "Chicago Stage and Screen",
  },
  {
    src: "/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5108673.jpg",
    alt: "Charles Dickens Begrudgingly... Poster",
    width: 800,
    height: 800,
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
    <div className="w-full">
      <div className="w-full p-0 grid grid-cols-2 md:grid-cols-3 gap-2">
        {Images.map((image, index) => (
          <div
            key={index}
            className="w-full h-[250px] rounded-xl bg-neutral-300 border border-neutral-600 overflow-hidden flex flex-col justify-center items-center relative"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${
                replaced != index ? "opacity-100" : "opacity-0"
              }`}
            />
            <h2
              className={`text-neutral-950 font-bold text-center text-2xl md:text-4xl p-4 absolute top-0 transition-opacity duration-1000 leading-[1em] ${
                replaced == index ? "opacity-100" : "opacity-0"
              }`}
            >
              {image.quote}
            </h2>
            <p
              className={`text-neutral-950 font-bold italic text-center text-xs md:text-sm p-4 absolute bottom-0 transition-opacity duration-1000 ${
                replaced == index ? "opacity-100" : "opacity-0"
              }`}
            >
              {image.publisher}
            </p>
          </div>
        ))}
      </div>
      <p className="w-full text-neutral-400 flex justify-center items-center text-xs p-4">
        Photos by Joe Mazza / Brave Lux Inc.
      </p>
    </div>
  );
}
