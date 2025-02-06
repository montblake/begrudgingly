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
    "A disarming portrayal of Dickens.... Every inch the consummate host, he makes each guest feel personally welcomed into the space. ",
  author: "Stephanie Kulke",
  publisher: "Chicago Stage and Screen",
};

const TextElement = (
  <>
    <p className="">
      <span className="text-neutral-200 font-bold">The Premise.</span> In 1853,
      ten years after publishing{" "}
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
      after year, century after century? Now, over 200 years old and a bit weary
      of his own creation, Dickens finds himself once again booked to perform
      his overly familiar Christmas tale.
    </p>

    <p className="">
      Join the famous author as he tries to change his fate and avoid another
      performance of his most famous work. Perhaps Dickens might get his wish of
      simply hosting a holiday party. Or perhaps, the Spirits of Christmas just
      might guide him to rediscover the beauty in his work &mdash; and the joy
      of sharing it with an audience, one more time.
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

export default function Premise() {
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
