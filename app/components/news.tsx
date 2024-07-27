import Audience from '@/app/components/audience';

export default function News() {
  return (
    <div className="px-2">

      < div className="bg-neutral-200 text-neutral-700 flex flex-col p-4 pt-4 pb-8 rounded-md" >
        <h2 className="text-xl font-bold mb-1" > The News</h2>
        <p className=" text-xs mb-2">After ten years, Blake Montgomery brings his Jeff Award-winning show back for the 2024 holiday season.</p>
        < p className=" text-xs mb-2" >Originally known as <span className="font-bold italic text-xs">
          CHARLES DICKENS BEGRUDGINGLY PERFORMS 'A CHRISTMAS CAROL.' AGAIN
        </span>. the story follows a 171 year old Dickens as he is guided by mysterious spirits to rediscover the beauty of his own text and the meaning of tradition. </p>
        <p className=" text-xs">
          This unique holiday show charmed audiences with its energy and warmth when first produced in Chicago at the Building Stage in December of 2011 and 2012.</p>


      </div>
    </div >
  )
}