import { Mail } from 'lucide-react';

export default function News() {
  return (
    <section className="bg-neutral-900 p-2">

      <div className="w-full flex justify-center bg-neutral-200 rounded-md border border-neutral-600">

        < div className="landscape:w-2/3 text-neutral-700 flex flex-col p-4 pt-4 pb-8 rounded-md landscape:my-8 landscape:pt-16 landscape:pb-24 " >
          <h2 className="text-lg landscape:text-xl lg:text-2xl font-bold mb-1 landscape:mb-2 lg:mb-3" > The News</h2>

          <p className="text-sm landscape:text-lg lg:text-xl mb-2 sm:mb-3 landscape:mb-4">
            This unique holiday show, which imagines a still-living Dickens forced to perform his famous Christmas Carol for the 171st year in a row, charmed audiences when first produced in Chicago at the Building Stage in December of 2011 and 2012.</p>
          <p className="text-sm landscape:text-lg lg:text-xl mb-2 sm:mb-3 landscape:mb-4">Now, ten years after the closing the theater, Blake Montgomery brings his Jeff Award-winning show back in time to warm up the 2024 holiday season.</p>
          <p className="text-sm landscape:text-lg lg:text-xl ">Currently, we&rsquo;re seeking a venue for this year&rsquo;s performances. Open to discuss any and all possibilities including both straight rental/self-production or some form of co-production.</p>
          <div className="w-full flex justify-center gap-2 grow items-center mt-4 landscape:mt-8">

            <div className="hidden landscape:flex bg-amber-200 w-[96px] h-[96px] rounded-full justify-center items-center border-2 border-neutral-800">

              <a href="mailto:blakemontgomery312@gmail.com?subject=Charles Dickens Begrudgingly"> <Mail color="black" size={48} strokeWidth="2" /></a>
            </div>
            <div className="bg-amber-200 w-[64px] h-[64px] rounded-full flex landscape:hidden justify-center items-center border-2 border-neutral-800">

              <a href="mailto:blakemontgomery312@gmail.com?subject=Charles Dickens Begrudgingly"> <Mail color="black" size={32} strokeWidth="2" /></a>
            </div>

          </div>
        </div>
      </div >

    </section >
  )
}