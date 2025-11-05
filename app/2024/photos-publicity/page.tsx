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
    </>
  );
}
