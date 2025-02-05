import SpecialPage from "@/components/special_page";
import Link from "next/link";
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

const HeadlineProps = {
  title:
    "Montgomery's smart, heartfelt reinvention proves that you don't need fake snow and flying ghosts to make the tale resonate.",
  author: "Kerry Reid",
  publisher: "Chicago Reader",
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
      December 2011. It returned to the theater in 2012, winning the Jeff Award
      for solo performance.
    </p>
    <p className="">
      Over a decade after the closing of The Building Stage, former Artistic
      Director Blake Montgomery revived his exuberant take on the famous author
      for the 2024 holiday season in a production produced by CLOWNSHOW and
      presented at The Den Theatre in Chicago.
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

export default function Home() {
  return (
    <SpecialPage
      ImageProps={ImageProps}
      HeadlineProps={HeadlineProps}
      TextElement={TextElement}
      CTAElement={CTAElement}
    />
  );
}
