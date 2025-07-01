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
      onClick={(e) => {
        if (!(e.target as HTMLElement).closest("a")) {
          setShowExcerpts(!showExcerpts);
        }
      }}
      tabIndex={0}
      role="article"
      aria-label={`Review from ${review.source}`}
      style={{ cursor: "pointer" }}
    >
      <div
        className={`flex-1 backdrop-blur-sm border border-neutral-600 rounded-xl drop-shadow-lg px-0 pt-8 pb-0 flex flex-col items-center justify-center transition-all duration-100 bg-neutral-950/50 text-neutral-300 ${
          isHovered ? "shadow-lg shadow-yellow-500/50" : ""
        }`}
      >
        <div className="flex-1 flex flex-col justify-between items-center gap-0 mb-2 w-full px-0 max-w-[400px]">
          <h2
            className={`text-lg mb-0 text-center w-full px-8 py-0 mb-12 font-bold`}
          >
            {review.top}
          </h2>

          <div className="w-full max-w-[500px] h-auto flex flex-col gap-2 justify-center items-center mt-0 mb-0 px-8 md:px-12">
            <div
              className={`w-full h-auto flex flex-col gap-2 justify-center items-center mt-0 mb-0`}
            >
              <Image
                src={"/decoration.png"}
                alt={"decoration"}
                width={20}
                height={20}
                className={`opacity-75 w-10 h-auto rotate-0`}
              />
            </div>
            {showExcerpts && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.0 }}
                className={`bg-neutral-950/35 w-full mt-0 mb-0 mx-auto flex flex-col justify-center items-center gap-4 border-[.5px] border-neutral-600 rounded-xl px-0 py-0 h-full`}
              >
                <Image
                  src={review.image}
                  alt={"review"}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowExcerpts(!showExcerpts);
              }}
              className="text-xs italic cursor-pointer active:text-neutral-100 hover:text-neutral-200"
              aria-expanded={showExcerpts}
            >
              show {showExcerpts ? "less" : "more"}
            </button>

            <div
              className={`w-full h-auto flex flex-col gap-2 justify-center items-center mt-0 mb-0`}
            >
              <Image
                src={"/decoration.png"}
                alt={"decoration"}
                width={20}
                height={20}
                className={`opacity-75 w-10 h-auto rotate-180`}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-center items-center gap-1 w-full px-8 pt-2 pb-8">
          <p className="text-xs font-bold uppercase relative z-1">
            {review.source}
          </p>
          {review.link && (
            <a
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs italic relative z-10 lowercase border active:bg-neutral-700 rounded-xl py-2 px-4 mt-2 text-neutral-300 border-neutral-600 hover:bg-neutral-300/25 active:bg-neutral-300/50`}
            >
              Read Full Review
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
