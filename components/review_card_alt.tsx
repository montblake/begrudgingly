"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function ReviewCard({
  review,
  index,
}: {
  review: {
    top: string;
    excerpts: string[];
    source: string;
    link: string;
    image: string;
  };
  index: number;
}) {
  const [showExcerpts, setShowExcerpts] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      key={index}
      className="w-full max-w-[360px] h-full flex flex-col justify-start items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      role="article"
      aria-label={`Review from ${review.source}`}
    >
      <div
        className={`flex-1 ${
          isHovered ? "bg-red-950/50" : "bg-neutral-950/50"
        } text-neutral-300 backdrop-blur-sm border border-neutral-500 rounded-xl drop-shadow-lg px-0 pt-8 pb-0 flex flex-col items-center justify-center transition-colors duration-300`}
      >
        <div className="flex-1 flex flex-col justify-between items-center gap-0 mb-2 w-full px-0 ">
          <h2
            className={`text-base mb-0 text-center w-full px-8 py-0 transition-opacity duration-300 mb-12`}
          >
            {review.top}
          </h2>

          <div className="w-full h-auto flex flex-col gap-2 justify-center items-center mt-0 mb-0 ">
            <div
              className={`w-full h-auto flex flex-col gap-2 justify-center items-center mt-0 mb-0 `}
            >
              <Image
                src={"/decoration.png"}
                alt={"decoration"}
                width={20}
                height={20}
                className="opacity-75 w-10 h-auto rotate-0"
              />
            </div>
            {showExcerpts && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.0 }}
                className={`bg-neutral-950/35 w-1/2 mt-0 mb-0 mx-auto flex flex-col justify-center items-center gap-4 border-[.5px] border-neutral-500 rounded-xl overflow-hidden transition-all duration-1000 ease-in-out h-full w-3/4`}
              >
                <Image
                  src={review.image}
                  alt={"review"}
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </motion.div>
            )}
            <button
              onClick={() => setShowExcerpts(!showExcerpts)}
              className="text-xs italic text-neutral-400 hover:text-neutral-200 transition-all duration-300 ease-in-out cursor-pointer active:text-neutral-300"
              aria-expanded={showExcerpts}
            >
              show {showExcerpts ? "less" : "more"}
            </button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.0 }}
              className={`w-full h-auto flex flex-col gap-2 justify-center items-center mt-0 mb-0 `}
            >
              <Image
                src={"/decoration.png"}
                alt={"decoration"}
                width={20}
                height={20}
                className="opacity-75 w-10 h-auto rotate-180"
              />
            </motion.div>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-center items-center gap-1 w-full text-neutral-300 px-8 pt-2 pb-8">
          <p className="text-xs font-bold uppercase relative z-1">
            {review.source}
          </p>
          {review.link && (
            <a
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs italic relative z-10 lowercase text-neutral-500 hover:text-neutral-300 border border-neutral-500 hover:border-neutral-300 active:bg-neutral-700 rounded-xl py-2 px-4 mt-2 transition-all duration-300 ease-in-out"
            >
              Read Full Review
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
