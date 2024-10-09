// import { Mail } from 'lucide-react';
// import CallToAction from '@/app/components/call_to_action';
import { Italianno } from "next/font/google";

const italianno = Italianno({
  subsets: ["latin"],
  weight: ["400"],
});

export default function News() {
  return (
    <section className=" p-2 w-full landscape:w-1/2">
      <div className="bg-neutral-200 my-1 rounded-md flex justify-center w-full">
        <div
          className="w-full 
          flex flex-col p-4 pb-8"
        >
          <div className="text-neutral-700 w-full mt-4">
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-0 sm:mb-1 md:mb-2 landscape:text-2xl landscape:mb-2 lg:text-2xl lg:mb-2">
              {" "}
              The News
            </h2>

            <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 landscape:text-lg landscape:mb-4 lg:text-lg lg:mb-4">
              <span className="uppercase">Charles Dickens Begrudgingly</span>{" "}
              charmed audiences when first produced in Chicago at the Building
              Stage in December of 2011 and 2012. This unique holiday show,
              which imagines a still-living Dickens forced to perform his famous{" "}
              <span className="uppercase">Christmas Carol</span> for the 171st
              year in a row, lovingly celebrates and skewers the famous author
              and our Christmas traditions.
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 landscape:text-lg landscape:mb-4 lg:text-lg lg:mb-4">
              Now, ten years after the closing the theater, former Building
              Stage Artistic Director Blake Montgomery brings his Jeff
              Award-winning show back to the Chicago stage for the 2024 holiday
              season.
            </p>
          </div>

          <div className="w-full h-full flex flex-col justify-center items-center bg-neutral-700 rounded-lg p-8 text-neutral-200 mt-4">
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
            <div className="flex flex-col bg-amber-200/80 rounded-lg p-4 text-neutral-800 my-6">
              Tickets Available Soon
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
