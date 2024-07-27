import Image from 'next/image';

export default function Background() {
  return (
    <div className="LANDING  flex justify-center items-center bg-black">


      <div className="text-neutral-200 text-sm p-4 h-full flex flex-col justify-between items-center border-neutral-700">
        <p className="bg-neutral-200/25 mb-2 rounded-xl p-4 border border-neutral-500 text-xs">Originally produced by the Building Stage in December of 2011 and 2012, CHARLES DICKENS BEGRUDGINGLY... charmed audiences with its unique, ridiculous, and ultimately warm-hearted cheer. Now, Blake Montgomery is bringing his Jeff Award-winning show back for the 2024 holiday season.</p>
        <a href="mailto:blakemontgomery312@gmail.com?subject=Charles Dickens Begrudgingly...">
          <button
            className="bg-amber-200 text-neutral-800 rounded-full px-4 py-1 md:px-8 md:py-2 mb-4">Get In Touch</button>
        </a>

      </div>
    </div>
  );
}