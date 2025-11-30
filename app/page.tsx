import FirstLeft from "@/components/first_left";
import FirstRight from "@/components/first_right";
import PictureReviewScramble from "@/components/picture_review_scramble";
import Schedule from "@/components/schedule";
import { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Charles Dickens Begrudgingly Performs A CHRISTMAS CAROL Again — 2025",
  description:
    "Home page of the 2025 production of Charles Dickens Begrudgingly Performs A CHRISTMAS CAROL Again, by Blake Montgomery at Theater Wit, 1229 W. Belmont, Chicago, IL. December 4-28, 2025. Join our mailing list for updates and special ticket offers! Purchase tickets at theaterwit.org",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <main className="w-full flex flex-col justify-start items-start gap-0 max-w-[1000px] mx-auto overflow-y-scroll">
        <div className="TOP_ROW w-full flex flex-col gap-8 justify-start items-center md:flex-row md:justify-center md:items-stretch md:gap-8 mx-auto px-4 pt-0 md:px-8 md:pt-4 md:pb-8">
          <FirstLeft />
          <FirstRight />
        </div>
        <div className="w-full h-auto flex flex-col gap-8 justify-start items-center px-4 pt-8 md:px-8">
          <PictureReviewScramble />
        </div>
        <div className="w-full h-auto flex flex-col gap-8 justify-start items-center mt-8 px-4 pt-0 md:px-8 mb-8 md:mb-12">
          <Schedule />
        </div>
        <Footer />
      </main>
    </>
  );
}
