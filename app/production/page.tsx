import SpecialPage from "@/components/special_page";

const ImageProps = {
  src: "/production_dickens.jpg",
  alt: "Charles Dickens Begrudgingly... 2024 Production Image",
  width: 500,
  height: 733,
  border: true,
  caption: "Production image by Joe Mazza / brave lux inc.",
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
    <p className="">
      Curious? Meet the creative team and production staff in the{" "}
      <a href="/production/program" className="text-neutral-200">
        digital program
      </a>
      . See the show through the eyes of Joe Mazza in the{" "}
      <a href="/production/photos_publicity" className="text-neutral-200">
        publicity photos
      </a>
      . Experience the first preview with Michael Brosilow&apos;s{" "}
      <a href="/production/photos_performance" className="text-neutral-200">
        production photos
      </a>
      . Explore the show through the eyes of the critics in the{" "}
      <a href="/production/reviews" className="text-neutral-200">
        press reviews
      </a>
      .
    </p>
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
