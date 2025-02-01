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
    <div className="w-[90%] mx-auto md:mx-0 mt-4 flex flex-col items-center bg-gradient-to-br from-neutral-200/75 to-neutral-500/100 py-4 px-8 pb-8 rounded-xl gap-2">
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

export default function Booking() {
  return (
    <SpecialPage
      ImageProps={ImageProps}
      HeadlineProps={HeadlineProps}
      TextElement={TextElement}
    />
  );
}
