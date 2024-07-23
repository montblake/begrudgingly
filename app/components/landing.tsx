export default function Landing() {
  return (
    <div className="LANDING h-[90%] bg-cover-dickens bg-cover bg-no-repeat bg-right-top flex flex-col justify-start items-start">

      <div className="h-full p-8 pt-4 lg:p-16 lg:pt-12">
        <div className="text-neutral-400">

          <h2 className="text-2xl lg:text-4xl lg:mb-2">Charles Dickens</h2>
          <h1 className="text-6xl lg:text-8xl text-neutral-100 mb-2 lg:mb-4 drop-shadow-lg">Begrudgingly</h1>
          <h2 className="text-2xl lg:text-4xl">Performs </h2>
          <h2 className="text-2xl lg:text-4xl">&lsquo;A Christmas Carol.&rsquo;</h2>
          <h2 className="text-2xl mb-4 lg:text-4xl lg:mb-8">Again.</h2>
        </div>

        <div className="text-neutral-100">
          <h4 className="text-sm lg:text-md">created and performed by</h4>
          <h3 className="text-xl  lg:text-2xl">Blake Montgomery</h3>
        </div>
      </div>

      <div className="text-sm lg:text-md text-neutral-400 bg-neutral-600/25 px-8 py-4 lg:px-16 lg:py-8 flex flex-col items-center mx-8 mb-4 lg:mx-16 lg:mb-8 rounded-lg backdrop-blur border border-neutral-700">
        <p className="mb-2 text-justify ">Originally produced by the Building Stage in December of 2011 and 2012, CHARLES DICKENS BEGRUDGINGLY... charmed audiences with its unique, ridiculous, and ultimately warm-hearted cheer. Now, Blake Montgomery is bringing his Jeff Award-winning show back for the 2024 holiday season.</p>
        <a href="mailto:blakemontgomery312@gmail.com?subject=Charles Dickens Begrudgingly...">
          <button
            className="bg-amber-200 text-neutral-800 rounded-full px-4 py-1 lg:px-8 lg:py-2 my-2">Get In Touch</button>
        </a>
      </div>
    </div>
  );
}