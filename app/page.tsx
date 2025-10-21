import PictureReviewScramble from "../components/picture_review_scramble";
import Schedule from "@/components/schedule";
import FirstLeft from "@/components/first_left";
import FirstRight from "@/components/first_right";
import { Mail } from "lucide-react";

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
      <div className="w-full h-auto flex flex-col gap-8 justify-start items-center mt-8 px-0 pt-0 md:px-8 mb-0 md:mb-8">
        <Schedule />
      </div>

      <div className="w-full flex flex-col items-center justify-center mb-4md:mb-8">
        <h2 className="text-xs md:text-xl font-bold text-center text-neutral-300 mb-4 mt-8 md:mt-0">
          Join our mailing list for updates and special ticket offers!
        </h2>
        <a
          href="http://eepurl.com/i2jCO2"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center mb-8"
        >
          <div className="w-16 h-16 md:w-36 md:h-36 p-4 rounded-full flex flex-col items-center justify-center gap-1 bg-gradient-to-b from-amber-400/80 via-amber-500/80 to-amber-600/80 border-2 border-black hover:scale-105 transition-all duration-300 active:border-neutral-300 text-neutral-950 active:text-neutral-300">
            <Mail size={36} />
            <span className="hidden md:block text-sm font-bold uppercase">
              Subscribe
            </span>
          </div>
        </a>
      </div>
    </main>
  );
}
