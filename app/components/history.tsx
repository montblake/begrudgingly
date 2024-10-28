import Image from "next/image";

export default function History() {
  return (
    <div className="flex flex-col items-center justify-center pb-8 sm:p-8 sm:pt-12 md:p-16 md:pt-16  lg:w-[80%] lg:flex-row lg:items-end lg:gap-8 lg:py-24 lg:px-0 lg:pb-36 lg:w-[80%] lg:flex-row lg:items-end lg:gap-8 lg:py-24 lg:px-0 lg:pb-36 pt-10">
      <div className="w-full lg:w-1/2 bg-gray-50 lg:rounded-2xl lg:overflow-hidden py-8">
        <Image
          src="/charles-full.jpg"
          width="1400"
          height="1000"
          alt="Dickens reading..."
          className="mix-blend-multiply"
        />
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <div className="text-gray-200 w-full mt-4 md:mt-8 lg:w-2/3 lg:mt-0 lg:w-2/3 lg:mt-0 ">
          <h2 className="text-base sm:text-lg md:text-xl font-bold mb-0 sm:mb-1 md:mb-2 lg:mb-2 lg:text-2xl lg:mb-2 lg:text-2xl">
            {" "}
            The History{" "}
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 lg:text-lg lg:mb-4 lg:text-lg lg:mb-4">
            {" "}
            In 1853, ten years after having dashed off his surprisingly
            successful holiday story,{" "}
            <span className="italic"> A Christmas Carol</span>, Charles Dickens
            gave his first public reading of the work. The effort was so well
            received, as well as providing much needed cash, that Dickens
            continued to perform these celebrated readings for the rest of his
            life.
          </p>
        </div>
        <div className="text-gray-200 w-full mt-4 md:mt-8 lg:w-2/3 lg:mt-0 lg:w-2/3 lg:mt-0">
          <h2 className="text-base sm:text-lg md:text-xl font-bold mb-0 sm:mb-1 md:mb-2 lg:text-2xl lg:mb-2 lg:text-2xl lg:mb-2">
            The Premise
          </h2>
          <div>
            <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 lg:text-lg lg:mb-4 lg:text-lg lg:mb-4">
              Never one to let the facts get in the way of a good story, creator
              Blake Montgomery conflates the enduring popularity of the
              ubiquitous holiday <span className="italic">Christmas Carol</span>{" "}
              with Dickens&apos; personal readings and imagines that reports of
              the author&apos;s death were greatly exaggerated.
            </p>

            <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 lg:text-lg lg:mb-4 lg:text-lg lg:mb-4">
              And so, year after year, each and every December, not only do
              theaters around the globe produce adaptations of his famous book
              but Dickens himself is brought back to the stage to continue his
              tradition of solo readings ad infinitum.
            </p>
          </div>
          {/* <p>Whether this miracle is the result of the magic of Christmas, the power of the author&apos;s popularity, or a freak accident resulting from the interaction between an over-eager booking agent and some hitherto unappreciated arcana of contract law, it is impossible to state for certain.</p> */}
        </div>

        <div className="text-gray-200 w-full mt-4 md:mt-8 lg:w-2/3 lg:mt-0 lg:w-2/3 lg:mt-0">
          <h2 className="text-base sm:text-lg md:text-xl font-bold mb-0 sm:mb-1 md:mb-2 lg:text-2xl lg:mb-2 lg:text-2xl lg:mb-2">
            The Play
          </h2>
          <div>
            <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 lg:text-lg lg:mb-4 lg:text-lg lg:mb-4">
              Now over 200 years old, Dickens has reached a breaking point and
              unbeknownst to theater management, he will not be performing his
              show this evening. Instead, he has planned something entirely new,
              something he is calling, &ldquo;Charles Dicken&apos;s First Annual
              Holiday Party.&rdquo;
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 lg:text-lg lg:mb-4 lg:text-lg lg:mb-4">
              {" "}
              Perhaps Dickens will get his wish.
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 lg:text-lg lg:mb-4 lg:text-lg lg:mb-4">
              Or, perhaps, the Spirits of Christmas might intervene and force
              him to perform his worn-out tale once again, in the course of
              which, due to some highly irregular and ridiculous occurrence, he
              might see his work in a new light, rediscovering its beauty and
              his passion while, along the way, forging the kind of intimate,
              joyful connection with the audience he had hoped would come from
              hosting a party in the first place. Perhaps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
