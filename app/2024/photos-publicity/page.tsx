import PhotoGallery from "@/components/photo_gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charles Dickens Begrudgingly - 2024 Publicity Photos",
  description:
    "Publicity photos of Charles Dickens Begrudgingly Performs A CHRISTMAS CAROL Again, by Joe Mazza / brave lux inc.",
  alternates: { canonical: "/2024/photos-publicity" },
};

const photos = [
  {
    src: "/photos/bravelux/1_joe-mazza-chicago-brave-lux-inc-5108630.avif",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    vertical: false,
  },
  {
    src: "/photos/bravelux/2-joe-mazza-chicago-brave-lux-inc-5206468.avif",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    vertical: false,
  },
  {
    src: "/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5108673.avif",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    vertical: false,
  },

  {
    src: "/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5206766.avif",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    vertical: false,
  },
  {
    src: "/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5206555.avif",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    vertical: false,
  },
  {
    src: "/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5206804-2.avif",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    vertical: false,
  },
  {
    src: "/photos/bravelux/202_joe-mazza-chicago-brave-lux-inc-5206819.avif",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    vertical: false,
  },
  {
    src: "/photos/bravelux/100-joe-mazza-chicago-brave-lux-inc-5206928.avif",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    vertical: false,
  },
];

const HeaderInfo = {
  headerText: "Publicity photos by ",
  photographer: "Joe Mazza / brave lux inc.",
  photographerLink: "https://www.bravelux.com/",
};

const CtaProps = {
  intro: "Learn more about the show:",
  links: [
    {
      href: "/2024/photos-performance",
      text: "performance photos",
      icon: "spotlight",
      internal: true,
    },
    {
      href: "/2024/reviews",
      text: "press reviews",
      icon: "glasses",
      internal: true,
    },
  ],
};

const textElement = (
  <div className="w-full flex flex-col items-center justify-center bg-neutral-800 rounded-2xl p-8">
    <p className="text-neutral-300 text-xs md:text-xs leading-relaxed">
      These publicity photos capture{" "}
      <span className="font-semibold">
        Charles Dickens Begrudgingly Performs A Christmas Carol Again
      </span>
      , created and performed by Blake Montgomery for the 2024 production at The
      Den Theatre in Chicago. Photographed by Joe Mazza of Brave Lux Inc., these
      images showcase Montgomery&apos;s portrayal of Charles Dickens in this
      one-man theatrical adaptation of the classic Christmas tale. The images
      capture the production&apos;s perfect balance of dramatic storytelling and
      playful humor, showcasing Montgomery&apos;s intimate, off-the-cuff
      performance style that makes the familiar story feel fresh and engaging.
      These promotional images were used for press materials and marketing for
      the CLOWNSHOW production, which ran from December 5-22, 2024, and received
      critical acclaim from Chicago theater critics.
    </p>
  </div>
);

export default function PhotosPublicity() {
  return (
    <div className="w-full h-[calc(100vh-3rem)] p-4 sm:p-8 overflow-y-auto">
      <div className="w-full h-full">
        <PhotoGallery
          key="/2024/photos-publicity"
          HeaderInfo={HeaderInfo}
          photos={photos}
          links={CtaProps.links}
          textElement={textElement}
        />
      </div>
    </div>
  );
}
