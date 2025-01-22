"use client";

import Image from "next/image";
import Footer from "../../components/footer";

const photos = [
  {
    src: "/photos/brosilow/DSC_6384.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },
  {
    src: "/photos/brosilow/MBP_1266.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },
  {
    src: "/photos/brosilow/DSC_6405.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },
  {
    src: "/photos/brosilow/DSC_6395.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
  },
  {
    src: "/photos/brosilow/DSC_6365.jpg",
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

      <div className="relative w-full">
        <div className="fixed z-40 top-36 left-0 w-full flex flex-col justify-center items-center">
          <h1 className="text-xs text-neutral-500 italic border border-neutral-500 rounded-xl px-4 py-2 -mt-2  bg-black/50">
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
