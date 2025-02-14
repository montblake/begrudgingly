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
      In 1853, ten years after publishing{" "}
      <span className="italic">A Christmas Carol</span>, Charles Dickens began
      reading his work to live audiences, finding both success and purpose in
      these public performances. They were so successful that he continued until
      his death in 1870.
    </p>

    <p className="">
      But… what if that’s not exactly the whole story? What if reports of his
      death were, shall we say, exaggerated? And what if, for some mysterious
      and mystical reason, Dickens is bound to repeat his reading of{" "}
      <span className="italic">A Christmas Carol</span> every December—year
      after year, century after century?
    </p>
    <p>
      <span className="font-bold">Charles Dickens Begrudgingly...</span>presents
      the famous author, now over 200 years old, finding himself once again
      booked to perform his overly familiar Christmas tale. Dickens, however,
      has a plan. Unbeknownst to the theater&apos;s management, he intends to
      abandon the performance in lieu of a simply hosting a holiday party.
    </p>
    <p>
      Perhaps Dickens will get his wish. Or, perhaps, the Spirits of Christmas
      might intervene and put him on a path to rediscover the beauty in his work
      &mdash; and the joy of sharing it with an audience, one more time.
    </p>
  </>
);

const CtaProps = {
  intro: "",
  links: [
    {
      href: "/about",
      text: "about",
      icon: "lightbulb",
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
