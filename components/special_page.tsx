"use client";

import { ReactNode } from "react";
import SpecialImage from "./special_image";
import SpecialText from "./special_text";
import Footer from "./footer";

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  border: boolean;
  caption: string;
  rel_x: number;
  rel_y: number;
};

type HeadlineProps = {
  title: string;
  author: string;
  publisher?: string;
};

type TextElement = ReactNode;

type SpecialProps = {
  ImageProps: ImageProps;
  HeadlineProps: HeadlineProps;
  TextElement: TextElement;
  // CtaProps: CtaProps;
  MultiText: MultiText;
};

// type CtaProps = {
//   intro: string;
//   links: { href: string; text: string; internal: boolean; icon: string }[];
// };

type MultiText = {
  title: string;
  text: string;
}[];

export default function SpecialPage({
  ImageProps,
  HeadlineProps,
  TextElement,
  // CtaProps,
  MultiText,
}: SpecialProps) {
  return (
    <>
      <main className="w-full h-[calc(100vh-3rem)]  mx-auto overflow-y-scroll flex flex-col justify-between items-between">
        <div className="w-full max-w-[1000px] mx-auto h-auto flex flex-col gap-8 md:gap-0 justify-start items-center md:flex-row md:justify-start md:items-start p-4 md:p-8 mb-12">
          <SpecialImage
            src={ImageProps.src}
            alt={ImageProps.alt}
            width={ImageProps.width}
            height={ImageProps.height}
            border={ImageProps.border}
            caption={ImageProps.caption}
            rel_x={ImageProps.rel_x}
            rel_y={ImageProps.rel_y}
          />

          <div className="w-full h-auto p-0 md:overflow-y-scroll">
            <SpecialText
              HeadlineProps={HeadlineProps}
              TextElement={TextElement}
              // CtaProps={CtaProps}
              MultiText={MultiText}
            />
            {/* <div className="w-full h-48 md:h-96 bg-gradient-to-b from-neutral-950/0 to-neutral-950/100 md:bg-none" /> */}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
