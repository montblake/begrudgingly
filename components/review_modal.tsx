import Image from "next/image";

export default function ReviewCard({
  review,
  indexNum,
  numReviews,
  close,
}: {
  review: any;
  indexNum: number;
  numReviews: number;
  close: () => void;
}) {
  return (
    <div className="h-full w-full py-0">
      <div className=" flex flex-col justify-start items-center gap-4 mb-0 w-full h-full px-0 bg-neutral-950/25 backdrop-blur-sm text-neutral-200 py-0 rounded-2xl border border-neutral-700 drop-shadow-lg">
        <div className="flex flex-col justify-center items-center gap-1 w-full text-neutral-300 px-8 py-4 bg-neutral-300 w-full h-fit border-b border-neutral-950 mb-0">
          <p className="text-xs text-neutral-400 font-bold uppercase relative z-1">
            {review.source}
          </p>

          {/* {review.link && (
            <a
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs hover:underline italic relative z-1 lowercase text-neutral-400"
            >
              Read Full Review
            </a>
          )} */}
        </div>
        <div
          className="absolute top-2 right-2 text-xs bg-red-950/0 hover:border-neutral-200 hover:text-neutral-200 active:bg-neutral-50 transition-all duration-300 text-neutral-600 border border-neutral-600 z-10 px-2 py-1 rounded-lg"
          onClick={close}
        >
          X
        </div>

        <h2
          className={`${
            indexNum === numReviews - 1
              ? "text-base"
              : "text-4xl sm:text-5xl md:text-6xl"
          } mb-0 text-center px-8 transition-opacity duration-300 max-w-[500px]`}
        >
          {review.top}
        </h2>

        {/* <Image
          src={"/red-dickens-1.jpg"}
          alt={"review image"}
          width={500}
          height={500}
          className="w-[100px]"
        /> */}
        <div className="">
          <p className="w-[80vw] px-8 flex flex-row flex-wrap bg-red-500">
            {review.excerpts.map((excerpt: string, idx: number) => (
              <span key={idx} className="">
                {excerpt}
              </span>
            ))}
          </p>
        </div>
        {/* {indexNum !== numReviews - 1 && (
          <Image
            src={"/decoration.png"}
            alt={"decoration"}
            width={20}
            height={20}
            className="opacity-100 w-8 h-auto rotate-180"
          />
        )} */}
        {/* </div> */}

        {/* <div className="w-full h-auto flex flex-col gap-2 justify-center items-center mt-4  mb-4"> */}
        {/* <hr className="w-1/3 h-px bg-neutral-300 border-0 rounded" /> */}
        {/* <Image
            src={"/diamond-3.png"}
            alt={"decoration"}
            width={20}
            height={20}
            className="opacity-75 w-4 h-auto"
          /> */}
        {/* </div> */}
        {/* <Image
          src={review.image}
          alt={"review image"}
          width={500}
          height={500}
          className="w-full h-auto border-t border-neutral-600 rounded-b-2xl mt-4"
        /> */}
        <div className="flex flex-col justify-center items-center gap-1 w-full px-8 py-4 bg-neutral-300 w-full h-auto border-t border-neutral-800 mt-12">
          {review.link && (
            <a
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs hover:underline italic relative z-1 lowercase text-neutral-700"
            >
              Read Full Review
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
