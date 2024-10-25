import Image from "next/image";

export default function Artist() {
  return (
    <section className=" bg-neutral-900 px-2 ">
      <div className="bg-neutral-200 my-1 rounded-md flex justify-center">
        <div
          className=" 
          flex flex-col p-4 pb-8 sm:p-16 sm:pt-12 md:p-24 md:pt-16 
          lg:w-[80%] lg:flex-row-reverse lg:items-end lg:gap-8 lg:py-24 lg:px-0 lg:pb-36
          lg:w-[80%] lg:flex-row-reverse lg:items-end lg:gap-8 lg:py-24 lg:px-0 lg:pb-36"
        >
          <div
            className=" w-full h-[320px] sm:h-[540px] md:h-[640px] overflow-hidden rounded-lg  border border-neutral-700 flex justify-end items-start 
            lg:p-0 lg:mb-0 lg:w-1/3 lg:border-none lg:pt-0 lg:items-end lg:h-fit
            lg:p-0 lg:mb-0 lg:w-1/3 lg:border-none lg:pt-0 lg:items-end lg:h-fit"
          >
            <Image
              src="/blake_headshot.jpg"
              width="1400"
              height="1000"
              alt="Dickens reading..."
              className="relative -top-[32px] sm:top-0 lg:top-0"
            />
          </div>
          <div className="text-gray-700 w-full mt-4 md:mt-8 lg:w-2/3 lg:mt-0 lg:w-2/3 lg:mt-0">
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-0 sm:mb-1 md:mb-2 lg:text-2xl lg:mb-2 lg:text-2xl lg:mb-2">
              The Artist
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 lg:text-lg lg:mb-4 lg:text-lg lg:mb-4">
              Blake Montgomery began his career in Chicago directing ensemble
              clown theater and performing with a variety of non-naturalistic
              Chicago theaters, most notably Redmoon with whom he collaborated
              for over a decade. In 2005, Montgomery founded The Building Stage,
              a theater company and performance space, where he served as
              Artistic Director until its closing in 2013. The company was known
              for its ensemble-devised, director-driven creations, particularly
              in literary adaptations like their Jeff Award-winning{" "}
              <span className="italic">Moby-Dick</span> and the poetic,
              clown-inspired <span className="italic">Dawn, Quixote</span>.
              Montgomery&apos;s artistic approach draws on his training at the
              École Jacques Lecoq, the Dell&apos;Arte School of Physical
              Theater, and Middlebury College. A member of Actors&apos; Equity,
              his performances in Chicago include work with The House Theatre,
              Hypocrites, Remy Bumppo, Court Theatre, Chicago Shakespeare,
              Steppenwolf, and Writers Theatre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
