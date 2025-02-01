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
  title: "Looking for a unique holiday offering for your audience?",
  author: "Charles Dickens",
  publisher: "",
};

const TextElement = (
  <>
    <p>
      This one-of-a-kind holiday production, which imagines a still-living
      Dickens forced to perform his famous{" "}
      <span className="italic">A Christmas Carol</span> for the 171st
      consecutive year, lovingly celebrates and skewers the famous author and
      our Christmas traditions.
    </p>
    <p>
      The show relies on creating an intimate experience for the audience. This
      is a core idea of the script as well as the performance. To this point,
      the show has only performed in small blackbox spaces to about 65 seats. It
      can certainly work for somewhat larger audiences. It is, however, an open
      question as to just how large before the show loses its sese of intimacy.
    </p>
    <p>
      The physical space is flexible but important. Dickens not only moves
      throughout the house in the preshow, but also performs the bulk of the
      show alternating between the central aisle, at the foot of stage, and on a
      small stage platform. In blackbox spaces, the show seats the audience in
      rows on the floor with at least one central aisle. The progression of the
      performance is charted to these areas.
    </p>
  </>
);

export default function Booking() {
  return (
    <SpecialPage
      ImageProps={ImageProps}
      HeadlineProps={HeadlineProps}
      TextElement={TextElement}
    />
  );
}
