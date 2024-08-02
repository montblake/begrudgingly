import { Mail } from 'lucide-react';


export default function CallToAction() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-neutral-700 rounded-lg p-8 sm:p-16 md:p-24 lg:p-32 xl:36 text-neutral-200 mt-4">

      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight uppercase text-center">Seeking a venue for this year&rsquo;s performances</p>
      <ul className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl list-disc list-outside p-4 flex flex-col gap-2 text-neutral-200">
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
  );
}