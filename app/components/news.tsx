export default function News() {
  return (
    <section className="bg-neutral-900 p-2 border-x border-neutral-600">

      <div className="w-full flex justify-center bg-neutral-200 rounded-md border border-neutral-600">

        < div className="w-md:[80%] text-neutral-700 flex flex-col p-4 pt-4 pb-8 rounded-md md:my-8 md:pt-16 md:pb-24 " >
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 lg:mb-3" > The News</h2>

          <p className="text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3 md:mb-4">
            This unique holiday show, which imagines a still-living Dickens forced to perform his famous Christmas Carol for the 171st year in a row, charmed audiences when first produced in Chicago at the Building Stage in December of 2011 and 2012.</p>
          <p className=" text-lg md:text-xl lg:text-2xl ">Now, ten years after the closing his theater, Blake Montgomery brings his Jeff Award-winning show back in time to warm up the 2024 holiday season.</p>
        </div>
      </div >
    </section>
  )
}