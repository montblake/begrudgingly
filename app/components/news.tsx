// import { Mail } from 'lucide-react';
// import CallToAction from '@/app/components/call_to_action';
import { Italianno } from "next/font/google";

const italianno = Italianno({
  subsets: ["latin"],
  weight: ["400"],
});

export default function News() {
  return (
    <section className=" p-2 w-full landscape:w-1/2 bg-white">
      <div className="bg-neutral-200 my-1 rounded-md flex justify-center w-full">
        <div
          className="w-full 
          flex flex-col p-0"
        >
          <div className="text-gray-700 w-full">
            {/* <h2 className="text-base sm:text-lg md:text-xl font-bold mb-0 sm:mb-1 md:mb-2 landscape:text-2xl landscape:mb-2 lg:text-2xl lg:mb-2">
              {" "}
              The News
            </h2> */}

            <p className="text-sm sm:text-base md:text-lg  landscape:text-lg ">
              <span
                className="italic
              "
              >
                Charles Dickens Begrudgingly...
              </span>{" "}
              originally charmed audiences during its Chicago debut at The
              Building Stage in December 2011 and 2012. This one-of-a-kind
              holiday production, which imagines a still-living Dickens forced
              to perform his famous{" "}
              <span className="italic">A Christmas Carol</span> for the 171st
              consecutive year, lovingly celebrates and skewers the famous
              author and our Christmas traditions. Now, ten years after the
              closing of The Building Stage, former Artistic Director Blake
              Montgomery revives his Jeff Award-winning solo performance for the
              2024 holiday season.
            </p>
          </div>

          <div className="w-full h-full flex flex-col justify-center items-center bg-neutral-700 rounded-lg p-8 text-gray-200 mt-4">
            <p className={`${italianno.className} text-xl lowercase`}>
              Performances Begin
            </p>
            <p className="text-lg sm:text-xl md:text-2xl tracking-tight uppercase text-center landscape:text-xl lg:text-xl">
              December 5
            </p>
            <p className={`${italianno.className} text-xl lowercase`}>
              through
            </p>
            <p className="text-lg sm:text-xl md:text-2xl tracking-tight uppercase text-center landscape:text-xl lg:text-xl">
              December 22
            </p>
            <p className={`${italianno.className} text-xl lowercase`}>at</p>
            <p className="text-lg sm:text-xl md:text-2xl tracking-tight uppercase text-center landscape:text-xl lg:text-xl">
              The Den Theatre
            </p>
            <p className="text-xs tracking-tight uppercase text-center">
              1331 N Milwaukee, Chicago
            </p>
            <div className="flex flex-col bg-amber-200/80 rounded-lg p-4 text-gray-800 my-6">
              Tickets Available Soon
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
