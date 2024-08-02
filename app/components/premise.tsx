import Image from 'next/image';

export default function Premise() {
  return (
    <section className="bg-neutral-900 px-2">
      <div className="bg-neutral-200 rounded-md flex justify-center">
        <div className="landscape:w-[80%] flex flex-col p-4 pb-8 sm:p-16 sm:pt-12 md:p-24 md:pt-16 lg:p-48 lg:pt-36 landscape:flex-row-reverse landscape:items-end landscape:gap-8 landscape:py-24 landscape:px-0 landscape:pb-36">
          <div className="w-full h-[360px] sm:h-[540px] md:h-[640px] lg:h-[680px] overflow-hidden rounded-lg landscape:p-0 border border-neutral-700 landscape:mb-0 landscape:w-1/3 landscape:border-none landscape:pt-0 flex justify-end items-start landscape:items-end landscape:h-fit">
            <Image
              src="/dickens_color2.jpg"
              width="1400"
              height="1000"
              alt="Dickens reading..."
              className="relative top-0"
            />
          </div>
          <div className="text-neutral-700 w-full landscape:w-2/3 mt-4 md:mt-8 landscape:mt-0 ">
            <h2 className="text-base landscape:text-xl sm:text-lg md:text-xl lg:text-2xl font-bold mb-0 landscape:mb-2 sm:mb-1 md:mb-2 lg:mb-2">The Premise</h2>
            <div>
              <p className="text-sm landscape:text-lg sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 landscape:mb-4">Never one to let the facts get in the way of a good story, creator Blake Montgomery conflates the enduring popularity of the ubiquitous holiday <span className="italic">Christmas Carol</span> with Dickens&apos; personal readings and imagines that reports of the author&apos;s death were greatly exaggerated.</p>

              <p className="text-sm landscape:text-lg sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 landscape:mb-4">And so, year after year, each and every December, not only do theaters around the globe produce adaptations of his famous book but Dickens himself is brought back to the stage to continue his tradition of solo readings ad infinitum.</p>

            </div>
            {/* <p>Whether this miracle is the result of the magic of Christmas, the power of the author&apos;s popularity, or a freak accident resulting from the interaction between an over-eager booking agent and some hitherto unappreciated arcana of contract law, it is impossible to state for certain.</p> */}


          </div>



        </div>



      </div>
    </section >
  );
}