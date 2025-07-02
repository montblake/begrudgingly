import SpecialPage from "@/components/special_page";
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
      This one-of-a-kind holiday production, which imagines a still-living
      Dickens forced to perform his famous{" "}
      <span className="italic">A Christmas Carol</span> for the 171st
      consecutive year, lovingly celebrates and skewers the famous author and
      our Christmas traditions.
    </p>
    <p className="">
      <span className="italic">Charles Dickens Begrudgingly...</span> originally
      charmed audiences during its Chicago debut at The Building Stage in
      December 2011. It returned to the theater in 2012, winning a Jeff Award
      for Solo Performance.
    </p>
    <p className="">
      A decade after the closing of The Building Stage, show creator Blake
      Montgomery revived his exuberant take on the famous author. With a new
      production company, CLOWNSHOW, he presented the piece at The Den Theatre
      in Chicago, December 5-22, 2024.
    </p>
  </>
);

const CtaProps = {
  intro: "",
  links: [
    {
      href: "/photos_publicity",
      text: "publicity photos",
      icon: "camera",
      internal: true,
    },
    {
      href: "/reviews",
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
