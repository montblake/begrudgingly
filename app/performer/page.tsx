import SpecialPage from "@/components/special_page";

const ImageProps = {
  src: "/blake_headshot.jpg",
  alt: "Blake Montgomery Headshot",
  width: 500,
  height: 655,
  border: true,
  caption: "Headshot by Ian McLaren",
  rel_x: 0,
  rel_y: 0,
};

const HeadlineProps = {
  title:
    "A superb storyteller!\u2028 I highly recommend the gift of Blake Montgomery this season.",
  author: "Katy Walsh",
  publisher: "The Fourth Walsh",
};

const TextElement = (
  <>
    <p>
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
  </>
);

export default function Performer() {
  return (
    <SpecialPage
      ImageProps={ImageProps}
      HeadlineProps={HeadlineProps}
      TextElement={TextElement}
    />
  );
}
