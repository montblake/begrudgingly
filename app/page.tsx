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
      December 2011 and again in 2012. Now, ten years after the closing of The
      Building Stage, former Artistic Director Blake Montgomery revives his Jeff
      Award-winning solo performance for the 2024 holiday season.
    </p>
    <p className="">
      Charles Dickens is currently exploring performance options for the
      holidays in 2025 and beyond. If you&apos;re interested in presenting or
      producing the show in your theater, please get in touch.
    </p>
    <div className="mt-4 flex flex-col items-center">
      <a href="mailto:dickens@dickensagain.com">
        <button className="bg-neutral-950 border border-neutral-400 text-neutral-400 text-sm px-4 py-2 rounded-xl hover:bg-neutral-800 transition-all duration-300 ease-in-out active:scale-95">
          dickens@dickensagain.com
        </button>
      </a>
    </div>
  </>
);

export default function Home() {
  return (
    <SpecialPage
      ImageProps={ImageProps}
      HeadlineProps={HeadlineProps}
      TextElement={TextElement}
    />
  );
}
