import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full mt-20 pb-0 relative overflow-y-scroll md:overflow-y-hidden">
      <div className="w-full max-w-[1000px] mx-auto h-fit md:h-full flex flex-col md:flex-row justify-start items-start gap-4 px-4 md:px-8 py-2 rounded-2xl pb-16 overflow-hidden">
        <div className="w-full h-full min-h-[360px] max-w-[500px] mx-auto rounded-2xl overflow-hidden drop-shadow-lg">
          <Image
            src="/new_poster_trimmed.png"
            alt="Charles Dickens Begrudgingly... Poster"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>

        <div className="w-full max-w-[500px] mx-auto flex flex-col py-4 md:py-0 md:pl-0 md:pr-8  h-full md:overflow-y-scroll">
          <div className="md:mb-0 text-neutral-400 px-4 sm:px-4 md:px-0">
            <h1 className="text-3xl text-center md:text-left">
              Montgomery&apos;s smart, heartfelt reinvention proves that you
              don&apos;t need fake snow and flying ghosts to make the tale
              resonate.
            </h1>
            <p className="text-sm mt-2 text-center md:text-left">
              Kerry Reid, <span className="italic">Chicago Reader</span>
            </p>
          </div>

          <div className="w-full h-4 flex justify-center md:justify-start items-center my-8">
            <hr className="w-full border-neutral-400/80" />
            {/* <Image
              src={"/diamond-3.png"}
              alt={"decoration"}
              width={20}
              height={20}
              className="opacity-75 w-8 h-auto"
            /> */}
          </div>

          <div className="w-full px-4 sm:px-4  md:px-0 pb-8 sm:pb-12 md:p-0 pt-4">
            <p className="text-neutral-400 text-sm">
              This one-of-a-kind holiday production, which imagines a
              still-living Dickens forced to perform his famous{" "}
              <span className="italic">A Christmas Carol</span> for the 171st
              consecutive year, lovingly celebrates and skewers the famous
              author and our Christmas traditions.
            </p>
            <p className="text-neutral-400 text-sm mt-4">
              <span className="italic">Charles Dickens Begrudgingly...</span>{" "}
              originally charmed audiences during its Chicago debut at The
              Building Stage in December 2011 and again in 2012. Now, ten years
              after the closing of The Building Stage, former Artistic Director
              Blake Montgomery revives his Jeff Award-winning solo performance
              for the 2024 holiday season.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
