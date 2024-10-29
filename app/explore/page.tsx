"use client";

import Image from "next/image";
import Footer from "../components/footer";
import Nav from "../components/nav";
import { useState, useEffect, useRef } from "react";
import BuyButton from "../components/buy_button";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const layeredImagesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="w-full min-h-screen flex flex-col justify-between items-start bg-black relative mx-auto mt-8 sm:mt-6 lg:mt-0">
      <Nav />

      <div
        className="max-w-[1200px] mx-auto w-full h-full lg:h-fit flex flex-col lg:flex-row lg:justify-between lg:items-start gap-0 lg:mt-8 lg:overflow-scroll lg:py-8 lg:px-16 lg:gap-8 pt-8 sm:pt-12 lg:pt-8"
        ref={layeredImagesRef}
      >
        <div className="relative w-full max-w-[600px] h-full mx-auto overflow-hidden lg:w-1/2 px-4  sm:px-12 lg:px-0 ">
          <div className="relative w-full mx-auto overflow-hidden lg:rounded-2xl h-[500px] w-[500px] sm:h-[600px] sm:w-[500px] lg:h-[700px] lg:w-[500px] rounded-2xl">
            <Image
              src="/charles-full.jpg"
              alt="Charles Dickens"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
          </div>
          <div
            className={`fixed top-0 left-0 bottom-0 right-0 bg-black/40 transition-opacity duration-1000 ${
              isScrolled ? "opacity-100" : "opacity-20"
            }`}
          ></div>

          <div className="absolute bottom-0 left-0 w-full h-fullflex justify-center items-end z-40">
            <Image
              src="/just_title.png"
              alt="Dickens Show Title"
              width={800}
              height={400}
              className="relative z-50"
            />
          </div>
        </div>

        <div className="w-full flex flex-col bg-black lg:w-1/2 max-w-[600px] mx-auto mt-8 lg:mt-0 mb-12 lg:mb-0">
          <div className="lg:mb-0 text-gray-400 px-4 sm:px-12 lg:px-0">
            <hr className="w-full border-gray-400/80 mb-16 lg:mt-0" />
            <h1 className="text-3xl text-center">
              An intimate, imaginative holiday treat filled with laughs, a dash
              of mischief, and a touch of holiday magic.
            </h1>
            <hr className="w-full border-gray-400/80 mt-16" />
          </div>

          <div className="mt-8 mb-8 lg:mb-8 lg:mt-8">
            <BuyButton />
          </div>

          <div className="w-full relative z-40 font-serif px-4 sm:px-12  lg:px-0 pb-8 sm:pb-12 lg:pb-4 pt-0 lg:p-0 text-gray-200">
            <p className=" text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl lg:text-base mb-2 sm:mb-3 lg:mb-4  lg:mb-4">
              <span className="text-gray-200 font-bold">Explore the Show.</span>{" "}
              In 1853, ten years after publishing A Christmas Carol, Charles
              Dickens began reading his work to live audiences, finding both
              success and purpose in these public performances. They were so
              successful that he continued until his death in 1870.
            </p>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl lg:text-base mb-2 sm:mb-3 lg:mb-4  lg:mb-4">
              But… what if that’s not exactly the whole story? What if reports
              of his death were, shall we say, exaggerated? And what if, for
              some mysterious and mystical reason, Dickens is bound to repeat
              his reading of A Christmas Carol every December—year after year,
              century after century?
            </p>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl lg:text-base mb-2 sm:mb-3 lg:mb-4  lg:mb-4">
              Now, over 200 years old and a bit weary of his own creation,
              Dickens finds himself once again booked to perform his overly
              familiar Christmas tale. This year, the venue? Some place called
              The Den Theatre. In the city of Chicago. America.
            </p>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl lg:text-base mb-2 sm:mb-3 lg:mb-4  lg:mb-4">
              Join the famous author as he tries to change his fate and avoid
              another performance of his most famous work. Perhaps Dickens might
              get his wish of simply hosting a holiday party. Or perhaps, the
              Spirits of Christmas may just guide him to rediscover the beauty
              in his work—and the joy of sharing it with an audience, one more
              time.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
