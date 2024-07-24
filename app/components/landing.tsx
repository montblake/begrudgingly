import Image from 'next/image';

export default function Landing() {
  return (
    <div className="LANDING h-[95%] sm:h-[92.5%] md:h-[90%] sm:bg-cover-dickens sm:bg-cover sm:bg-no-repeat md:bg-right-top bg-right flex flex-col justify-start items-start sm:justify-between">

      <div className="p-4 pt-4 md:p-16 md:pt-12 w-full">
        <div className="text-neutral-400">

          <h2 className="text-2xl md:text-4xl md:mb-2 drop-shadow-lg">Charles Dickens</h2>
          <h1 className="text-5xl md:text-8xl text-neutral-100 mb-2 md:mb-4 drop-shadow-lg">Begrudgingly</h1>
          <h2 className="text-2xl md:text-4xl drop-shadow-lg">Performs </h2>
          <h2 className="text-2xl md:text-4xl drop-shadow-lg">&lsquo;A Christmas Carol.&rsquo;</h2>
          <h2 className="text-2xl mb-4 md:text-4xl md:mb-8 drop-shadow-lg">Again.</h2>
        </div>

        <div className="text-neutral-100">
          <h4 className="text-sm md:text-md drop-shadow-lg">created and performed by</h4>
          <h3 className="text-xl  md:text-2xl drop-shadow-lg">Blake Montgomery</h3>
        </div>
      </div>

      <div className="sm:hidden h-[400px] overflow-hidden" >
        <Image
          src="/dickens_image2_color.jpg"
          width="800"
          height="800"
          alt="Dickens reading..."
        />
      </div>

      <div className="text-xs sm:text-sm md:text-md text-neutral-300 bg-neutral-600/25 px-4 sm:px-8 py-4 md:px-16 md:py-8 flex flex-col items-center mx-4 mb-4 md:mx-16 md:mb-8 rounded-lg backdrop-blur border border-neutral-700">
        <p className="mb-2">Originally produced by the Building Stage in December of 2011 and 2012, CHARLES DICKENS BEGRUDGINGLY... charmed audiences with its unique, ridiculous, and ultimately warm-hearted cheer. Now, Blake Montgomery is bringing his Jeff Award-winning show back for the 2024 holiday season.</p>
        <a href="mailto:blakemontgomery312@gmail.com?subject=Charles Dickens Begrudgingly...">
          <button
            className="bg-amber-200 text-neutral-800 rounded-full px-4 py-1 md:px-8 md:py-2">Get In Touch</button>
        </a>
      </div>
    </div>
  );
}