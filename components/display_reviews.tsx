"use client";
import { useState } from "react";

const reviews = [
  {
    quote: "one-man yuletide tour de force",
    author: "Katy Walsh",
    publisher: "The Fourth Walsh",
  },
  {
    quote: "wonderfully off-the-cuff and intimate",
    author: "Katy Walsh",
    publisher: "Chicago Stage and Screen",
  },
  {
    quote: "a remarkably artful riff",
    author: "Katy Walsh",
    publisher: "Buzz Center Stage",
  },

  {
    quote: "charming and sly",
    author: "Kerry Reid",
    publisher: "Chicago Reader",
  },
  {
    quote: "rediscover comfort and joy",
    author: "Katy Walsh",
    publisher: "The Fourth Walsh",
  },
];

export default function DisplayReviews() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent(current - 1 < 0 ? reviews.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current + 1 >= reviews.length ? 0 : current + 1);
  };

  return (
    <div className="REVIEWVIEWER w-full md:w-full h-[300px] mx-auto flex justify-center items-center gap-8 bg-neutral-950 h-auto relative rounded-xl">
      <div className="w-full px-16 md:px-12">
        <h1 className="text-center text-4xl md:text-4xl text-neutral-100 font-bold drop-shadow-xl mb-4">
          {reviews[current].quote}
        </h1>
        <p className="text-center text-xs md:text-sm text-neutral-100 drop-shadow-xl mb-8">
          {reviews[current].author}, {reviews[current].publisher}
        </p>
        <div className="w-full h-auto flex justify-between items-center absolute bottom-1/2 left-0 right-0">
          <button
            onClick={handlePrev}
            className="text-neutral-200 text-4xl  p-2 rounded-md"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="text-neutral-200 text-4xl  p-2 rounded-md"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
