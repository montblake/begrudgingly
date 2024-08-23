// import { Mail } from 'lucide-react';
import CallToAction from '@/app/components/call_to_action';

type NewsProps = {
  context: 'booking' | 'landing'
}

export default function News({ context }: NewsProps) {
  return (
    <section className="bg-neutral-900 p-2">

      <div className="bg-neutral-200 my-1 rounded-md flex justify-center">

        < div className="  
          flex flex-col p-4 pb-8 sm:p-16 sm:pt-12 md:p-24 md:pt-16 
          landscape:w-[80%] landscape:flex-row landscape:items-start landscape:gap-8 landscape:py-24 landscape:px-0 landscape:pb-36
          lg:w-[80%] lg:flex-row lg:items-start lg:gap-8 lg:py-24 lg:px-0 lg:pb-36" >
          <div className="text-neutral-700 w-full mt-4 md:mt-8 landscape:w-2/3 landscape:mt-0 lg:w-2/3 lg:mt-0">

            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-0 sm:mb-1 md:mb-2 landscape:text-2xl landscape:mb-2 lg:text-2xl lg:mb-2" > The News</h2>

            <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 landscape:text-lg landscape:mb-4 lg:text-lg lg:mb-4">
              <span className="uppercase">Charles Dickens Begrudgingly</span> charmed audiences when first produced in Chicago at the Building Stage in December of 2011 and 2012.
              This unique holiday show, which imagines a still-living Dickens forced to perform his famous <span className="uppercase">Christmas Carol</span> for the 171st year in a row, lovingly celebrates and skewers the famous author and our Christmas traditions.</p>
            <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 landscape:text-lg landscape:mb-4 lg:text-lg lg:mb-4">Now, ten years after the closing the theater, former Building Stage Artistic Director Blake Montgomery brings his Jeff Award-winning show back to the stage in time for the 2024 holiday season.</p>

          </div>

          <CallToAction context={context} />
        </div>
      </div>
    </section >
  )
}