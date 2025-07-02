import { ReactNode } from "react";
import SpecialHeadline from "./special_headline";
import CTAElement from "./cta_element";
import SpecialMultiText from "./special_multi_text";

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

type MultiText = {
  title: string;
  text: string;
}[];

export default function SpecialText({
  HeadlineProps,
  TextElement,
  CtaProps,
  MultiText,
}: {
  HeadlineProps: HeadlineProps;
  TextElement: TextElement;
  CtaProps: CtaProps;
  MultiText: MultiText;
}) {
  return (
    <div className="flex flex-col justify-center items-center md:items-start gap-4 w-full max-w-[500px] mx-auto md:max-w-none px-8 backdrop-blur-sm">
      {HeadlineProps.title && <SpecialHeadline {...HeadlineProps} />}
      {HeadlineProps.title && (
        <hr className="px-8 w-[100%] md:w-[80%] border-neutral-600 my-4" />
      )}
      <div className="flex flex-col gap-4 text-neutral-400 text-base drop-shadow-lg">
        {TextElement}
        {MultiText.length > 0 && <SpecialMultiText MultiText={MultiText} />}
        {CtaProps.links.length > 0 && <CTAElement {...CtaProps} />}
      </div>
    </div>
  );
}
