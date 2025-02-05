import SpecialPage from "@/components/special_page";
import Link from "next/link";

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
      after year, century after century?
    </p>

    <p className="">
      Now, over 200 years old and a bit weary of his own creation, Dickens finds
      himself once again booked to perform his overly familiar Christmas tale.
      Join the famous author as he tries to change his fate and avoid another
      performance of his most famous work.
    </p>

    <p className="">
      Perhaps Dickens might get his wish of simply hosting a holiday party. Or
      perhaps, the Spirits of Christmas just might guide him to rediscover the
      beauty in his work &mdash; and the joy of sharing it with an audience, one
      more time.
    </p>
  </>
);

const CTAElement = (
  <div className="w-[90%] mx-auto md:mx-0 mt-4 flex flex-col items-start gap-2 bg-gradient-to-br from-neutral-100/75 to-neutral-500/75 pt-4 pb-8 px-8 rounded-xl border border-neutral-500 drop-shadow-md">
    {/* <p className="text-xs text-neutral-950">
      Blake Montgomery is currently exploring opportunities for{" "}
      <span className="italic">Charles Dickens Begrudgingly</span> for the
      holidays in 2025 and beyond.
    </p> */}
    <p className="text-xs text-neutral-950">Learn more about the show:</p>
    <div className="w-full flex flex-col gap-2">
      <Link
        href="/premise"
        className="bg-neutral-900 border border-neutral-500 text-neutral-400 text-xs px-4 py-2 rounded-xl hover:text-neutral-300 transition-all duration-300 ease-in-out active:scale-95 w-full text-center"
      >
        the premise
      </Link>
      <Link
        href="/production"
        className="bg-neutral-900 border border-neutral-500 text-neutral-400 text-xs px-4 py-2 rounded-xl hover:text-neutral-300 transition-all duration-300 ease-in-out active:scale-95 w-full text-center"
      >
        in production
      </Link>
      <Link
        href="/booking"
        className="bg-neutral-900 border border-neutral-500 text-neutral-400 text-xs px-4 py-2 rounded-xl hover:text-neutral-300 transition-all duration-300 ease-in-out active:scale-95 w-full text-center"
      >
        booking information
      </Link>
    </div>
    {/* <p className="text-xs text-neutral-950">
      If you&apos;re interested in presenting or producing the show in your
      theater, please get in touch.
    </p>
    <div className="my-2 w-full">
      <a href="mailto:dickens@dickensagain.com">
        <button className="bg-neutral-900 border border-neutral-500 text-neutral-400 text-xs px-4 py-2 rounded-xl hover:text-neutral-300 transition-all duration-300 ease-in-out active:scale-95 w-full">
          dickens@dickensagain.com
        </button>
      </a>
    </div> */}
  </div>
);

export default function Premise() {
  return (
    <SpecialPage
      ImageProps={ImageProps}
      HeadlineProps={HeadlineProps}
      TextElement={TextElement}
      CTAElement={CTAElement}
    />
  );
}
