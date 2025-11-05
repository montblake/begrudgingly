import SpecialPage from "@/components/special_page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charles Dickens Begrudgingly — Production History",
  description:
    "Production history of Charles Dickens Begrudgingly Performs A CHRISTMAS CAROL Again, by Blake Montgomery",
};

const ImageProps = {
  src: "/charles-full.jpg",
  alt: "Historical image of Charles Dickens",
  width: 500,
  height: 645,
  border: true,
  caption: "",
  rel_x: 0,
  rel_y: 0,
};

type MultiText = {
  title: string;
  text: string;
}[];

const HeadlineProps = {
  title:
    "A remarkably artful riff on Dickens' original, written and performed stunningly well by Blake Montgomery.",
  author: "Bill Esler",
  publisher: "Buzz Center Stage",
};

const TextElement = (
  <>
    <p className="">
      Blake Montgomery first created and performed
      <span className="italic">Charles Dickens Begrudgingly...</span> at The
      Building Stage in December 2011.
    </p>
    <p>
      Blake performed a slightly revised version at The Building Stage in 2012
      in a production that won a Jeff Award for Solo Performance.
    </p>
    <p className="">
      Blake revived his exuberant take on the famous author with a new
      production company, CLOWNSHOW, for the 2024 holidays with performances at
      The Den Theatre in Chicago.
    </p>
  </>
);

const CtaProps = {
  intro: "",
  links: [
    {
      href: "/2024/photos-publicity",
      text: "publicity photos",
      icon: "camera",
      internal: true,
    },
    {
      href: "/2024/reviews",
      text: "press reviews",
      icon: "glasses",
      internal: true,
    },
    {
      href: "/creator",
      text: "the creator",
      icon: "creator",
      internal: true,
    },
  ],
};

const MultiText: MultiText = [];

export default function History() {
  return (
    <SpecialPage
      ImageProps={ImageProps}
      HeadlineProps={HeadlineProps}
      TextElement={TextElement}
      CtaProps={CtaProps}
      MultiText={MultiText}
    />
  );
}
