import Image from "next/image";
import BuyButton from "./buy_button";
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
      <div className="text-gray-200 w-full mt-4 md:mt-8 lg:w-2/3 lg:mt-0 lg:w-2/3 lg:mt-0 p-4">
        <h2 className="text-lg sm:text-lg md:text-xl font-bold mb-2 sm:mb-1 md:mb-2 lg:mb-2 lg:text-2xl lg:mb-2 lg:text-2xl">
          {" "}
          Explore the Show{" "}
        </h2>
        <p className=" text-sm sm:text-base md:text-lg mb-2 sm:mb-3 lg:text-lg lg:mb-4 lg:text-lg lg:mb-4">
          In 1853, ten years after publishing A Christmas Carol, Charles Dickens
          began reading his work to live audiences, finding both success and
          purpose in these public performances. They were so successful that he
          continued until his death in 1870.
        </p>

        <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 lg:text-lg lg:mb-4 lg:text-lg lg:mb-4">
          But… what if that’s not exactly the whole story? What if reports of
          his death were, shall we say, exaggerated? And what if, for some
          mysterious and mystical reason, Dickens is bound to repeat his reading
          of A Christmas Carol every December—year after year, century after
          century?
        </p>

        <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 lg:text-lg lg:mb-4 lg:text-lg lg:mb-4">
          Now, over 200 years old and a bit weary of his own creation, Dickens
          finds himself once again booked to perform his overly familiar
          Christmas tale. This year, the venue? Some place called The Den
          Theatre. In the city of Chicago. America.
        </p>

        <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 lg:text-lg lg:mb-4 lg:text-lg lg:mb-4">
          Join the famous author as he tries to change his fate and avoid
          another performance of his most famous work. Perhaps Dickens might get
          his wish of simply hosting a holiday party. Or perhaps, the Spirits of
          Christmas may just guide him to rediscover the beauty in his work—and
          the joy of sharing it with an audience, one more time.
        </p>
        <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 lg:text-lg lg:mb-4 lg:text-lg lg:mb-4">
          Filled with laughs, a dash of mischief, and maybe even a touch of
          holiday magic, Charles Dickens Begrudgingly is an intimate,
          imaginative holiday treat.
        </p>
      </div>
      <div className="w-full lg:w-1/2 my-4">
        <BuyButton />
      </div>
    </div>
  );
}
