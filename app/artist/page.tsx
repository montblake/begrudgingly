"use client";

import Image from "next/image";
import Footer from "../components/footer";
import Nav from "../components/nav";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
    <main className="max-w-[1400px] min-h-screen flex flex-col justify-start items-start bg-black relative mx-auto">
      <Nav />

      <div
        className="w-full relative mt-4 left-0 z-0 px-0 sm:px-20 md:px-28 lg:px-44 xl:px-48"
        ref={layeredImagesRef}
      >
        <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden">
          <div className="relative w-full overflow-hidden">
            <Image
              src="/dickens_layers/layered_blake.png"
              alt="Blake Montgomery Headshot"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
          <div
            className={`fixed top-0 left-0 bottom-0 right-0 bg-black/40 transition-opacity duration-1000 ${
              isScrolled ? "opacity-100" : "opacity-20"
            }`}
          ></div>
          {/* <Image
            src="/dickens_layers/layered_shadowbox.png"
            alt="Dickens 2024 Publicity Image"
            layout="fill"
            objectFit="contain"
            className={`transition-opacity duration-1000 ${
              isScrolled ? "opacity-0" : "opacity-100"
            }`}
          /> */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="absolute top-0 left-0 w-full h-full z-40"
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
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 3 }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <Image
              src="/dickens_layers/layered_title_less_shadow.png"
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
        <div className="w-full relative z-40 font-serif px-12 sm:px-24 md:px-32 lg:px-48 pb-16 sm:pb-24 md:pb-32 lg:pb-48 pt-8 sm:pt-12 md:pt-16 lg:pt-24 ">
          <p className="text-gray-100 text-base sm:text-lg md:text-xl drop-shadow-lg">
            Blake Montgomery began his career in Chicago directing ensemble
            clown theater and performing with a variety of non-naturalistic
            Chicago theaters, most notably Redmoon with whom he collaborated for
            over a decade. In 2005, Montgomery founded The Building Stage, a
            theater company and performance space, where he served as Artistic
            Director until its closing in 2013. The company was known for its
            ensemble-devised, director-driven creations, particularly in
            literary adaptations like their Jeff Award-winning{" "}
            <span className="italic">Moby-Dick</span> and the poetic,
            clown-inspired <span className="italic">Dawn, Quixote</span>.
            Montgomery&apos;s artistic approach draws on his training at the
            École Jacques Lecoq, the Dell&apos;Arte School of Physical Theater,
            and Middlebury College. A member of Actors&apos; Equity, his
            performances in Chicago include work with The House Theatre,
            Hypocrites, Remy Bumppo, Court Theatre, Chicago Shakespeare,
            Steppenwolf, and Writers Theatre.
          </p>
        </div>
        <BuyButton />

        <Footer />
      </div>
    </main>
  );
}
