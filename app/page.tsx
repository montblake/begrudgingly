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

const CtaContent = {
  intro: "Learn more about the show:",
  links: [
    {
      href: "/premise",
      text: "the premise",
      icon: "lightbulb",
      internal: true,
    },
    {
      href: "/photos_publicity",
      text: "publicity photos",
      icon: "camera",
      internal: true,
    },
    {
      href: "/reviews",
      text: "press reviews",
      icon: "glasses",
      internal: true,
    },
  ],
};

export default function Home() {
  return (
    <SpecialPage
      ImageProps={ImageProps}
      HeadlineProps={HeadlineProps}
      TextElement={TextElement}
      CtaContent={CtaContent}
    />
  );
}
