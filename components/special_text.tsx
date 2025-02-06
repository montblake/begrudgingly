import { ReactNode } from "react";
import SpecialHeadline from "./special_headline";
import CTAElement from "./cta_element";

type HeadlineProps = {
  title: string;
  author: string;
  publisher?: string;
};

type TextElement = ReactNode;
type CtaProps = {
  intro: string;
  links: { href: string; text: string; internal: boolean; icon: string }[];
};

export default function SpecialText({
  HeadlineProps,
  TextElement,
  CtaProps,
}: {
  HeadlineProps: HeadlineProps;
  TextElement: TextElement;
  CtaProps: CtaProps;
}) {
  return (
    <div className="flex flex-col justify-center items-center md:items-start gap-4 w-full max-w-[500px] mx-auto md:max-w-none py-2 px-8">
      {HeadlineProps.title && <SpecialHeadline {...HeadlineProps} />}
      {HeadlineProps.title && (
        <hr className="px-8 w-[100%] md:w-[80%] border-neutral-600 my-4" />
      )}
      <div className="flex flex-col gap-4 text-neutral-400 text-sm drop-shadow-lg">
        {TextElement}
        {CtaProps.links.length > 0 && <CTAElement {...CtaProps} />}
      </div>
    </div>
  );
}
