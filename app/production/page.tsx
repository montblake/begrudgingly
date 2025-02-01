import SpecialPage from "@/components/special_page";

const ImageProps = {
  src: "/production_dickens.jpg",
  alt: "Charles Dickens Begrudgingly... 2024 Production Image",
  width: 500,
  height: 733,
  border: true,
  caption: "Production image by Joe Mazza / brave lux inc.",
  rel_x: 0,
  rel_y: 0,
};

const HeadlineProps = {
  title:
    "A remarkably artful riff on Dickens' original, written and performed stunningly well by Blake Montgomery.",
  author: "Bill Esler",
  publisher: "Buzz Center Stage",
};

const TextElement = (
  <>
    <p className="">
      In 2024, Blake Montgomery brought CHARLES DICKENS BEGRUDGINGLY... back to
      the stage with a new production company, CLOWNSHOW.
    </p>
    <p className="">
      Performed at The Den Theatre in Chicago from December 5th - 22nd, the
      production was hailed as a &ldquo;one-man yuletide tour de force&rdquo;,
      &ldquo;wonderfully off-the-cuff and intimate&rdquo;, &ldquo;charming and
      sly&rdquo;, and &ldquo;a work and performance not to be missed.&rdquo;
    </p>
    <div className="w-[90%] mx-auto md:mx-0 mt-4 flex flex-col items-center bg-gradient-to-br from-neutral-200/75 to-neutral-500/100 py-4 px-8 rounded-xl gap-2">
      <h2 className="text-neutral-950 text-sm font-bold">Curious?</h2>
      <p className="text-xs text-neutral-950">
        Meet the creative team and production staff in the{" "}
        <a href="/production/program" className="text-neutral-200">
          digital program
        </a>
        .
      </p>
      <p className="text-xs text-neutral-950">
        See the show through the eyes of Joe Mazza in the{" "}
        <a href="/production/photos_publicity" className="text-neutral-200">
          publicity photos
        </a>
        .
      </p>
      <p className="text-xs text-neutral-950">
        Experience the first preview with Michael Brosilow&apos;s{" "}
        <a href="/production/photos_performance" className="text-neutral-200">
          production photos
        </a>
        .
      </p>
      <p className="text-xs text-neutral-950">
        Explore the show through the eyes of the critics in the{" "}
        <a href="/production/reviews" className="text-neutral-200">
          press reviews
        </a>
        .
      </p>
      {/* <div className="mt-4">
        <a href="mailto:dickens@dickensagain.com">
          <button className="bg-neutral-400 border border-neutral-500 text-neutral-950 text-sm px-4 py-2 rounded-xl hover:bg-neutral-300 transition-all duration-300 ease-in-out active:scale-95">
            dickens@dickensagain.com
          </button>
        </a>
      </div> */}
    </div>
  </>
);

export default function Production() {
  return (
    <SpecialPage
      ImageProps={ImageProps}
      HeadlineProps={HeadlineProps}
      TextElement={TextElement}
    />
  );
}
