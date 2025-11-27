import SpecialPage from "@/components/special_page";
import { Metadata } from "next";
import CTAElement from "@/components/cta_element";

const ImageProps = {
  src: "/dickens_contact.avif",
  alt: "Photo by Joe Mazza / brave lux inc.",
  width: 500,
  height: 750,
  border: true,
  caption: "Photo by Joe Mazza / brave lux inc.",
  rel_x: 0,
  rel_y: 0,
};

const HeadlineProps = {
  title: "",
  author: "",
  publisher: "",
};

const CtaProps = {
  intro:
    "To contact Blake Montgomery, or Charles Dickens, kindly direct your electronic correspondence to the following address:",
  links: [
    {
      href: "mailto:dickens@dickensagain.com",
      text: "dickens@dickensagain.com",
      internal: false,
      icon: "mail",
    },
  ],
};

const TextElement = (
  <>
    <p>
      <span className="font-bold text-neutral-200">Blake Montgomery</span> is
      the creator and performer of{" "}
      <span className="italic">
        Charles Dickens Begrudgingly Performs A Christmas Carol Again
      </span>
      , presented by CLOWNSHOW. For inquiries about the production, press
      requests, booking information, or general questions about the show, please
      use the contact information below.
    </p>
    <p>
      Whether you&apos;re interested in the 2025 production at Theater Wit in
      Chicago, have questions about the show&apos;s history and development, or
      would like to reach out regarding future collaborations, Blake welcomes
      your correspondence.
    </p>
    <CTAElement intro={CtaProps.intro} links={CtaProps.links} />
    <div className="bg-gradient-to-br from-amber-200/30 via-amber-300/20 to-amber-400/30 backdrop-blur-sm border border-amber-400/40 rounded-xl p-6 md:p-8 mt-6">
      <h1 className="text-neutral-200 font-bold text-lg mb-3">
        Future Season Partnerships
      </h1>
      <p className="text-neutral-300 text-base leading-relaxed">
        We&apos;d love to partner up in future seasons with organizations
        capable of connecting Dickens to a new audience. Ideally, we are looking
        for a run lasting the full holiday season. Whether you&apos;re based in
        Chicago or beyond, if you&apos;re interested in bringing{" "}
        <span className="italic">
          Charles Dickens Begrudgingly Performs A Christmas Carol Again
        </span>{" "}
        to your community, please reach out to discuss booking opportunities.
      </p>
    </div>
  </>
);

type MultiText = {
  title: string;
  text: string;
}[];

const MultiText: MultiText = [];

export const metadata: Metadata = {
  title: "Charles Dickens Begrudgingly — Contact Information",
  description: "Contact information for Blake Montgomery and Charles Dickens",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <SpecialPage
      key="/contact"
      ImageProps={ImageProps}
      HeadlineProps={HeadlineProps}
      TextElement={TextElement}
      // CtaProps={CtaProps}
      MultiText={MultiText}
    />
  );
}
