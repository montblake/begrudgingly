import SpecialPage from "@/components/special_page";

const ImageProps = {
  src: "/contact_dickens.jpg",
  alt: "Photo by Joe Mazza / brave lux inc.",
  width: 500,
  height: 655,
  border: true,
  caption: "Photo by Joe Mazza / brave lux inc.",
  rel_x: 0,
  rel_y: 0,
};

const HeadlineProps = {
  title:
    "Get in touch. I would love to hear from you. I am on pins and needles in anticipation of your inquiry. With kind regards and best wishes.",
  author: "Charles Dickens, author",
  publisher: "",
};

const TextElement = (
  <>
    {/* <p className="">
      This one-of-a-kind holiday production, which imagines a still-living
      Dickens forced to perform his famous{" "}
      <span className="italic">A Christmas Carol</span> for the 171st
      consecutive year, lovingly celebrates and skewers the famous author and
      our Christmas traditions.
    </p> */}
    {/* <p className="">
      <span className="italic">Charles Dickens Begrudgingly...</span> originally
      charmed audiences during its Chicago debut at The Building Stage in
      December 2011 and again in 2012. Now, ten years after the closing of The
      Building Stage, former Artistic Director Blake Montgomery revives his Jeff
      Award-winning solo performance for the 2024 holiday season.
    </p> */}
    <div className="w-[90%] mx-auto md:mx-0 mt-4 flex flex-col items-center bg-gradient-to-br from-neutral-200/75 to-neutral-500/100 py-4 px-8 rounded-xl gap-2">
      {/* <h2 className="text-neutral-950 text-sm font-bold">Curious?</h2> */}
      <p className="text-xs text-neutral-900">
        Charles Dickens is currently exploring performance options for the
        holidays in 2025 and beyond. If you&apos;re interested in presenting or
        producing the show in your theater, please get in touch.
      </p>
      <div className="mt-4 w-full">
        <a href="mailto:dickens@dickensagain.com">
          <button className="bg-neutral-900 border border-neutral-500 text-neutral-400 text-xs px-4 py-2 rounded-xl hover:text-neutral-300 transition-all duration-300 ease-in-out active:scale-95 w-full">
            dickens@dickensagain.com
          </button>
        </a>
      </div>
    </div>
  </>
);

export default function Contact() {
  return (
    <SpecialPage
      ImageProps={ImageProps}
      HeadlineProps={HeadlineProps}
      TextElement={TextElement}
    />
  );
}
