import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import Image from "next/image";

export default function Performances() {
  return (
    <main className="w-full h-min-screen relative z-50 text-gray-400 flex flex-col justify-start items-center bg-black mt-10">
      <Nav />

      <div className="max-w-screen-xl flex flex-col lg:flex-row justify-center items-center lg:gap-16 lg:items-start pt-12 px-12 w-full pb-12">
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
          <h1 className="text-xl mb-1 text-center uppercase text-gray-400">
            Chicago 2024
          </h1>
          <hr className="w-full border-gray-600 mb-8 mt-2" />
          <Image
            src="/just_title.png"
            alt="Charles Dickens Begrudgingly Performs A CHRISTMAS CAROL Again"
            width={500}
            height={500}
            className=""
          />
          <hr className="w-full border-gray-600 mb-12 mt-8" />
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
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
          <div className="w-full  flex flex-col justify-center items-center mt-4 lg:mt-0">
            <p className="text-2xl uppercase  mb-4 text-gray-400">
              Tickets on sale now!
            </p>
            <div className="flex flex-col justify-center items-center gap-2 w-full">
              <a
                href=" https://ci.ovationtix.com/35386/performance/11538764"
                target="_blank"
                className="bg-amber-300/80 px-4 py-2 rounded-xl text-gray-50 border-2 border-black hover:border-gray-50 transition-colors duration-300 w-72 text-center"
              >
                <p className="text-sm drop-shadow-md">
                  Thursday, December 5 at 8pm
                </p>
              </a>
              <a
                href="https://ci.ovationtix.com/35386/performance/11538765"
                target="_blank"
                className="bg-amber-300/80 px-4 py-2 rounded-xl text-gray-50 border-2 border-black hover:border-gray-50 transition-colors duration-300 w-72 text-center"
              >
                <p className="text-sm">Friday, December 6 at 8pm</p>
              </a>
              <a
                href="https://ci.ovationtix.com/35386/performance/11540127"
                target="_blank"
                className="bg-amber-300/80 px-4 py-2 rounded-xl text-gray-50 border-2 border-black hover:border-gray-50 transition-colors duration-300 w-72 text-center"
              >
                <p className="text-sm">Saturday, December 7 at 8pm</p>
              </a>
              <a
                href="https://ci.ovationtix.com/35386/performance/11540128"
                target="_blank"
                className="bg-amber-300/80 px-4 py-2 rounded-xl text-gray-50 border-2 border-black hover:border-gray-50 transition-colors duration-300 w-72 text-center"
              >
                <p className="text-sm">Sunday, December 8 at 7pm</p>
              </a>
              <a
                href="https://ci.ovationtix.com/35386/performance/11540129"
                target="_blank"
                className="bg-amber-300/80 px-4 py-2 rounded-xl text-gray-50 border-2 border-black hover:border-gray-50 transition-colors duration-300 w-72 text-center"
              >
                <p className="text-sm">Thursday, December 12 at 8pm</p>
              </a>
              <a
                href="https://ci.ovationtix.com/35386/performance/11540130"
                target="_blank"
                className="bg-amber-300/80 px-4 py-2 rounded-xl text-gray-50 border-2 border-black hover:border-gray-50 transition-colors duration-300 w-72 text-center"
              >
                <p className="text-sm">Friday, December 13 at 8pm</p>
              </a>
              <a
                href="https://ci.ovationtix.com/35386/performance/11540131"
                target="_blank"
                className="bg-amber-300/80 px-4 py-2 rounded-xl text-gray-50 border-2 border-black hover:border-gray-50 transition-colors duration-300 w-72 text-center"
              >
                <p className="text-sm">Saturday, December 14 at 8pm</p>
              </a>
              <a
                href="https://ci.ovationtix.com/35386/performance/11540132"
                target="_blank"
                className="bg-amber-300/80 px-4 py-2 rounded-xl text-gray-50 border-2 border-black hover:border-gray-50 transition-colors duration-300 w-72 text-center"
              >
                <p className="text-sm">Sunday, December 15 at 7pm</p>
              </a>
              <a
                href="https://ci.ovationtix.com/35386/performance/11540133"
                target="_blank"
                className="bg-amber-300/80 px-4 py-2 rounded-xl text-gray-50 border-2 border-black hover:border-gray-50 transition-colors duration-300 w-72 text-center"
              >
                <p className="text-sm">Thursday, December 19 at 8pm</p>
              </a>
              <a
                href="https://ci.ovationtix.com/35386/performance/11540134"
                target="_blank"
                className="bg-amber-300/80 px-4 py-2 rounded-xl text-gray-50 border-2 border-black hover:border-gray-50 transition-colors duration-300 w-72 text-center"
              >
                <p className="text-sm">Friday, December 20 at 8pm</p>
              </a>
              <a
                href="https://ci.ovationtix.com/35386/performance/11540135"
                target="_blank"
                className="bg-amber-300/80 px-4 py-2 rounded-xl text-gray-50 border-2 border-black hover:border-gray-50 transition-colors duration-300 w-72 text-center"
              >
                <p className="text-sm">Saturday, December 21 at 8pm</p>
              </a>
              <a
                href="https://ci.ovationtix.com/35386/performance/11540136"
                target="_blank"
                className="bg-amber-300/80 px-4 py-2 rounded-xl text-gray-50 border-2 border-black hover:border-gray-50 transition-colors duration-300 w-72 text-center"
              >
                <p className="text-sm">Sunday, December 22 at 3pm</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-12 max-w-screen-xl">
        <ul className="text-sm mb-8 text-gray-200 flex flex-col lg:flex-row flex-wrap gap-1 lg:space-x-8 justify-center items-center bg-gray-200/40 p-4 rounded-xl w-full">
          <li>All tickets are general admission</li>
          <li className="mb-0">Recommended for ages 15 and up</li>
          <li className="mb-0">Late seating at the discretion of management</li>
          <li className="mb-0">The Den has a nice bar, come early</li>
          <li className="mb-0">The show runs 95 minutes</li>
          <li className="mb-0">There is no intermission</li>
          <li className="mb-0">Mr. Dickens can&apos;t wait to meet you</li>
        </ul>
      </div>

      <Footer />
    </main>
  );
}
