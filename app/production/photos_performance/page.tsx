"use client";

import Image from "next/image";
import Footer from "../../components/footer";
import Nav from "../../components/nav";
import ProductionLinks from "../../components/production_links";

const photos = [
  {
    src: "/photos/brosilow/DSC_6365.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },
  {
    src: "/photos/brosilow/DSC_6395.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },
  {
    src: "/photos/brosilow/DSC_6405.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },
  {
    src: "/photos/brosilow/MBP_1266.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },
  {
    src: "/photos/brosilow/DSC_6384.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },
  {
    src: "/photos/brosilow/MBP_0883.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },
  {
    src: "/photos/brosilow/MBP_1033.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },
  {
    src: "/photos/brosilow/MBP_0739.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },
  {
    src: "/photos/brosilow/MBP_0761.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },
  {
    src: "/photos/brosilow/MBP_1062.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },
  {
    src: "/photos/brosilow/MBP_1109.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },
  {
    src: "/photos/brosilow/MBP_0863.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },
  {
    src: "/photos/brosilow/MBP_0866.jpg",
    alt: "Charles Dickens",
  },
  {
    src: "/photos/brosilow/MBP_0897.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },
  {
    src: "/photos/brosilow/MBP_1010.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },
  {
    src: "/photos/brosilow/MBP_1056.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },

  {
    src: "/photos/brosilow/MBP_1224.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },
  {
    src: "/photos/brosilow/MBP_1259.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },
  {
    src: "/photos/brosilow/MBP_1229.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },
  {
    src: "/photos/brosilow/MBP_1070.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },
];

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col justify-between items-center mx-auto mt-24 relative z-0">
      {/* <Nav />
      <div className="relative z-10">
        <ProductionLinks />
      </div> */}
      <div className="relative w-full">
        <div className="fixed z-40 top-28 left-0 w-full flex flex-col justify-center items-center">
          <h1 className="text-xs text-neutral-200 italic border border-neutral-200 rounded-xl px-4 py-2 bg-black/50">
            First Preview, photos by{" "}
            <a
              href="https://www.brosilow.com/"
              target="_blank"
              className="text-neutral-200 hover:underline"
            >
              Michael Brosilow
            </a>
          </h1>
        </div>
      </div>

      <div className="w-full h-full absolute top-0 left-0 z-0" />
      <div className="w-full  flex flex-col justify-center items-center gap-8 px-4 pt-20 pb-24">
        {photos.map((photo, index) => (
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
