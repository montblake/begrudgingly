import PhotoGallery from "@/components/photo_gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Charles Dickens Begrudgingly Performs A CHRISTMAS CAROL Again: Performance Photos",
  description:
    "Performance photos of Charles Dickens Begrudgingly Performs A CHRISTMAS CAROL Again, by Michael Brosilow.",
};

const photos = [
  {
    src: "/photos/brosilow/DSC_6384.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_1266.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: false,
  },
  {
    src: "/photos/brosilow/DSC_6405.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: false,
  },
  {
    src: "/photos/brosilow/DSC_6395.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: false,
  },
  {
    src: "/photos/brosilow/MBP_0883.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_1033.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_0739.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_0761.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_1062.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_0863.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_0866.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_0897.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_1010.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_1056.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: false,
  },

  {
    src: "/photos/brosilow/MBP_1224.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: false,
  },
  {
    src: "/photos/brosilow/MBP_1259.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_1229.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
  {
    src: "/photos/brosilow/MBP_1070.jpg",
    alt: "Charles Dickens",
    credit: "Michael Brosilow",
    vertical: true,
  },
];

const HeaderInfo = {
  headerText: "Photos of first preview by ",
  photographer: "Michael Brosilow",
  photographerLink: "https://www.brosilow.com/",
};

const CtaProps = {
  intro: "Learn more about the show:",
  links: [
    {
      href: "/2024/photos-publicity",
      text: "publicity photos",
      icon: "camera",
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

export default function PhotosPerformance() {
  return (
    <>
      <PhotoGallery
        key="/2024/photos-performance"
        HeaderInfo={HeaderInfo}
        photos={photos}
        intro={CtaProps.intro}
        links={CtaProps.links}
      />
    </>
  );
}
