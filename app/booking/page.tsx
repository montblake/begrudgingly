import Image from "next/image";

export default function Contact() {
  return (
    <main className="w-full h-full py-8 bg-teal-950/0">
      <div className="w-full max-w-[1000px] mx-auto h-fit md:h-full flex flex-col md:flex-row justify-start items-start gap-4 px-4 py-0 md:px-8 rounded-2xl pb-0 overflow-hidden">
        <div className="w-full h-full flex flex-col justify-start items-center gap-2">
          <div className="w-full h-fit min-h-[360px] max-w-[320px] sm:max-w-[360px] md:max-w-[500px] mx-auto rounded-2xl overflow-hidden drop-shadow-lg border border-neutral-600">
            <Image
              src="/dickens_house_poster_2.jpg"
              alt="Contact Charles Dickens (image by Joe Mazza / brave lux inc.)"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </div>
          {/* <p className="text-xs text-neutral-400 italic drop-shadow-xl">
            Production image by Joe Mazza / brave lux inc.
          </p> */}
        </div>

        <div className="w-full max-w-[500px] mx-auto flex flex-col py-4 md:py-0 md:pl-4 md:pr-4  h-full md:overflow-y-scroll ">
          <div className="md:mb-0 text-neutral-400 px-4 sm:px-4 md:px-0">
            <h1 className="text-3xl text-center md:text-left drop-shadow-xl">
              Looking for a unique holiday offering for your audience?
            </h1>
            <h1 className="text-3xl text-center md:text-left drop-shadow-xl mt-4">
              Talk to Charles Dickens.
            </h1>
            {/* <p className="text-sm mt-2 text-center md:text-left">
              Charles Dickens, <span className="italic">Author</span>
            </p> */}
          </div>

          <div className="w-full h-4 flex justify-center md:justify-start items-center my-8">
            <hr className="w-full border-neutral-400/80" />
          </div>

          <div className="w-full pt-4 pb-8 px-4 sm:px-4  sm:pb-12 md:px-0 md:pb-8 md:pt-0">
            <p className="text-neutral-400 text-sm drop-shadow-xl">
              This one-of-a-kind holiday production, which imagines a
              still-living Dickens forced to perform his famous{" "}
              <span className="italic">A Christmas Carol</span> for the 171st
              consecutive year, lovingly celebrates and skewers the famous
              author and our Christmas traditions.
            </p>
            <p className="text-neutral-400 text-sm drop-shadow-xl mt-4">
              The show relies on creating an intimate experience for the
              audience. This is a core idea of the script as well as the
              performance. To this point, the show has only performed in small
              blackbox spaces to about 65 seats. It can certainly work for
              somewhat larger audiences. It is, however, an open question as to
              just how large before the show loses its sese of intimacy.
            </p>
            <p className="text-neutral-400 text-sm drop-shadow-xl mt-4">
              The physical space is flexible but important. Dickens not only
              moves throughout the house in the preshow, but also performs the
              bulk of the show alternating between the central aisle, at the
              foot of stage, and on a small stage platform. In blackbox spaces,
              the show seats the audience in rows on the floor with at least one
              central aisle. The progression of the performance is charted to
              these areas.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
