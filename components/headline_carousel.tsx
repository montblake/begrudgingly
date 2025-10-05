"use client";

import { useState } from "react";

type HeadlineProps = {
  title: string;
  author: string;
  publisher?: string;
};

const headlines = [
  {
    title:
      "Montgomery's smart, heartfelt reinvention proves that you don't need fake snow and flying ghosts to make the tale resonate.",
    author: "Kerry Reid",
    publisher: "Chicago Reader",
  },
  {
    title: "Charming and sly",
    author: "Kerry Reid",
    publisher: "Chicago Reader",
  },
  {
    title: "Wonderfully off-the-cuff and intimate",
    author: "Stephanie Kulke",
    publisher: "Chicago Stage and Screen",
  },
  {
    title: "A remarkably artful riff",
    author: "Bill Esler",
    publisher: "Buzz Center Stage",
  },
  {
    title: "One-man yuletide tour de force",
    author: "Katy Walsh",
    publisher: "The Fourth Walsh",
  },
];

export default function HeadlineCarousel() {
  // const titleLines = title.split(/[\n\u2028\u2029]/);

  const [current, setCurrent] = useState(0);
  const { title, author, publisher } = headlines[current];
  const titleLines = title.split(/[\n\u2028\u2029]/);

  const handlePrev = () => {
    setCurrent(current - 1 < 0 ? headlines.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current + 1 >= headlines.length ? 0 : current + 1);
  };

  return (
    <div className="flex flex-col justify-center items-center md:items-start gap-4 w-full px-4 md:px-0 relative">
      <h1 className="text-2xl md:text-3xl text-neutral-400 text-center md:text-left font-bold">
        {titleLines.map((line, index) => (
          <span key={index} className="block">
            {line}
          </span>
        ))}
      </h1>
      {publisher ? (
        <p className="text-neutral-400 text-sm">
          {author}, <span className="italic">{publisher}</span>
        </p>
      ) : (
        <p className="text-neutral-400 text-sm">{author}</p>
      )}
      <div className="w-full h-auto flex justify-between items-center absolute -bottom-16 left-0 right-0">
        <button
          onClick={handlePrev}
          className="text-neutral-200 text-2xl h-12 w-12 rounded-full bg-amber-300/80 flex items-center justify-center"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="text-neutral-200 text-2xl h-12 w-12 rounded-full bg-amber-300/80 flex items-center justify-center"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
