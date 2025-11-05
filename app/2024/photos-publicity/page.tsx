import PhotoGallery from "@/components/photo_gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charles Dickens Begrudgingly - 2024 Publicity Photos",
  description:
    "Publicity photos of Charles Dickens Begrudgingly Performs A CHRISTMAS CAROL Again, by Joe Mazza / brave lux inc.",
};

const photos = [
  {
    src: "/photos/bravelux/1_joe-mazza-chicago-brave-lux-inc-5108630.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    vertical: false,
  },
  {
    src: "/photos/bravelux/4-joe-mazza-chicago-brave-lux-inc-5206468.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    vertical: false,
  },
  {
    src: "/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5108673.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    vertical: false,
  },

  {
    src: "/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5206766.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    vertical: false,
  },
  {
    src: "/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5206555.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    vertical: false,
  },
  {
    src: "/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5206804-2.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    vertical: false,
  },
  {
    src: "/photos/bravelux/202_joe-mazza-chicago-brave-lux-inc-5206819.jpg",
    alt: "Charles Dickens",
    credit: "Joe Mazza / brave lux inc.",
    vertical: false,
  },
  {
    src: "/photos/bravelux/100-joe-mazza-chicago-brave-lux-inc-5206928.jpg",
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
      href: "/2024/photos-performance/",
      text: "performance photos",
      icon: "spotlight",
      internal: true,
    },
    {
      href: "/2024/reviews/",
      text: "press reviews",
      icon: "glasses",
      internal: true,
    },
  ],
};

export default function PhotosPublicity() {
  return (
    <>
      <PhotoGallery
        key="/2024/photos-publicity"
        HeaderInfo={HeaderInfo}
        photos={photos}
        intro={CtaProps.intro}
        links={CtaProps.links}
      />
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-8 md:px-2 py-8 -mt-8">
        <div className="bg-neutral-200/50 backdrop-blur-sm border border-neutral-700/30 rounded-xl p-6 md:p-12">
          <p className="text-neutral-300 text-base md:text-base leading-relaxed">
            These publicity photos capture{" "}
            <span className="font-semibold">
              Charles Dickens Begrudgingly Performs A Christmas Carol Again
            </span>
            , created and performed by Blake Montgomery for the 2024 production
            at The Den Theatre in Chicago. Photographed by Joe Mazza of Brave
            Lux Inc., these images showcase Montgomery&apos;s portrayal of
            Charles Dickens in this one-man theatrical adaptation of the classic
            Christmas tale. The images capture the production&apos;s perfect
            balance of dramatic storytelling and playful humor, showcasing
            Montgomery&apos;s intimate, off-the-cuff performance style that
            makes the familiar story feel fresh and engaging. These promotional
            images were used for press materials and marketing for the CLOWNSHOW
            production, which ran from December 5-22, 2024, and received
            critical acclaim from Chicago theater critics.
          </p>
        </div>
        <div className="w-full h-24 md:h-36 bg-gradient-to-b from-neutral-950/0 to-neutral-950/100 md:bg-none" />
      </div>
    </>
  );
}
