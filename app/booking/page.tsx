import SpecialPage from "@/components/special_page";
import { Mail } from "lucide-react";
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
  title: "An opportunity to rediscover comfort and joy.",
  author: "Katy Walsh",
  publisher: "The Fourth Walsh",
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
    <p>
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
    </p>
  </>
);

const CTAElement = (
  <div className="w-[90%] mx-auto md:mx-0 mt-4 flex flex-col items-start gap-2 bg-gradient-to-br from-neutral-100/75 to-neutral-500/75 pt-4 pb-8 px-8 rounded-xl border border-neutral-500 drop-shadow-md">
    <p className="text-xs text-neutral-950">
      If you&apos;re interested in presenting or producing the show in your
      theater, please get in touch with Blake:
    </p>
    <div className="my-2 w-full">
      <a href="mailto:dickens@dickensagain.com">
        <button className="bg-neutral-900 border border-neutral-500 text-neutral-400 text-xs px-4 py-2 rounded-xl hover:text-neutral-300 transition-all duration-300 ease-in-out active:scale-95 w-full flex items-center justify-center gap-2">
          <Mail className="w-4 h-4 text-neutral-400" />
          <span className="hover:underline">dickens@dickensagain.com</span>
        </button>
      </a>
    </div>
  </div>
);

export default function Booking() {
  return (
    <SpecialPage
      ImageProps={ImageProps}
      HeadlineProps={HeadlineProps}
      TextElement={TextElement}
      CTAElement={CTAElement}
    />
  );
}
