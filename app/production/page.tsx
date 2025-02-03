import SpecialPage from "@/components/special_page";
import Link from "next/link";
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
      production was hailed as:
    </p>
    <ul className="flex flex-col gap-2 justify-center items-center text-neutral-200">
      <li>&ldquo;a one-man yuletide tour de force&rdquo;</li>
      <li>&ldquo;wonderfully off-the-cuff and intimate&rdquo;</li>
      <li>&ldquo;charming and sly&rdquo;</li>
      <li>&ldquo;a work and performance not to be missed.&rdquo;</li>
    </ul>
    {/* <div className="w-[90%] mx-auto md:mx-0 mt-4 flex flex-col items-center bg-gradient-to-br from-neutral-200/75 to-neutral-500/100 pt-4 pb-8 px-8  rounded-xl gap-2">
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
        The critics weigh in on the show in the{" "}
        <a href="/production/reviews" className="text-neutral-200">
          press reviews
        </a>
        .
      </p>
      <div className="mt-4">
        <a href="mailto:dickens@dickensagain.com">
          <button className="bg-neutral-400 border border-neutral-500 text-neutral-950 text-sm px-4 py-2 rounded-xl hover:bg-neutral-300 transition-all duration-300 ease-in-out active:scale-95">
            dickens@dickensagain.com
          </button>
        </a>
      </div>
    </div> */}
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
      <Link href="/production/program">
        <button className="bg-neutral-900 border border-neutral-500 text-neutral-400 text-xs px-4 py-2 rounded-xl hover:text-neutral-300 transition-all duration-300 ease-in-out active:scale-95 w-full">
          full production credits
        </button>
      </Link>
      <Link href="/production/photos_publicity">
        <button className="bg-neutral-900 border border-neutral-500 text-neutral-400 text-xs px-4 py-2 rounded-xl hover:text-neutral-300 transition-all duration-300 ease-in-out active:scale-95 w-full">
          photos by Joe Mazza
        </button>
      </Link>
      <Link href="/production/photos_performance">
        <button className="bg-neutral-900 border border-neutral-500 text-neutral-400 text-xs px-4 py-2 rounded-xl hover:text-neutral-300 transition-all duration-300 ease-in-out active:scale-95 w-full">
          photos by Michael Brosilow
        </button>
      </Link>
      <Link href="/production/reviews">
        <button className="bg-neutral-900 border border-neutral-500 text-neutral-400 text-xs px-4 py-2 rounded-xl hover:text-neutral-300 transition-all duration-300 ease-in-out active:scale-95 w-full">
          in the words of the critics
        </button>
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

export default function Production() {
  return (
    <SpecialPage
      ImageProps={ImageProps}
      HeadlineProps={HeadlineProps}
      TextElement={TextElement}
      CTAElement={CTAElement}
    />
  );
}
