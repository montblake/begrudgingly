"use client";

import Image from "next/image";
import Footer from "../../components/footer";
import Nav from "../../components/nav";
import ProductionLinks from "../../components/production_links";

const bravelux_photos = [
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
    <main className="w-full h-screen flex flex-col justify-between items-center bg-victorian-texture bg-cover bg-center bg-no-repeat mx-auto mt-24 relative z-0">
      <Nav />
      <div className="relative z-10">
        <ProductionLinks />
      </div>
      <div className="relative w-full">
        <div className="fixed z-40 top-36 left-0 w-full flex flex-col justify-center items-center">
          <h1 className="text-xs text-neutral-200 italic border border-neutral-200 rounded-xl px-4 py-2 bg-black/50">
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

      <div className="w-full h-full bg-black/85 absolute top-0 left-0 z-0" />
      <div className="w-full  flex flex-col justify-center items-center gap-8 px-4 bg-black pt-20 pb-24">
        {bravelux_photos.map((photo, index) => (
          <div
            key={index}
            className="w-[80%] max-w-[600px] h-auto max-h-[60vh] relative z-5 border border-neutral-700 overflow-hidden rounded-xl flex flex-col justify-start items-center"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              className=""
              width={800}
              height={800}
            />
          </div>
        ))}
      </div>

      <Footer />
    </main>
  );
}
