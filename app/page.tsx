// import { ReactNode } from "react";
// import { Button } from "../components/ui/button";
// import SpecialHeadline from "../components/special_headline";
// import Image from "next/image";
import PictureReviewScramble from "../components/picture_review_scramble";
import Schedule from "@/components/schedule";
import FirstLeft from "@/components/first_left";
import FirstRight from "@/components/first_right";

// const MainImage = {
//   src: "/2025_dickens_web_transparency.png",
//   alt: "Charles Dickens Begrudgingly... Poster",
//   width: 800,
//   height: 800,
// };

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col justify-start items-start gap-0 max-w-[1000px] mx-auto">
      <div className="TOP_ROW w-full flex flex-col gap-8 justify-start items-center md:flex-row md:justify-center md:items-stretch md:gap-8 mx-auto px-4 pt-0 md:px-8 md:pt-4 md:pb-8">
        <FirstLeft />
        <FirstRight />
      </div>
      <div className="w-full h-auto flex flex-col gap-8 justify-start items-center px-4 pt-8 md:px-8">
        <PictureReviewScramble />
      </div>
      <div className="w-full h-auto flex flex-col gap-8 justify-start items-center px-0 pt-12 md:px-8 md:pb-8">
        <Schedule />
      </div>
    </main>
  );
}
