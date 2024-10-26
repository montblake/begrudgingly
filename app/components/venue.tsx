import Image from "next/image";

export default function Venue() {
  return (
    <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
      <h1 className="text-xl mb-1 text-center uppercase text-gray-400">
        Chicago 2024
      </h1>
      <hr className="w-full border-gray-600 mb-4 mt-2" />
      <Image
        src="/just_title.png"
        alt="Charles Dickens Begrudgingly Performs A CHRISTMAS CAROL Again"
        width={500}
        height={500}
        className=""
      />
      <hr className="w-full border-gray-600 mb-12 mt-4" />
      <div className="flex flex-col justify-center items-center mb-8">
        <p className="text-sm italic mb-2 text-gray-400">
          This December, find Mr. Dickens at
        </p>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center text-gray-200 text-lg mb-4">
            <p className="">The Den Theatre</p>
            <p className="">1331 N. Milwaukee Ave.</p>
          </div>
          <p className="text-sm italic text-gray-400">Box Office</p>
          <p className="text-lg">
            <a
              href="tel:773-697-3830"
              className="hover:text-amber-300/80 text-gray-200 transition-colors duration-300"
            >
              (773) 697-3830
            </a>
          </p>
          <p>
            <a
              href="https://thedentheatre.com/"
              target="_blank"
              className="hover:text-amber-300/80 text-gray-200 transition-colors duration-300"
            >
              thedentheatre.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
