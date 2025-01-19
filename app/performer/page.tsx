"use client";

import Image from "next/image";
import Footer from "../components/footer";
import Nav from "../components/nav";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-between items-start bg-victorian-texture bg-cover bg-center bg-no-repeat relative mx-auto mt-10 lg:mt-10">
      <Nav />
      <div className="w-full h-full bg-black/85 absolute top-0 left-0 z-0" />
      <div className="max-w-[1200px] mx-auto w-full h-full lg:h-fit flex flex-col lg:flex-row lg:justify-between lg:items-start gap-0 lg:overflow-scroll lg:px-16 lg:gap-8 pt-8 sm:pt-12 lg:pt-8 lg:pb-8 mix-blend-screen">
        <div className="relative w-full max-w-[600px] h-full mx-auto overflow-hidden lg:w-1/2 px-4  sm:px-12 lg:px-0 ">
          <div className="relative w-full mx-auto overflow-hidden lg:rounded-2xl  h-[auto] max-h-[50vh] lg:max-h-[66vh] w-[500px] sm:w-[500px] lg:w-[500px] rounded-2xl flex justify-center items-center">
            <Image
              src="/dickens_layers/layered_blake.png"
              alt="Blake Montgomery Headshot"
              width={800}
              height={800}
              className="w-full h-full"
            />
          </div>

          <div className="absolute bottom-0 left-0 w-full h-fullflex justify-center items-end">
            <Image
              src="/just_title.png"
              alt="Dickens Show Title"
              width={800}
              height={400}
            />
          </div>
        </div>

        <div className="w-full flex flex-col bg-black lg:w-1/2 max-w-[600px] mx-auto mt-8 lg:mt-0 mb-12 lg:mb-0">
          <div className="lg:mb-0 text-gray-400 px-4 sm:px-12 lg:px-0 relative z-40">
            {/* <hr className="w-full border-gray-400/80 mb-16 lg:mt-0" /> */}

            <h1 className="text-3xl text-center">
              &ldquo;Top-notch performance! Just what we needed to lift our
              spirits and put the holiday season in perspective.&rdquo;
            </h1>
            <hr className="w-full border-gray-400/80 mt-8" />
          </div>

          <div className="w-full relative z-40 font-serif px-4 sm:px-12  lg:px-0 pb-8 sm:pb-12 lg:pb-12 pt-4 lg:p-0 mt-8">
            <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl lg:text-base">
              <span className="font-bold text-gray-200">Blake Montgomery</span>{" "}
              began his career in Chicago directing ensemble clown theater and
              performing with a variety of non-naturalistic Chicago theaters,
              most notably Redmoon with whom he collaborated for more than a
              decade. In 2005, Montgomery founded The Building Stage, a theater
              company and performance space, where he served as Artistic
              Director until its closing in 2013. The company was known for its
              ensemble-devised, director-driven creations, particularly in
              literary adaptations like their Jeff Award-winning{" "}
              <span className="italic">Moby-Dick</span> and the poetic,
              clown-inspired <span className="italic">Dawn, Quixote</span>.
              Montgomery&apos;s artistic approach draws on his training at the
              École Jacques Lecoq, the Dell&apos;Arte School of Physical
              Theater, and Middlebury College. A member of Actors&apos; Equity,
              his performances in Chicago include work with The House Theatre,
              The Hypocrites, Remy Bumppo Theatre Company, Court Theatre,
              Chicago Shakespeare, Steppenwolf, and Writers Theatre.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
