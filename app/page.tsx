import SpecialPage from "@/components/special_page";

const ImageProps = {
  src: "/2024_production_poster_web.png",
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
    {/* <p className="">
      In 1853, ten years after publishing{" "}
      <span className="italic">A Christmas Carol</span>, Charles Dickens began
      reading his work to live audiences, finding both success and purpose in
      these public performances. They were so successful that he continued until
      his death in 1870.
    </p> */}

    {/* <p className="">
      But… what if that’s not exactly the whole story? What if reports of his
      death were, shall we say, exaggerated? And what if, for some mysterious
      and mystical reason, Dickens is bound to repeat his reading of{" "}
      <span className="italic">A Christmas Carol</span> every December—year
      after year, century after century?
    </p> */}
    <p>
      This solo show, created and performed by Blake Montgomery, presents the
      famous author, now over 200 years old, finding himself once again booked
      to perform his overly familiar Christmas tale as he has every December
      since 1853. Dickens, however, has a plan. Unbeknownst to the
      theater&apos;s management, he intends to abandon the performance in lieu
      of a simply hosting a holiday party.
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
