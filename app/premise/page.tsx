import Image from "next/image";

export default function Premise() {
  return (
    <main className="w-full h-fit py-8">
      <div className="w-full max-w-[1000px] mx-auto h-fit md:h-full flex flex-col md:flex-row justify-start items-start gap-4 px-4 md:px-8 py-2 rounded-2xl pb-16 overflow-hidden">
        <div className=" w-full h-full min-h-[360px] max-w-[360px] sm:max-w-[400px] md:max-w-[500px] mx-auto rounded-2xl overflow-hidden drop-shadow-lg border border-neutral-600">
          <Image
            src="/charles-full.jpg"
            alt="Charles Dickens"
            width={500}
            height={645}
            className="w-full h-auto"
          />
        </div>

        <div className="w-full max-w-[500px] mx-auto flex flex-col py-8 md:py-0 md:pl-4 md:pr-4  h-full md:overflow-y-scroll">
          <div className="md:mb-0 text-neutral-400 px-4 sm:px-4 md:px-0">
            <h1 className="text-3xl text-center md:text-left">
              An intimate, imaginative holiday treat filled with laughs, a dash
              of mischief, and a touch of holiday magic.
            </h1>
            <p className="text-sm mt-2 text-center md:text-left">
              Kerry Reid, <span className="italic">Chicago Reader</span>
            </p>
          </div>

          <div className="w-full h-4 flex justify-center xl:justify-start items-center my-8">
            <hr className="w-full border-neutral-400/80" />
          </div>

          <div className="w-full px-4 sm:px-4  md:px-0 pb-8 sm:pb-12 md:p-0 pt-4">
            <p className="text-neutral-400 text-sm">
              <span className="text-neutral-200 font-bold">The Premise.</span>{" "}
              In 1853, ten years after publishing{" "}
              <span className="italic">A Christmas Carol</span>, Charles Dickens
              began reading his work to live audiences, finding both success and
              purpose in these public performances. They were so successful that
              he continued until his death in 1870.
            </p>

            <p className="text-neutral-400 text-sm mt-4">
              But… what if that’s not exactly the whole story? What if reports
              of his death were, shall we say, exaggerated? And what if, for
              some mysterious and mystical reason, Dickens is bound to repeat
              his reading of <span className="italic">A Christmas Carol</span>{" "}
              every December—year after year, century after century?
            </p>

            <p className="text-neutral-400 text-sm mt-4">
              Now, over 200 years old and a bit weary of his own creation,
              Dickens finds himself once again booked to perform his overly
              familiar Christmas tale.
            </p>

            <p className="text-neutral-400 text-sm mt-4">
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
    </main>
  );
}
