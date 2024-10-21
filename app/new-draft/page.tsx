"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Nav from "@/app/components/nav";
import CallToAction from "@/app/components/call_to_action";
import Footer from "@/app/components/footer";

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
    <main className="max-w-[1400px] min-h-screen flex flex-col justify-start items-start bg-black relative mx-auto">
      <Nav />

      <div
        className="w-full relative mt-4 left-0 z-0 px-0 sm:px-20 md:px-28 lg:px-44 xl:px-48"
        ref={layeredImagesRef}
      >
        <div className="relative w-full max-w-[1200px] mx-auto">
          <Image
            src="/dickens_layers/layered_base.png"
            alt="Dickens 2024 Publicity Image"
            width={1200}
            height={800}
            className="w-full h-auto"
          />

          <div
            className={`absolute top-0 left-0 bottom-0 right-0 bg-black/60 transition-opacity duration-1000 ${
              isScrolled ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          <Image
            src="/dickens_layers/layered_shadowbox.png"
            alt="Dickens 2024 Publicity Image"
            width={1200}
            height={800}
            className={`absolute top-0 left-0 w-full h-auto transition-opacity duration-1000 ${
              isScrolled ? "opacity-0" : "opacity-100"
            }`}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <Image
              src="/dickens_layers/layered_border.png"
              alt="Dickens 2024 Publicity Image"
              layout="fill"
              objectFit="contain"
              className={`transition-opacity duration-1000 ${
                isScrolled ? "opacity-0" : "opacity-100"
              }`}
            />

            <Image
              src="/dickens_layers/layered_venue.png"
              alt="Dickens 2024 Publicity Image"
              layout="fill"
              objectFit="contain"
              className={`transition-opacity duration-1000 ${
                isScrolled ? "opacity-0" : "opacity-100"
              }`}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 3 }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <Image
              src="/dickens_layers/layered_title.png"
              alt="Dickens 2024 Publicity Image"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 3 }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <Image
              src="/dickens_layers/layered_credits.png"
              alt="Dickens 2024 Publicity Image"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
        </div>
      </div>

      <div className="w-full flex flex-col bg-black">
        <CallToAction />
        <div className="w-full relative z-40 font-serif px-12 sm:px-24 md:px-32 lg:px-48 pb-16 sm:pb-24 md:pb-32 lg:pb-48 pt-0 sm:pt-4 md:pt-8 lg:pt-12">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-lg text-gray-100">
            <span className="italic">Charles Dickens Begrudgingly...</span>{" "}
            originally charmed audiences during its Chicago debut at The
            Building Stage in December 2011 and 2012.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-lg mt-4 text-gray-100">
            This one-of-a-kind holiday production, which imagines a still-living
            Dickens forced to perform his famous{" "}
            <span className="italic">A Christmas Carol</span> for the 171st
            consecutive year, lovingly celebrates and skewers the famous author
            and our Christmas traditions.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-lg mt-4 text-gray-100">
            Now, ten years after the closing of The Building Stage, former
            Artistic Director Blake Montgomery revives his Jeff Award-winning
            solo performance for the 2024 holiday season.
          </p>
        </div>
        <Footer />
      </div>
    </main>
  );
}
