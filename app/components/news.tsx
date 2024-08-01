import { Mail } from 'lucide-react';

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
          <div className="flex flex-col justify-center items-center bg-neutral-700 rounded-lg p-8 md:p-16 text-neutral-200 mt-4">

            <p className="text-base lg:text-lg xl:text-xl tracking-tight uppercase">Seeking a venue for this year&rsquo;s performances</p>
            <ul className="text-xs md:text-sm xl:text-base list-disc list-outside p-4 flex flex-col  gap-2 text-neutral-200">
              <li>
                Depending on availability and house size, performances could be held the weekend, week, or few weeks leading up to December 25.
              </li>
              <li>
                Open to discuss both straight rental and presentation/co-production arrangements.
              </li>
            </ul>

            <div className="bg-amber-200/80 hover:bg-amber-200 active:bg-amber-200 w-[64px] h-[64px] rounded-full flex justify-center items-center border-2 border-neutral-800 mt-4">

              <a href="mailto:blakemontgomery312@gmail.com?subject=Charles Dickens Begrudgingly"> <Mail color="black" size={32} strokeWidth="2" /></a>
            </div>

          </div>
        </div>
      </div >

    </section >
  )
}