"use client";

import { useState } from "react";

type MultiText = {
  title: string;
  text: string;
}[];

export default function SpecialMultiText({
  MultiText,
}: {
  MultiText: MultiText;
}) {
  const [activeText, setActiveText] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center md:items-start gap-4 w-full max-w-[500px] mx-auto md:max-w-none p-8 bg-gradient-to-br from-neutral-100/75 to-neutral-500/75 rounded-xl mt-8">
      <div className="flex flex-col gap-2 w-full">
        {MultiText.map((text, index) => (
          <div key={text.title}>
            <h3
              onClick={() => setActiveText(index)}
              className={`text-neutral-200 text-sm drop-shadow-lg border border-neutral-500 rounded-xl p-2 text-center transition-all duration-300 ${
                index === activeText
                  ? "bg-neutral-950"
                  : "bg-neutral-950/25 hover:bg-neutral-950/50"
              }`}
            >
              {text.title}
            </h3>
          </div>
        ))}
      </div>
      <hr className="w-full border-neutral-700 my-4" />
      <div className="flex flex-col gap-4 text-neutral-800">
        {MultiText[activeText].text.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <hr className="w-full border-neutral-700 my-4" />
      <p className="text-neutral-800 text-ms">
        For more information, please contact Blake Montgomery at{" "}
        <a
          href="mailto:dickens@dickensagain.com"
          className="hover:underline active:font-bold"
        >
          dickens@dickensagain.com
        </a>
        .
      </p>
    </div>
  );
}
