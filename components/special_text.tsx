import { ReactNode } from "react";
import SpecialHeadline from "./special_headline";

type HeadlineProps = {
  title: string;
  author: string;
  publisher?: string;
};

type TextElement = ReactNode;

export default function SpecialText({
  HeadlineProps,
  TextElement,
}: {
  HeadlineProps: HeadlineProps;
  TextElement: TextElement;
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full max-w-[500px] mx-auto md:max-w-none p-4">
      <SpecialHeadline {...HeadlineProps} />
      <hr className="w-full border-neutral-600 my-8" />
      <div className="flex flex-col gap-4 text-neutral-400 text-sm drop-shadow-lg">
        {TextElement}
      </div>
    </div>
  );
}
