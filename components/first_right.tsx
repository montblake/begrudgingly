import SpecialHeadline from "./special_headline";
import FirstRightMultitext from "./first_right_multitext";

const Headline = {
  title:
    "Montgomery's smart, heartfelt reinvention proves that you don't need fake snow and flying ghosts to make the tale resonate.",
  author: "Kerry Reid",
  publisher: "Chicago Reader",
};

export default function FirstRight() {
  return (
    <div className="w-full px-2 md:px-0 mx-auto">
      <div className="flex flex-col justify-start items-center md:items-start gap-0 w-full  px-8 bg-neutral-900/30 backdrop-blur px-4 py-16 rounded-xl border border-neutral-600 h-full">
        <SpecialHeadline {...Headline} />
        <hr className="w-full border-neutral-600 mt-36 mb-4" />

        <FirstRightMultitext />
      </div>
    </div>
  );
}
