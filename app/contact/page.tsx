import SpecialPage from "@/components/special_page";

const ImageProps = {
  src: "/dickens_contact.jpg",
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

const TextElement = <></>;

const CtaContent = {
  intro:
    "Inquiries for Blake Montgomery, or Charles Dickens, may be directed to:",
  links: [
    {
      href: "mailto:dickens@dickensagain.com",
      text: "dickens@dickensagain.com",
      internal: false,
      icon: "mail",
    },
  ],
};

export default function Contact() {
  return (
    <SpecialPage
      ImageProps={ImageProps}
      HeadlineProps={HeadlineProps}
      TextElement={TextElement}
      CtaContent={CtaContent}
    />
  );
}
