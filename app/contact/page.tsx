import SpecialPage from "@/components/special_page";

const ImageProps = {
  src: "/contact_dickens.jpg",
  alt: "Photo by Joe Mazza / brave lux inc.",
  width: 500,
  height: 655,
  border: true,
  caption: "Photo by Joe Mazza / brave lux inc.",
};

const HeadlineProps = {
  title:
    "Get in touch. I would love to hear from you. I am on pins and needles in anticipation of your inquiry. With kind regards and best wishes.",
  author: "Charles Dickens, author",
  publisher: "",
};

const TextElement = (
  <>
    <p className="">
      This one-of-a-kind holiday production, which imagines a still-living
      Dickens forced to perform his famous{" "}
      <span className="italic">A Christmas Carol</span> for the 171st
      consecutive year, lovingly celebrates and skewers the famous author and
      our Christmas traditions.
    </p>
    <p className="">
      <span className="italic">Charles Dickens Begrudgingly...</span> originally
      charmed audiences during its Chicago debut at The Building Stage in
      December 2011 and again in 2012. Now, ten years after the closing of The
      Building Stage, former Artistic Director Blake Montgomery revives his Jeff
      Award-winning solo performance for the 2024 holiday season.
    </p>
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
