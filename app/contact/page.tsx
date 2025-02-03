import SpecialPage from "@/components/special_page";
import { Mail } from "lucide-react";

const ImageProps = {
  src: "/dickens_contact.jpg",
  alt: "Photo by Joe Mazza / brave lux inc.",
  width: 500,
  height: 655,
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
  <>
    {/* <p className="">
      This one-of-a-kind holiday production, which imagines a still-living
      Dickens forced to perform his famous{" "}
      <span className="italic">A Christmas Carol</span> for the 171st
      consecutive year, lovingly celebrates and skewers the famous author and
      our Christmas traditions.
    </p> */}
    {/* <p className="">
      <span className="italic">Charles Dickens Begrudgingly...</span> originally
      charmed audiences during its Chicago debut at The Building Stage in
      December 2011 and again in 2012. Now, ten years after the closing of The
      Building Stage, former Artistic Director Blake Montgomery revives his Jeff
      Award-winning solo performance for the 2024 holiday season.
    </p> */}
    <div className="w-[90%] mx-auto md:mx-0 mt-4 flex flex-col items-center bg-gradient-to-br from-neutral-200/75 to-neutral-500/100 py-4 px-8 rounded-xl gap-2">
      {/* <h2 className="text-neutral-950 text-sm font-bold">Curious?</h2> */}
      <p className="text-xs text-neutral-950">
        Inquiries for Blake Montgomery, or Charles Dickens, may be directed to:
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
  </>
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
