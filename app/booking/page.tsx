import SpecialPage from "@/components/special_page";
import { platform } from "os";

const ImageProps = {
  src: "/dickens_house_poster_2.jpg",
  alt: "Gold-toned Dickens",
  width: 500,
  height: 655,
  border: true,
  caption: "",
  rel_x: 0,
  rel_y: 0,
};

const HeadlineProps = {
  title:
    "A disarming portrayal of Dickens.... Every inch the consummate host, he makes each guest feel personally welcomed into the space. ",
  author: "Stephanie Kulke",
  publisher: "Chicago Stage and Screen",
};

const TextElement = (
  <>
    <p>
      Blake Montgomery is currently exploring opportunities to perform{" "}
      <span className="italic">Charles Dickens Begrudgingly</span> for the
      holidays in 2025 and beyond.
    </p>
    <p>
      Whether an adaptation of the existing blackbox production makes sense for
      your organization or a new production is in order, this joyful and
      heartfelt show is sure to delight your audience. Open to discussions about
      presenting the show or collaborating on a new production specifically for
      your audience. Ideally looking for a run lasting the full holiday season.
    </p>
    <p>
      Below, Blake shares some thoughts on the show, the existing production,
      suitable venues:
    </p>
  </>
);

const CtaProps = {
  intro: "",
  links: [
    // {
    //   href: "mailto:dickens@dickensagain.com",
    //   text: "dickens@dickensagain.com",
    //   internal: false,
    //   icon: "mail",
    // },
  ],
};

const MultiText = [
  {
    title: "Important Considerations",
    text: " The show is built around a close and lively connection with the audience and is performed throughout the whole of the theater space. Both the audience relationship and the performance of the story require choosing an appropriate venue for the piece.",
  },
  {
    title: "Existing Blackbox Production",
    text: "The current production is designed for a blackbox space of 21' x 65' and seating around 75. This design could work at larger sizes for probably up to 100-125 patrons without affecting the nature of the performance.\nThe production is designed to be performed throughout the whole of the theater space. There is a small raised platform on one end that holds Dickens' reading desk and is assumed to be the site of the performance. The actual performance alternates between the raised platform and a slightly raised fore-stage area, along with a carpeted central aisle running through the audience, which is seated in rows of chairs on floor-level. A seemingly unoccupied tech booth is visibly located in the back of the theater.\nThe rest of the production design is decorative and mostly fills the walls along the seating area, suggesting the decor the presenting theater would have in place for an appearance of the celebrated author reading his famous story. The vibe is more a salon than theater. ",
  },
  {
    title: "Larger Venues",
    text: "At larger sizes, or in a more traditional theater setting, the production would need to be adjusted both to the architecture of the space and how the audience will be seated.\nIn the case of a traditional theater setting, the design could be simplified to make use of existing theater decor; however, the structure of the performance would need to be re-imagined to make use of the architecture of the space and the audience's seating arrangement.\nWith a bit of time, the blocking can certainly be adjusted and incorporated into the performance. What is less clear is what it would do to the sense of intimacy that is one of the production's most important features. That uncertainty acknowledged, presenting the show in a larger venue might work wonderfully well and is well worth exploring.",
  },
  {
    title: "Necessary Local Reference",
    text: "The script needs to reference a well-known local production of A Christmas Carol. In Chicago where the script was develped, this was the Goodman Theatre's long-running production. Initially introduced to the audience as Dickens is attempting to escape performing his story: \n\"You do know that not far from here, there's a rather large, and fairly well-known, theater that's doing a version of my book as a PLAY. They have characters and sets. Intimate moments and bustling crowd scenes. Dancers, musicians! The snow really falls and the spirits actually fly through the air. In formation! They spare no expense, they give it all to you, just lay it out on the stage. All I can do is talk. You have to imagine everything yourselves. Where's the fun in that? It's not far. It's just downtown/down the street/it's on Randolph!\"\nLater this production is referenced again: \"You know the next scene, the party at Fezziwig's? Well, they do it rather well at that large theater downtown.\" Dickens proceeds to describe the scene in all its joyous, big-budget splendor. Having painted this picture for the audience, Dickens is then able to offer an alternative interpretation, focusing solely on the experience of Scrooge during the party.",
  },
  {
    title: "Rights",
    text: "This show is available for performance by Blake Montgomery, either as a presentation of the existing CLOWNSHOW production or in a new production created in collaboration with your artistic team -- or some hybrid of the two. \nCurrently, rights to the script for production are not available.",
  },
];

export default function Booking() {
  return (
    <SpecialPage
      key="/booking"
      ImageProps={ImageProps}
      HeadlineProps={HeadlineProps}
      TextElement={TextElement}
      CtaProps={CtaProps}
      MultiText={MultiText}
    />
  );
}
