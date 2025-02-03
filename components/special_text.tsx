import { ReactNode } from "react";
import SpecialHeadline from "./special_headline";

type HeadlineProps = {
  title: string;
  author: string;
  publisher?: string;
};

type TextElement = ReactNode;
type CTAElement = ReactNode;

export default function SpecialText({
  HeadlineProps,
  TextElement,
  CTAElement,
}: {
  HeadlineProps: HeadlineProps;
  TextElement: TextElement;
  CTAElement: CTAElement;
}) {
  return (
    <div className="flex flex-col justify-center items-center md:items-start gap-4 w-full max-w-[500px] mx-auto md:max-w-none py-2 px-8">
      {HeadlineProps.title && <SpecialHeadline {...HeadlineProps} />}
      {HeadlineProps.title && (
        <hr className="px-8 w-full md:w-[90%] border-neutral-600 my-4" />
      )}
      <div className="flex flex-col gap-4 text-neutral-400 text-sm drop-shadow-lg">
        {TextElement}
        {CTAElement}
      </div>
    </div>
  );
}
