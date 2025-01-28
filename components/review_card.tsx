"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ReviewCard({
  review,
  index,
  numReviews,
  setSelected,
}: {
  review: any;
  index: number;
  numReviews: number;
  setSelected: (index: number) => void;
}) {
  const [showExcerpts, setShowExcerpts] = useState(false);

  return (
    <div
      key={index}
      className="w-[90%] md:w-[100%] max-w-[600px] h-full flex flex-col justify-start items-center bg-neutral-950/50"
      onClick={() => setShowExcerpts(!showExcerpts)}
      // onClick={() => setSelected(index)}
    >
      <div
        className={`flex-1 bg-neutral-950/25 text-neutral-200 backdrop-blur-sm border border-neutral-500 rounded-xl drop-shadow-lg px-0 pt-8 pb-0 flex flex-col items-center justify-center`}
      >
        <div className="flex-1 flex flex-col justify-center items-center gap-4 mb-2 w-full px-0 ">
          <h2
            className={`${
              index === numReviews - 1 ? "text-base" : "text-5xl"
            } mb-0 text-center w-full px-8 transition-opacity duration-300 `}
          >
            {review.top}
          </h2>
          <div className="w-full h-auto flex flex-col gap-2 justify-center items-center mt-4 mb-0">
            {/* <hr className="w-1/2 border-1 border-neutral-500 rounded" /> */}
          </div>
          <div className="w-full h-auto flex flex-col gap-2 justify-center items-center mt-0 mb-8">
            <div
              className={`w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white ${
                showExcerpts ? "rotate-0" : "rotate-180"
              }`}
            />
            {/* <hr className="w-1/2 border-1 border-neutral-500 rounded" /> */}
          </div>
          {showExcerpts && (
            <div className="w-1/2 flex-1 mt-4 mb-4 flex flex-col justify-center items-center gap-4">
              {review.excerpts.map((excerpt, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-center items-center gap-0 w-full"
                >
                  <p className="w-full text-sm text-center">{excerpt}</p>
                  {idx !== review.excerpts.length - 1 && (
                    <div className="w-full flex justify-center items-center mt-2 -mb-1">
                      <Image
                        src={"/diamond-3.png"}
                        alt={"decoration"}
                        width={20}
                        height={20}
                        className="opacity-75 w-3 h-auto"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center items-center gap-1 w-full text-neutral-300 px-8 pt-2 pb-8">
          <p className="text-xs font-bold uppercase relative z-1">
            {review.source}
          </p>
          {/* {review.link && (
            <a
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs hover:underline italic relative z-10 lowercase text-neutral-300 border border-neutral-500 rounded-md py-2 px-4 mt-2"
            >
              Read Full Review
            </a>
          )} */}
        </div>
      </div>
    </div>
  );
}
