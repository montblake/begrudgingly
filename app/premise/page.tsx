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

const HeadlineProps = {
  title:
    "An intimate, imaginative holiday treat filled with laughs, a dash of mischief, and a touch of holiday magic.",
  author: "Kerry Reid",
  publisher: "Chicago Reader",
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
    </p>

    <p className="">
      Join the famous author as he tries to change his fate and avoid another
      performance of his most famous work. Perhaps Dickens might get his wish of
      simply hosting a holiday party. Or perhaps, the Spirits of Christmas just
      might guide him to rediscover the beauty in his work &mdash; and the joy
      of sharing it with an audience, one more time.
    </p>
    <div className="w-[90%] mx-auto md:mx-0 mt-4 flex flex-col items-center bg-gradient-to-br from-neutral-200/75 to-neutral-500/100 py-4 px-8 rounded-xl">
      <p className="text-xs text-neutral-950">
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

export default function Premise() {
  return (
    <SpecialPage
      ImageProps={ImageProps}
      HeadlineProps={HeadlineProps}
      TextElement={TextElement}
    />
  );
}
