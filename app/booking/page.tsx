import SpecialPage from "@/components/special_page";

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
    "A remarkably artful riff on Dickens' original, written and performed stunningly well by Blake Montgomery.",
  author: "Bill Esler",
  publisher: "Buzz Center Stage",
};

const TextElement = (
  <>
    <p>
      Blake Montgomery is currently exploring opportunities to perform{" "}
      <span className="italic">Charles Dickens Begrudgingly</span> for the
      holidays in 2025 and beyond. Whether an adaptation of the existing
      blackbox production makes sense for your organization or a new production
      is in order, this joyful and heartfelt show is sure to delight your
      audience.
    </p>
    {/* <p>
      The existing production design is for a small blackbox space, around
      21&#39; x 65&#39; in dimensions, with a grid hanging at least 12&#39;
      above the deck. The audience is laid out in rows on the floor with at
      least one central aisle. Dickens engages with the audience and eventually
      performs his story from the central aisle, on a raised platform at the
      foot of stage, and on a slightly higher stage platform. The progression of
      the performance is charted to take advantage of these spaces.
    </p>
    <p>
      This existing design seats 65 patrons. A slightly larger blackbox could
      utilize the same design and work with larger audiences size. Moving the
      show into a more traditional theater setting would most likely relace the
      production design with the actual theater architecture but would require a
      new performance plan and rehearsal time to make use of the details of the
      space. While the construction of the piece is flexible and able to adjust
      to many variables, making sure the venue is the right fit will be key to
      ensuring a succesful production.
    </p>
    <p>
      *The show was created in Chicago and makes some pointed reference, without
      name, to the annual Goodman Theatre production of{" "}
      <span className="italic">A Christmas Carol</span>. Initially lauded as a
      preferred alternative to watching Dickens&apos; solo reading, the
      production is later used to deconstruct the Fezziwig sequence. To work
      outside of Chicago, there should be a famous, venerable, long-running,
      institutional theater production of Dickens&apos; tale that runs locally
      which everyone in the audience is at least vaguely familiar with. Ideally
      this production should also feature an over-the-top song and dance number
      for the Fezziwig party scene.
    </p>
    <p>
      **Currently, rights for an independant production of the script are not
      available.
    </p> */}
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
    title: "Production Design",
    text: "The existing production design is for a small blackbox space, around 21' x 65' in dimensions, with a grid hanging at least 12' above the deck. The audience is laid out in rows on the floor with at least one central aisle. Dickens engages with the audience and eventually performs his story from the central aisle, on a raised platform at the foot of stage, and on a slightly higher stage platform. The progression of the performance is charted to take advantage of these spaces.",
  },
  {
    title: "Audience Relationship",
    text: "This existing design seats 65 patrons. A slightly larger blackbox could utilize the same design and work with larger audiences size. Moving the show into a more traditional theater setting would most likely relace the production design with the actual theater architecture but would require a new performance plan and rehearsal time to make use of the details of the space. While the construction of the piece is flexible and able to adjust to many variables, making sure the venue is the right fit will be key to ensuring a succesful production.",
  },
  {
    title: "Rights",
    text: "Currently, rights to the script are not available.",
  },
  {
    title: "Fairly Large and Rather Well-Known",
    text: "The show was created in Chicago and makes some pointed reference, without name, to the annual Goodman Theatre production of A Christmas Carol. Initially lauded as a preferred alternative to watching Dickens' solo reading, the production is later used to deconstruct the Fezziwig sequence. To work outside of Chicago, there should be a famous, venerable, long-running, institutional theater production of Dickens' tale that runs locally which everyone in the audience is at least vaguely familiar with. Ideally this production should also feature an over-the-top song and dance number for the Fezziwig party scene.",
  },
];

export default function Booking() {
  return (
    <SpecialPage
      ImageProps={ImageProps}
      HeadlineProps={HeadlineProps}
      TextElement={TextElement}
      CtaProps={CtaProps}
      MultiText={MultiText}
    />
  );
}
