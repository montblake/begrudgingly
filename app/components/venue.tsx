import Policies from "./policies";

export default function Venue() {
  return (
    <div className="flex flex-col justify-center items-center pb-8 w-full ">
      <div className="flex flex-col justify-center items-center">
        <p className="text-sm italic mb-2 text-gray-400">
          This December, find Mr. Dickens at
        </p>
        <div className="flex flex-col justify-center items-center text-gray-200 text-lg mb-4">
          <p className="">The Den Theatre</p>
          <p className="">1331 N. Milwaukee Ave.</p>
        </div>
        <p className="text-sm italic text-gray-400">Box Office</p>
        <p className="text-lg">
          <a
            // href="tel:773-697-3830"
            className="hover:text-amber-300/80 text-gray-200 transition-colors duration-300"
          >
            (773) 697-3830
          </a>
        </p>
        <p>
          <a
            // href="https://thedentheatre.com/"
            target="_blank"
            className="hover:text-amber-300/80 text-gray-200 transition-colors duration-300"
          >
            thedentheatre.com
          </a>
        </p>
      </div>
      <Policies />
    </div>
  );
}
