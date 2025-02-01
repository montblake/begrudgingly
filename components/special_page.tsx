import { ReactNode } from "react";
import SpecialImage from "./special_image";
import SpecialText from "./special_text";

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
};

export default function SpecialPage({
  ImageProps,
  HeadlineProps,
  TextElement,
}: SpecialProps) {
  return (
    <main className="flex-1 bg-neutral-100/0 flex flex-col justify-start items-center md:flex-row md:justify-center md:items-start md:px-8 md:pt-4 pb-16 max-w-[1000px] mx-auto">
      <div className="md:sticky md:top-0 md:h-screen w-full">
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
      </div>
      <div className="md:overflow-y-auto md:max-h-screen w-full md:pb-96">
        <SpecialText HeadlineProps={HeadlineProps} TextElement={TextElement} />
      </div>
    </main>
  );
}
