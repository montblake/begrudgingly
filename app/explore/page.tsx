"use client";

import Image from "next/image";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import BuyButton from "../components/buy_button";

export default function Home() {
  const [panelNum, setPanelNum] = useState(1);
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
        className="w-full relative left-0 z-0 px-0 sm:px-20 md:px-28 lg:px-44 xl:px-48"
        ref={layeredImagesRef}
      >
        <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden mt-8">
          <div className="relative w-full overflow-hidden bg-white">
            <Image
              src="/dickens_layers/layered_reading.png"
              alt="Historical Dickens Reading"
              layout="responsive"
              width={800}
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
              src="/dickens_layers/layered_reading_text.png"
              alt="Dickens 2024 Publicity Image"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
          {/* <motion.div
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
          </motion.div> */}
        </div>
      </div>

      <div className="w-full flex flex-col bg-black pt-8">
        <div className="flex justify-center items-center space-x-2 text-xs relative z-40">
          <button
            className={`border border-amber-200/80 px-3 py-1 rounded-md transition-colors duration-200 hover:border-amber-200/100 ${
              panelNum === 1
                ? "bg-amber-200/80 text-black"
                : "bg-transparent text-amber-200/80"
            }`}
            onClick={() => setPanelNum(1)}
          >
            1
          </button>
          <button
            className={`border border-amber-200/80 px-3 py-1 rounded-md transition-colors duration-200 hover:border-amber-200/100 ${
              panelNum === 2
                ? "bg-amber-200/80 text-black"
                : "bg-transparent text-amber-200/80"
            }`}
            onClick={() => setPanelNum(2)}
          >
            2
          </button>
          <button
            className={`border border-amber-200/80 px-3 py-1 rounded-md transition-colors duration-200 hover:border-amber-200/100 ${
              panelNum === 3
                ? "bg-amber-200/80 text-black"
                : "bg-transparent text-amber-200/80"
            }`}
            onClick={() => setPanelNum(3)}
          >
            3
          </button>
          <button
            className={`border border-amber-200/80 px-3 py-1 rounded-md transition-colors duration-200 hover:border-amber-200/100 ${
              panelNum === 4
                ? "bg-amber-200/80 text-black"
                : "bg-transparent text-amber-200/80"
            }`}
            onClick={() => setPanelNum(4)}
          >
            4
          </button>
          <button
            className={`border border-amber-200/80 px-3 py-1 rounded-md transition-colors duration-200 hover:border-amber-200/100 ${
              panelNum === 5
                ? "bg-amber-200/80 text-black"
                : "bg-transparent text-amber-200/80"
            }`}
            onClick={() => setPanelNum(5)}
          >
            5
          </button>
        </div>
      </div>
      <div className="w-full relative z-40 font-serif px-12 sm:px-24 md:px-32 lg:px-48 pb-16 sm:pb-24 md:pb-32 lg:pb-48 pt-8 sm:pt-12 md:pt-16 lg:pt-24 text-gray-100 text-base sm:text-lg md:text-xl drop-shadow-lg">
        {panelNum === 1 && (
          <div className="w-full mb-16">
            <p className="">
              {" "}
              In 1853, ten years after having dashed off his surprisingly
              successful holiday story,{" "}
              <span className="italic"> A Christmas Carol</span>, Charles
              Dickens gave his first public reading of the work. The effort was
              so well received, as well as providing much needed cash, that
              Dickens continued to perform these celebrated readings for the
              rest of his life.
            </p>
          </div>
        )}
        {panelNum === 2 && (
          <div className="w-full mb-16">
            {/* <h2 className="text-base sm:text-lg md:text-xl font-bold mb-0 sm:mb-1 md:mb-2 landscape:text-2xl landscape:mb-2 lg:text-2xl lg:mb-2">
              The Premise
            </h2> */}

            <p className="">
              Never one to let the facts get in the way of a good story, creator
              Blake Montgomery conflates the enduring popularity of the
              ubiquitous holiday <span className="italic">Christmas Carol</span>{" "}
              with Dickens&apos; personal readings and imagines that reports of
              the author&apos;s death were greatly exaggerated.
            </p>
          </div>
        )}
        {panelNum === 3 && (
          <div className="w-full mb-16">
            <p className="">
              And so, year after year, each and every December, not only do
              theaters around the globe produce adaptations of his famous book
              but Dickens himself is brought back to the stage to continue his
              tradition of solo readings ad infinitum.
            </p>
          </div>
        )}

        {/* <p>Whether this miracle is the result of the magic of Christmas, the power of the author&apos;s popularity, or a freak accident resulting from the interaction between an over-eager booking agent and some hitherto unappreciated arcana of contract law, it is impossible to state for certain.</p> */}

        {panelNum === 4 && (
          <div className="w-full mb-16">
            {/* <h2 className="text-base sm:text-lg md:text-xl font-bold mb-0 sm:mb-1 md:mb-2 landscape:text-2xl landscape:mb-2 lg:text-2xl lg:mb-2">
              The Play
            </h2> */}

            <p className="">
              Now over 200 years old, Dickens has reached a breaking point and
              unbeknownst to theater management, he will not be performing his
              show this evening. Instead, he has planned something entirely new,
              something he is calling, &ldquo;Charles Dicken&apos;s First Annual
              Holiday Party.&rdquo;
            </p>
          </div>
        )}
        {panelNum === 5 && (
          <div className="w-full mb-16">
            <p className="">
              Perhaps Dickens will get his wish. Or, the Spirits of Christmas
              might intervene and force him to perform his worn-out tale once
              again, in the course of which, due to some highly irregular and
              ridiculous occurrence, he might see his work in a new light,
              rediscovering its beauty and his passion while, along the way,
              forging the kind of intimate, joyful connection with the audience
              he had hoped would come from hosting a party in the first place.
              Perhaps.
            </p>
          </div>
        )}
        <BuyButton />
      </div>
      <Footer />
    </main>
  );
}
