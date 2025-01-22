"use client";

import Image from "next/image";
import Footer from "../../components/footer";

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

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col justify-between items-center mx-auto mt-24 relative z-0">
 
      <div className="relative w-full">
        <div className="fixed z-40 top-36 left-0 w-full flex flex-col justify-center items-center">
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
        </div>
      </div>

      <div className="w-full h-full flex flex-col justify-start items-center gap-y-16 px-4 pt-24 pb-24 overflow-y-scroll">
        {photos.map((photo, index) => (
        
            <Image
              key={index}
              src={photo.src}
              alt={photo.alt}
              className="border border-neutral-500 rounded-xl"
              width={800}
              height={800}
            />
       
        ))}
      </div>

    </main>
  );
}
