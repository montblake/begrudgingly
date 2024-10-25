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
        className="max-w-[1200px] mx-auto w-full h-full lg:h-fit flex flex-col lg:flex-row lg:justify-between lg:items-start gap-0 lg:mt-12 lg:overflow-scroll lg:py-8 lg:px-16 lg:gap-8 pt-8 sm:pt-12 lg:pt-16"
        ref={layeredImagesRef}
      >
        <div className="relative w-full max-w-[600px] mx-auto overflow-hidden lg:w-1/2 px-12 sm:px-0 ">
          <div className="relative w-full mx-auto overflow-hidden lg:rounded-2xl  h-[500px] w-[500px] sm:h-[600px] sm:w-[600px] lg:h-[700px] lg:w-[500px] rounded-2xl">
            <Image
              src="/dickens_layers/layered_blake.png"
              alt="Blake Montgomery Headshot"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="w-full h-full"
            />
          </div>
          <div
            className={`fixed top-0 left-0 bottom-0 right-0 bg-black/40 transition-opacity duration-1000 ${
              isScrolled ? "opacity-100" : "opacity-20"
            }`}
          ></div>

          <div className="absolute top-[3vh] left-0 w-full h-full">
            <Image
              src="/dickens_layers/layered_title_less_shadow.png"
              alt="Dickens Show Title"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="absolute top-[3vh] left-0 w-full h-full">
            <Image
              src="/dickens_layers/layered_credits.png"
              alt="Dickens Credits"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div className="w-full flex flex-col bg-black lg:w-1/2 max-w-[600px] mx-auto">
          <div className="w-full relative z-40 font-serif px-12 sm:px-0 pb-8 sm:pb-12 md:pb-16 lg:pb-12 pt-4 lg:p-0 ">
            <p className="text-gray-400 text-base lg:text-lg lg:text-lg">
              <span className="font-bold text-gray-200">Blake Montgomery</span>{" "}
              began his career in Chicago directing ensemble clown theater and
              performing with a variety of non-naturalistic Chicago theaters,
              most notably Redmoon with whom he collaborated for over a decade.
              In 2005, Montgomery founded The Building Stage, a theater company
              and performance space, where he served as Artistic Director until
              its closing in 2013. The company was known for its
              ensemble-devised, director-driven creations, particularly in
              literary adaptations like their Jeff Award-winning{" "}
              <span className="italic">Moby-Dick</span> and the poetic,
              clown-inspired <span className="italic">Dawn, Quixote</span>.
              Montgomery&apos;s artistic approach draws on his training at the
              École Jacques Lecoq, the Dell&apos;Arte School of Physical
              Theater, and Middlebury College. A member of Actors&apos; Equity,
              his performances in Chicago include work with The House Theatre,
              Hypocrites, Remy Bumppo, Court Theatre, Chicago Shakespeare,
              Steppenwolf, and Writers Theatre.
            </p>
          </div>
          <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-28 lg:mt-12">
            <BuyButton />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
