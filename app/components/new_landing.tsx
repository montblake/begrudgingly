"use client";

import Image from "next/image";
import { Italianno } from "next/font/google";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Play from "@/app/components/play";
import History from "@/app/components/history";
import Premise from "@/app/components/premise";

const italianno = Italianno({
  subsets: ["latin"],
  weight: ["400"],
});

export default function NewLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setShowHeader(window.scrollY >= window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-green-500 p-4 h-screen w-full">
      {showHeader && (
        <div className="fixed top-0 left-0 w-full bg-black z-50 flex justify-center items-center h-32">
          <Image
            src="/dickens_layers/title_layer.png"
            alt="Dickens 2024 Title"
            width={200}
            height={100}
            className="h-64 w-auto absolute top-[-90%] left-[50%] translate-x-[-50%]"
          />
        </div>
      )}
      <div className="w-full landscape:w-1/2 relative">
        <Image
          src="/dickens_layers/base_layer.png"
          alt="Dickens 2024 Publicity Image"
          width={1200}
          height={800}
          className="fixed top-0 left-0 z-0"
        />
        <div
          className={`fixed top-0 left-0 bottom-0 right-0 bg-black/60 transition-opacity duration-1000 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <Image
          src="/dickens_layers/shadow_layer.png"
          alt="Dickens 2024 Publicity Image"
          width={1200}
          height={800}
          className={`absolute top-0 left-0 transition-opacity duration-1000 ${
            isScrolled ? "opacity-0" : "opacity-100"
          }`}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 4 }}
        >
          <Image
            src="/dickens_layers/border_layer.png"
            alt="Dickens 2024 Publicity Image"
            width={1200}
            height={800}
            className={`absolute top-0 left-0 z-20 transition-opacity duration-1000 ${
              isScrolled ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src="/dickens_layers/venue_layer.png"
            alt="Dickens 2024 Publicity Image"
            width={1200}
            height={800}
            className="absolute top-0 left-0 z-20"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 3.5 }}
        >
          <Image
            src="/dickens_layers/title_layer.png"
            alt="Dickens 2024 Publicity Image"
            width={1200}
            height={800}
            className="absolute top-0 left-0 z-20"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 3 }}
        >
          <Image
            src="/dickens_layers/creator_layer.png"
            alt="Dickens 2024 Publicity Image"
            width={1200}
            height={800}
            className="absolute top-0 left-0 z-20"
          />
        </motion.div>
      </div>

      <div className="h-screen w-full relative top-[100%] left-0 z-40 text-white p-36">
        <p className=" text-sm sm:text-base md:text-lg landscape:text-lg ">
          <span
            className="italic
              "
          >
            Charles Dickens Begrudgingly...
          </span>{" "}
          originally charmed audiences during its Chicago debut at The Building
          Stage in December 2011 and 2012. This one-of-a-kind holiday
          production, which imagines a still-living Dickens forced to perform
          his famous <span className="italic">A Christmas Carol</span> for the
          171st consecutive year, lovingly celebrates and skewers the famous
          author and our Christmas traditions. Now, ten years after the closing
          of The Building Stage, former Artistic Director Blake Montgomery
          revives his Jeff Award-winning solo performance for the 2024 holiday
          season.
        </p>

        <div className="w-full h-full flex flex-col justify-center items-center  rounded-lg text-gray-200 mt-4">
          <p className={`${italianno.className} text-xl lowercase`}>
            Performances Begin
          </p>
          <p className="text-lg sm:text-xl md:text-2xl tracking-tight uppercase text-center landscape:text-xl lg:text-xl">
            December 5
          </p>
          <p className={`${italianno.className} text-xl lowercase`}>through</p>
          <p className="text-lg sm:text-xl md:text-2xl tracking-tight uppercase text-center landscape:text-xl lg:text-xl">
            December 22
          </p>
          <p className={`${italianno.className} text-xl lowercase`}>at</p>
          <p className="text-lg sm:text-xl md:text-2xl tracking-tight uppercase text-center landscape:text-xl lg:text-xl">
            The Den Theatre
          </p>
          <p className="text-xs tracking-tight uppercase text-center">
            1331 N Milwaukee, Chicago
          </p>
          <div className="flex flex-col bg-amber-200/80 rounded-lg p-4 text-gray-800 my-6">
            Tickets Available Soon
          </div>
        </div>
        <History />
        <Premise />
        <Play />
      </div>

      {/* <p className="text-sm sm:text-base md:text-lg  landscape:text-lg ">
          <span
            className="italic
              "
          >
            Charles Dickens Begrudgingly...
          </span>{" "}
          originally charmed audiences during its Chicago debut at The Building
          Stage in December 2011 and 2012. This one-of-a-kind holiday
          production, which imagines a still-living Dickens forced to perform
          his famous <span className="italic">A Christmas Carol</span> for the
          171st consecutive year, lovingly celebrates and skewers the famous
          author and our Christmas traditions. Now, ten years after the closing
          of The Building Stage, former Artistic Director Blake Montgomery
          revives his Jeff Award-winning solo performance for the 2024 holiday
          season.
        </p>
      </div>

       */}
    </div>
  );
}
