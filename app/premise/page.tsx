"use client";

import Image from "next/image";
import Footer from "../components/footer";
import Nav from "../components/nav";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-between items-start bg-victorian-texture bg-cover bg-center bg-no-repeat bg-fixed relative mx-auto mt-10">
      <Nav />
      <div className="w-full h-full bg-black/85 absolute top-0 left-0 z-0" />
      <div className="max-w-[1200px] mx-auto w-full h-full lg:h-fit flex flex-col lg:flex-row lg:justify-between lg:items-start gap-0 lg:overflow-scroll lg:py-8 lg:px-16 lg:gap-8 pt-8 sm:pt-12 lg:pt-8 mix-blend-screen">
        <div className="relative w-full max-w-[600px] h-full mx-auto overflow-hidden lg:w-1/2 px-4  sm:px-12 lg:px-0 ">
          <div className="relative w-full mx-auto overflow-hidden lg:rounded-2xl h-[500px] w-[500px] sm:h-[600px] sm:w-[500px] lg:h-[700px] lg:w-[500px] rounded-2xl">
            <Image
              src="/charles-full.jpg"
              alt="Charles Dickens"
              width={800}
              height={800}
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-fullflex justify-center items-end z-40">
            <Image
              src="/just_title.png"
              alt="Dickens Show Title"
              width={800}
              height={400}
              className="relative z-50"
            />
          </div>
        </div>

        <div className="w-full flex flex-col bg-black lg:w-1/2 max-w-[600px] mx-auto mt-8 lg:mt-0 mb-12 lg:mb-0">
          <div className="lg:mb-0 text-neutral-400 px-4 sm:px-12 lg:px-0 relative z-40">
            <hr className="w-full border-neutral-400/80 mb-16 lg:mt-0" />
            <h1 className="text-3xl text-center">
              An intimate, imaginative holiday treat filled with laughs, a dash
              of mischief, and a touch of holiday magic.
            </h1>
            <hr className="w-full border-neutral-400/80 mt-16" />
          </div>

          <div className="w-full relative z-40 font-serif px-4 sm:px-12  lg:px-0 pb-8 sm:pb-12 lg:pb-4 pt-0 lg:p-0 text-neutral-200 mt-8">
            <p className=" text-neutral-400 text-base sm:text-lg md:text-xl lg:text-2xl lg:text-base mb-2 sm:mb-3 lg:mb-4  lg:mb-4">
              <span className="text-neutral-200 font-bold">The Premise.</span>{" "}
              In 1853, ten years after publishing{" "}
              <span className="italic">A Christmas Carol</span>, Charles Dickens
              began reading his work to live audiences, finding both success and
              purpose in these public performances. They were so successful that
              he continued until his death in 1870.
            </p>

            <p className="text-neutral-400 text-base sm:text-lg md:text-xl lg:text-2xl lg:text-base mb-2 sm:mb-3 lg:mb-4  lg:mb-4">
              But… what if that’s not exactly the whole story? What if reports
              of his death were, shall we say, exaggerated? And what if, for
              some mysterious and mystical reason, Dickens is bound to repeat
              his reading of <span className="italic">A Christmas Carol</span>{" "}
              every December—year after year, century after century?
            </p>

            <p className="text-neutral-400 text-base sm:text-lg md:text-xl lg:text-2xl lg:text-base mb-2 sm:mb-3 lg:mb-4  lg:mb-4">
              Now, over 200 years old and a bit weary of his own creation,
              Dickens finds himself once again booked to perform his overly
              familiar Christmas tale.
            </p>

            <p className="text-neutral-400 text-base sm:text-lg md:text-xl lg:text-2xl lg:text-base mb-2 sm:mb-3 lg:mb-4  lg:mb-4">
              Join the famous author as he tries to change his fate and avoid
              another performance of his most famous work. Perhaps Dickens might
              get his wish of simply hosting a holiday party. Or perhaps, the
              Spirits of Christmas just might guide him to rediscover the beauty
              in his work &mdash; and the joy of sharing it with an audience,
              one more time.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
