import Image from "next/image";

const ImageProps = {
  src: "/blake_headshot.jpg",
  alt: "Blake Montgomery Headshot",
  width: 500,
  height: 655,
};

const HeadlineProps = {
  title: "Hello World, this is a large font message of great importance!",
  author: "Charles Dickens, Author",
  publisher: "",
};

const PerformerText = (
  <div className="flex flex-col gap-4">
    <p className="text-neutral-400 text-sm">
      <span className="font-bold text-neutral-200">Blake Montgomery</span> began
      his career in Chicago directing ensemble clown theater and performing with
      a variety of non-naturalistic Chicago theaters, most notably Redmoon with
      whom he collaborated for more than a decade. In 2005, Montgomery founded
      The Building Stage, a theater company and performance space, where he
      served as Artistic Director until its closing in 2013. The company was
      known for its ensemble-devised, director-driven creations, particularly in
      literary adaptations like their Jeff Award-winning{" "}
      <span className="italic">Moby-Dick</span> and the poetic, clown-inspired{" "}
      <span className="italic">Dawn, Quixote</span>. Montgomery&apos;s artistic
      approach draws on his training at the École Jacques Lecoq, the
      Dell&apos;Arte School of Physical Theater, and Middlebury College. A
      member of Actors&apos; Equity, his performances in Chicago include work
      with The House Theatre, The Hypocrites, Remy Bumppo Theatre Company, Court
      Theatre, Chicago Shakespeare, Steppenwolf, and Writers Theatre.
    </p>
    <p className="text-neutral-400 text-sm">
      <span className="font-bold text-neutral-200">Blake Montgomery</span> began
      his career in Chicago directing ensemble clown theater and performing with
      a variety of non-naturalistic Chicago theaters, most notably Redmoon with
      whom he collaborated for more than a decade. In 2005, Montgomery founded
      The Building Stage, a theater company and performance space, where he
      served as Artistic Director until its closing in 2013. The company was
      known for its ensemble-devised, director-driven creations, particularly in
      literary adaptations like their Jeff Award-winning{" "}
      <span className="italic">Moby-Dick</span> and the poetic, clown-inspired{" "}
      <span className="italic">Dawn, Quixote</span>. Montgomery&apos;s artistic
      approach draws on his training at the École Jacques Lecoq, the
      Dell&apos;Arte School of Physical Theater, and Middlebury College. A
      member of Actors&apos; Equity, his performances in Chicago include work
      with The House Theatre, The Hypocrites, Remy Bumppo Theatre Company, Court
      Theatre, Chicago Shakespeare, Steppenwolf, and Writers Theatre.
    </p>
    <p className="text-neutral-400 text-sm">
      <span className="font-bold text-neutral-200">Blake Montgomery</span> began
      his career in Chicago directing ensemble clown theater and performing with
      a variety of non-naturalistic Chicago theaters, most notably Redmoon with
      whom he collaborated for more than a decade. In 2005, Montgomery founded
      The Building Stage, a theater company and performance space, where he
      served as Artistic Director until its closing in 2013. The company was
      known for its ensemble-devised, director-driven creations, particularly in
      literary adaptations like their Jeff Award-winning{" "}
      <span className="italic">Moby-Dick</span> and the poetic, clown-inspired{" "}
      <span className="italic">Dawn, Quixote</span>. Montgomery&apos;s artistic
      approach draws on his training at the École Jacques Lecoq, the
      Dell&apos;Arte School of Physical Theater, and Middlebury College. A
      member of Actors&apos; Equity, his performances in Chicago include work
      with The House Theatre, The Hypocrites, Remy Bumppo Theatre Company, Court
      Theatre, Chicago Shakespeare, Steppenwolf, and Writers Theatre.
    </p>
  </div>
);

export default function Special() {
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
