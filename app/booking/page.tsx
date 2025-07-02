import SpecialPage from "@/components/special_page";

type MultiText = {
  title: string;
  text: string;
}[];

const ImageProps = {
  src: "/dickens_house_poster_2.jpg",
  alt: "Gold-toned Dickens",
  width: 500,
  height: 655,
  border: true,
  caption: "",
  rel_x: 0,
  rel_y: 0,
};

const HeadlineProps = {
  title:
    "A disarming portrayal of Dickens.... Every inch the consummate host, he makes each guest feel personally welcomed into the space. ",
  author: "Stephanie Kulke",
  publisher: "Chicago Stage and Screen",
};

const TextElement = (
  <>
    <p>
      Blake Montgomery is currently exploring opportunities to perform{" "}
      <span className="italic">Charles Dickens Begrudgingly</span> for the
      holidays in 2025 and beyond.
    </p>
    <p>
      {" "}
      The show is built around a close and lively connection with the audience
      and is performed throughout the whole of the theater space. Both the
      audience relationship and the performance of the story require choosing an
      appropriate venue for the piece.
    </p>
    <p>
      The current production is designed for a blackbox space of 21&apos; x
      65&apos; and seats around 70. This design could easily be adapted for a
      larger blackbox (seating up to perhaps 150) without affecting the nature
      of the performance.
    </p>
    <p>
      While the show could be physically adapted to function at even larger
      scale, or using more traditional theater architecture, it is a concern
      that doing so might undermine the sense of intimacy that is one of the
      production&apos;s most important assets.
    </p>
    <p>
      Whether an adaptation of the existing blackbox production makes sense for
      your organization or a new production is in order, this joyful and
      heartfelt show is sure to delight your audience.
    </p>
  </>
);

const CtaProps = {
  intro: "",
  links: [
    {
      href: "mailto:dickens@dickensagain.com",
      text: "dickens@dickensagain.com",
      internal: false,
      icon: "mail",
    },
  ],
};

const MultiText: MultiText = [];

export default function Booking() {
  return (
    <SpecialPage
      key="/booking"
      ImageProps={ImageProps}
      HeadlineProps={HeadlineProps}
      TextElement={TextElement}
      CtaProps={CtaProps}
      MultiText={MultiText}
    />
  );
}
