import Image from "next/image";

export default function Production() {
  return (
    <main className="w-full h-full min-h-[90vh] mt-28 pb-0 overflow-y-scroll md:overflow-y-hidden flex flex-col justify-center items-center">
      <div className="w-full max-w-[1000px] mx-auto h-fit md:h-full flex flex-col md:flex-row justify-start items-start gap-4 px-4 py-4 md:px-8 rounded-2xl pb-16 overflow-hidden bg-neutral-950/40">
        <div className="w-full h-full">
          <div className="w-full h-full min-h-[360px] max-w-[320px] sm:max-w-[360px] md:max-w-[500px] mx-auto rounded-2xl overflow-hidden drop-shadow-lg">
            <Image
              src="/2024_production_poster_web.png"
              alt="Charles Dickens Begrudgingly... 2024 Poster Image"
              width={600}
              height={800}
              className="w-full h-auto"
            />
          </div>
          {/* <p className="text-xs text-neutral-400 italic drop-shadow-xl">
            Production Image by Joe Mazza / brave lux inc.
          </p> */}
        </div>
        <div className="w-full max-w-[500px] mx-auto flex flex-col py-4 md:py-4 md:pl-4 md:pr-4  h-full md:overflow-y-scroll ">
          <div className="md:mb-0 text-neutral-400 px-4 sm:px-4 md:px-0">
            <h1 className="text-3xl text-center md:text-left drop-shadow-xl">
              A remarkably artful riff on Dickens&apos; original, written and
              performed stunningly well by Blake Montgomery
            </h1>
            <p className="text-sm mt-2 text-center md:text-left">
              Bill Esler, <span className="italic">Buzz Center Stage</span>
            </p>
          </div>
          {/* <Image
            src="/production-title.png"
            alt="Charles Dickens Begrudgingly... at The Den Theatre, Chicago, December 2024"
            width={1000}
            height={1000}
            className="w-full h-auto bg-black/25"
          /> */}

          <div className="w-full h-4 flex justify-center md:justify-start items-center my-8">
            <hr className="w-full border-neutral-600" />
            {/* <Image
              src={"/diamond-3.png"}
              alt={"decoration"}
              width={20}
              height={20}
              className="opacity-75 w-8 h-auto"
            /> */}
          </div>

          <div className="w-full pt-4 pb-8 px-4 sm:px-4  sm:pb-12 md:px-0 md:pb-8 md:pt-0">
            <p className="text-neutral-400 text-sm drop-shadow-xl">
              In 2024, Blake Montgomery brought CHARLES DICKENS BEGRUDGINGLY...
              back to the stage with a new production company, CLOWNSHOW.
            </p>
            <p className="text-neutral-400 text-sm drop-shadow-xl mt-4">
              Performed at The Den Theatre in Chicago from December 5th - 22nd,
              the production was hailed as a &ldquo;one-man yuletide tour de
              force&rdquo;, &ldquo;wonderfully off-the-cuff and intimate&rdquo;,
              &ldquo;charming and sly&rdquo;, and &ldquo;a work and performance
              not to be missed.&rdquo;
            </p>
            <p className="text-neutral-400 text-sm drop-shadow-xl mt-4">
              Curious? Meet the creative team and production staff in the{" "}
              <a href="/production/program" className="text-neutral-200">
                digital program
              </a>
              . See the show through the eyes of Joe Mazza in the{" "}
              <a
                href="/production/photos_publicity"
                className="text-neutral-200"
              >
                publicity photos
              </a>
              . Experience the first preview with Michael Brosilow&apos;s{" "}
              <a
                href="/production/photos_performance"
                className="text-neutral-200"
              >
                production photos
              </a>
              . Explore the show through the eyes of the critics in the{" "}
              <a href="/production/reviews" className="text-neutral-200">
                press reviews
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
