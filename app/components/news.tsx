// import { Mail } from 'lucide-react';
import CallToAction from '@/app/components/call_to_action';

export default function News() {
  return (
    <section className="bg-neutral-900 p-2">

      <div className="w-full flex justify-center bg-neutral-200 rounded-md border border-neutral-600">

        < div className="landscape:w-2/3 text-neutral-700 flex flex-col p-4 pb-8 sm:p-16 sm:pt-12 md:p-24 md:pt-16 lg:p-48 lg:pt-36   rounded-md landscape:my-8 landscape:pt-16 landscape:pb-24 " >
          <h2 className="text-lg landscape:text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold mb-0 landscape:mb-2 sm:mb-1 md:mb-2 lg:mb-2" > The News</h2>

          <p className="text-sm landscape:text-lg sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3 landscape:mb-4">
            <span className="uppercase text-sm sm:text-base md:text-lg lg:text-lg">Charles Dickens Begrudgingly</span> charmed audiences when first produced in Chicago at the Building Stage in December of 2011 and 2012.
            This unique holiday show, which imagines a still-living Dickens forced to perform his famous <span className="uppercase text-sm sm:text-base md:text-lg lg:text-lg">Christmas Carol</span> for the 171st year in a row, lovingly celebrates and skewers the famous author and our Christmas traditions.</p>
          <p className="text-sm landscape:text-lg sm:text-lg md:text-xl lg:text-2xl">Now, ten years after the closing the theater, former Building Stage Artistic Director Blake Montgomery brings his Jeff Award-winning show back to the stage in time for the 2024 holiday season.</p>

          <CallToAction />

        </div>
      </div >

    </section >
  )
}