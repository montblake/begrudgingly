export default function News() {
  return (
    <div className="px-2 flex justify-center">

      < div className="bg-neutral-200 text-neutral-700 flex flex-col p-4 pt-4 pb-8 rounded-md md:mx-16 md:my-8 md:py-12 md:px-24 max-w-[800px]" >
        <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 lg:mb-3" > The News</h2>
        <p className=" text-xs md:text-base lg:text-lg mb-2">After ten years, Blake Montgomery brings his Jeff Award-winning show back for the 2024 holiday season.</p>
        < p className=" text-xs md:text-base lg:text-lg mb-2" >Originally known as <span className="font-bold italic text-sm">
          CHARLES DICKENS BEGRUDGINGLY PERFORMS &lsquo;A CHRISTMAS CAROL.&rsquo; AGAIN
        </span>. the story follows a 171 year old Dickens as he is guided by mysterious spirits to rediscover the beauty of his own text and the meaning of tradition. </p>
        <p className="text-xs md:text-base lg:text-lg">
          This unique holiday show charmed audiences with its energy and warmth when first produced in Chicago at the Building Stage in December of 2011 and 2012.</p>


      </div>
    </div >
  )
}