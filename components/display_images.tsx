"use client";
import { useState } from "react";
import Image from "next/image";

const photos = [
  {
    src: "/photos/bravelux/1_joe-mazza-chicago-brave-lux-inc-5108630.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    dY: 50,
  },
  {
    src: "/photos/bravelux/4-joe-mazza-chicago-brave-lux-inc-5206468.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    dY: 0,
  },
  {
    src: "/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5108673.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    dY: 120,
  },

  {
    src: "/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5206766.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    dY: 0,
  },
  {
    src: "/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5206555.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    dY: 0,
  },
  {
    src: "/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5206804-2.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    dY: 0,
  },
  {
    src: "/photos/bravelux/202_joe-mazza-chicago-brave-lux-inc-5206819.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    dY: 0,
  },
  {
    src: "/photos/bravelux/100-joe-mazza-chicago-brave-lux-inc-5206928.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    dY: 0,
  },
];

export default function DisplayImages() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent(current - 1 < 0 ? photos.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current + 1 >= photos.length ? 0 : current + 1);
  };

  return (
    <div className="PHOTOVIEWER w-full h-auto max-h-[600px] flex justify-start items-start relative overflow-hidden">
      <Image
        src={photos[current].src}
        alt={photos[current].alt}
        width={800}
        height={800}
        className="w-full border border-neutral-700 relative -top-[var(--dY)]"
        style={
          {
            "--dY": `${photos[current].dY}px`,
          } as React.CSSProperties
        }
      />
      <div className="w-full h-auto flex justify-between items-center absolute bottom-1/2 left-0 right-0">
        <button
          onClick={handlePrev}
          className="text-neutral-200 text-4xl  p-2 rounded-md"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="text-neutral-200 text-4xl  p-2 rounded-md"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
