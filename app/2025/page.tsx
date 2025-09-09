import SpecialPage from "@/components/special_page";
import Image from "next/image";

const ImageProps = {
  src: "/2025_production_poster_web.png",
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
    <button className="bg-amber-300/80 px-4 py-2 rounded-2xl w-[66%] mx-auto text-neutral-50 border-2 border-black hover:border-neutral-50 transition-colors duration-300 text-center my-8">
      Get Tickets
    </button>
    <Image
      src="/photos/bravelux/1_joe-mazza-chicago-brave-lux-inc-5108630.jpg"
      alt="Blake Montgomery as Charles Dickens"
      width={500}
      height={800}
      className="w-full h-auto border border-neutral-600"
    />
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
    <div className="flex flex-col items-center justify-center relative">
      <Image
        src="/photos/bravelux/4-joe-mazza-chicago-brave-lux-inc-5206468.jpg"
        alt="Blake Montgomery as Charles Dickens"
        width={500}
        height={800}
        className="w-full h-auto border border-neutral-600"
      />
      <h2 className="text-2xl text-neutral-50 font-bold text-center absolute bottom-12 left-50">
        wonderfully off-the-cuff and intimate
      </h2>
    </div>
    <div className="flex flex-col items-center justify-center relative">
      <Image
        src="/photos/bravelux/98-joe-mazza-chicago-brave-lux-inc-5108669.jpg"
        alt="Blake Montgomery as Charles Dickens"
        width={500}
        height={800}
        className="w-full h-auto border border-neutral-600"
      />
      <h2 className="text-2xl text-neutral-50 font-bold text-center absolute bottom-12 left-50">
        one-man yuletide tour de force
      </h2>
    </div>
    <div className="flex flex-col items-center justify-center relative">
      <Image
        src="/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5206555.jpg"
        alt="Blake Montgomery as Charles Dickens"
        width={500}
        height={800}
        className="w-full h-auto border border-neutral-600"
      />
      <h2 className="text-2xl text-neutral-50 font-bold text-center absolute bottom-12 left-50">
        charming and sly
      </h2>
    </div>
    <div className="flex flex-col items-center justify-center relative">
      <Image
        src="/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5206766.jpg"
        alt="Blake Montgomery as Charles Dickens"
        width={500}
        height={800}
        className="w-full h-auto border border-neutral-600"
      />
      <h2 className="text-2xl text-neutral-50 font-bold text-center absolute bottom-12 left-50">
        a remarkably artful riff
      </h2>
    </div>
    {/* <div className="flex flex-col items-center justify-center relative">
      <Image
        src="/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5206804-2.jpg"
        alt="Blake Montgomery as Charles Dickens"
        width={500}
        height={800}
        className="w-full h-auto border border-neutral-600"
      />
      <h2 className="text-2xl text-neutral-50 font-bold text-center absolute bottom-12 left-50">
        an opportunity to rediscover comfort and joy
      </h2>
    </div> */}
    <div className="flex flex-col items-center justify-center relative">
      <Image
        src="/photos/bravelux/202_joe-mazza-chicago-brave-lux-inc-5206819.jpg"
        alt="Blake Montgomery as Charles Dickens"
        width={500}
        height={800}
        className="w-full h-auto border border-neutral-600"
      />
      <h2 className="text-2xl text-neutral-50 font-bold text-center absolute bottom-12 left-50">
        an opportunity to rediscover comfort and joy
      </h2>
    </div>
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
