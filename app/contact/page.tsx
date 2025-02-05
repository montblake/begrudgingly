import SpecialPage from "@/components/special_page";
import { Mail } from "lucide-react";

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

const TextElement = (
  <div className="w-[90%] mx-auto md:mx-0 mt-4 flex flex-col items-center bg-gradient-to-br from-neutral-200/75 to-neutral-500/100 py-4 px-8 rounded-xl gap-2">
    <p className="text-xs text-neutral-950">
      Inquiries for Blake Montgomery, or Charles Dickens, may be directed to:
    </p>
    <div className="my-2 w-full">
      <a
        href="mailto:dickens@dickensagain.com"
        className="bg-neutral-900 border border-neutral-500 text-neutral-400 text-xs px-4 py-2 rounded-xl hover:text-neutral-300 transition-all duration-300 ease-in-out active:scale-95 w-full flex items-center justify-center gap-2"
      >
        <Mail className="w-4 h-4 text-neutral-400" />
        <span className="hover:underline">dickens@dickensagain.com</span>
      </a>
    </div>
  </div>
);

export default function Contact() {
  return (
    <SpecialPage
      ImageProps={ImageProps}
      HeadlineProps={HeadlineProps}
      TextElement={TextElement}
    />
  );
}
