import Image from "next/image";

const ImageProps = {
  src: "/charles-full.jpg",
  alt: "Charles Dickens",
  width: 500,
  height: 645,
};

const HeadlineProps = {
  title:
    "An intimate, imaginative holiday treat filled with laughs, a dash of mischief, and a touch of holiday magic.",
  author: "Kerry Reid",
  publisher: "Chicago Reader",
};

const PerformerText = (
  <div className="flex flex-col gap-4">
    <p className="text-neutral-400 text-sm">
      <span className="text-neutral-200 font-bold">The Premise.</span> In 1853,
      ten years after publishing{" "}
      <span className="italic">A Christmas Carol</span>, Charles Dickens began
      reading his work to live audiences, finding both success and purpose in
      these public performances. They were so successful that he continued until
      his death in 1870.
    </p>

    <p className="text-neutral-400 text-sm mt-4">
      But… what if that’s not exactly the whole story? What if reports of his
      death were, shall we say, exaggerated? And what if, for some mysterious
      and mystical reason, Dickens is bound to repeat his reading of{" "}
      <span className="italic">A Christmas Carol</span> every December—year
      after year, century after century?
    </p>

    <p className="text-neutral-400 text-sm mt-4">
      Now, over 200 years old and a bit weary of his own creation, Dickens finds
      himself once again booked to perform his overly familiar Christmas tale.
    </p>

    <p className="text-neutral-400 text-sm mt-4">
      Join the famous author as he tries to change his fate and avoid another
      performance of his most famous work. Perhaps Dickens might get his wish of
      simply hosting a holiday party. Or perhaps, the Spirits of Christmas just
      might guide him to rediscover the beauty in his work &mdash; and the joy
      of sharing it with an audience, one more time.
    </p>
  </div>
);

export default function Premise() {
  return (
    <main className="flex-1 bg-neutral-100/0 flex flex-col justify-start items-center md:flex-row md:justify-center md:items-start md:px-8 md:pt-4 pb-16 max-w-[1000px] mx-auto">
      <div className="md:sticky md:top-0 md:h-screen w-full">
        <SpecialImage
          src={ImageProps.src}
          alt={ImageProps.alt}
          width={ImageProps.width}
          height={ImageProps.height}
        />
      </div>
      <div className="md:overflow-y-auto md:max-h-screen w-full">
        <SpecialText />
      </div>
    </main>
  );
}

function SpecialImage({ src, alt, width, height }: typeof ImageProps) {
  return (
    <div className="w-full p-4 relative">
      <Image
        className="w-full max-w-[400px] md:max-w-[500px] mx-auto rounded-2xl drop-shadow-lg border border-neutral-400"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
}

function SpecialText() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full max-w-[500px] mx-auto md:max-w-none p-4">
      <SpecialHeadline {...HeadlineProps} />
      <hr className="w-full border-neutral-400/80 my-8" />
      {PerformerText}
    </div>
  );
}

function SpecialHeadline({ title, author, publisher }: typeof HeadlineProps) {
  return (
    <div className="flex flex-col justify-center items-center md:items-start gap-4 w-full">
      <h1 className="text-4xl font-bold text-neutral-200 text-center md:text-left">
        {title}
      </h1>
      {publisher ? (
        <p className="text-neutral-200 text-sm">
          {author}, <span className="italic">{publisher}</span>
        </p>
      ) : (
        <p className="text-neutral-200 text-sm">{author}</p>
      )}
    </div>
  );
}
