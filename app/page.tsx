import SpecialPage from "@/components/special_single";

const ImageProps = {
  src: "/2025_production_poster_web_notext.png",
  alt: "Charles Dickens Begrudgingly... Poster",
  width: 500,
  height: 800,
  border: false,
  caption: "",
  rel_x: 10,
  rel_y: 20,
};

type MultiText = {
  title: string;
  text: string;
}[];

const HeadlineProps = {
  title:
    "Montgomery's smart, heartfelt reinvention proves that you don't need fake snow and flying ghosts to make the tale resonate.",
  author: "Kerry Reid",
  publisher: "Chicago Reader",
};

const TextElement = (
  <>
    <p>
      This solo show, created and performed by Blake Montgomery, presents an
      intimate and slightly absurd portrayal of the famous author: now over 200
      years old, he finds himself once again booked to perform his overly
      familiar Christmas tale &mdash; just as he has every December since 1853.
    </p>
    <p>
      Dickens, however, has a plan. Unbeknownst to the theater&apos;s
      management, he intends to abandon the performance in lieu of a simply
      hosting a holiday party.
    </p>
    <p>
      Perhaps Dickens will get his wish. Or, perhaps, the Spirits of Christmas
      might intervene to give him what he really needs, setting him on a path to
      rediscover the beauty in his work &mdash; and the joy of sharing it with
      an audience, one more time.
    </p>
  </>
);

const CtaProps = {
  intro: "",
  links: [
    {
      href: "/history",
      text: "history",
      icon: "history",
      internal: true,
    },
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
  ],
};

const MultiText: MultiText = [];

export default function Home() {
  return (
    <SpecialPage
      key="/premise"
      ImageProps={ImageProps}
      HeadlineProps={HeadlineProps}
      TextElement={TextElement}
      CtaProps={CtaProps}
      MultiText={MultiText}
    />
  );
}
