// import { Mail } from 'lucide-react';
import CallToAction from '@/app/components/call_to_action';

export default function News() {
  return (
    <section className="bg-neutral-900 p-2">

      <div className="w-full flex justify-center bg-neutral-200 rounded-md border border-neutral-600">

        < div className="landscape:w-2/3 text-neutral-700 flex flex-col p-4 pt-4 pb-8 rounded-md landscape:my-8 landscape:pt-16 landscape:pb-24 " >
          <h2 className="text-lg landscape:text-xl lg:text-2xl font-bold mb-1 landscape:mb-2 lg:mb-3" > The News</h2>

          <p className="text-sm landscape:text-lg lg:text-xl mb-2 sm:mb-3 landscape:mb-4">
            <span className="uppercase text-xs md:text-sm lg:text-base">Charles Dickens Begrudgingly</span> charmed audiences when first produced in Chicago at the Building Stage in December of 2011 and 2012.
            This unique holiday show, which imagines a still-living Dickens forced to perform his famous <span className="uppercase text-xs md:text-sm lg:text-base">Christmas Carol</span> for the 171st year in a row, lovingly celebrates and skewers the famous author and our Christmas traditions.</p>
          <p className="text-sm landscape:text-lg lg:text-xl mb-2 sm:mb-3 landscape:mb-4">Now, ten years after the closing the theater, former Building Stage Artistic Director Blake Montgomery brings his Jeff Award-winning show back to the stage in time for the 2024 holiday season.</p>

          <CallToAction />

        </div>
      </div >

    </section >
  )
}