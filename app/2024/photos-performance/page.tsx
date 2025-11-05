import PhotoGallery from "@/components/photo_gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charles Dickens Begrudgingly — 2024 Performance Photos",
  description:
    "Performance photos of Charles Dickens Begrudgingly Performs A CHRISTMAS CAROL Again, by Michael Brosilow.",
  alternates: { canonical: "/2024/photos-performance/" },
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
      href: "/2024/photos-publicity/",
      text: "publicity photos",
      icon: "camera",
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
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-8 md:px-2 py-8 -mt-8">
        <div className="bg-neutral-200/50 backdrop-blur-sm border border-neutral-700/30 rounded-xl p-6 md:p-12">
          <p className="text-neutral-300 text-base md:text-base leading-relaxed">
            These performance photos capture{" "}
            <span className="font-semibold">
              Charles Dickens Begrudgingly Performs A Christmas Carol Again
            </span>
            , created and performed by Blake Montgomery for the 2024 production
            at The Den Theatre in Chicago. Photographed by Michael Brosilow
            during the live first preview performance, these images showcase
            Montgomery&apos;s portrayal of Charles Dickens in this one-man
            theatrical adaptation of the classic Christmas tale. Brosilow&apos;s
            unmatched skill at capturing the nuance and detail of a show in
            real-time is evident throughout these photographs, which capture the
            production&apos;s perfect balance of dramatic storytelling and
            playful humor, showcasing Montgomery&apos;s intimate, off-the-cuff
            performance style that makes the familiar story feel fresh and
            engaging. The CLOWNSHOW production ran from December 5-22, 2024, and
            received critical acclaim from Chicago theater critics.
          </p>
        </div>
        <div className="w-full h-24 md:h-36 bg-gradient-to-b from-neutral-950/0 to-neutral-950/100 md:bg-none" />
      </div>
    </>
  );
}
