import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import Image from "next/image";

export default function Performances() {
  return (
    <main className="w-full h-min-screen relative z-50 text-gray-400 flex flex-col justify-start items-center bg-black mt-10">
      <Nav />
      <div className="flex flex-col landscape:flex-row justify-center items-center pt-12 px-12 w-full pb-12">
        <div className="flex flex-col justify-center items-center w-full landscape:w-1/2">
          <Image
            src="/dickens_layers/layered_title.png"
            alt="Charles Dickens Begrudgingly Performs A CHRISTMAS CAROL Again"
            width={500}
            height={500}
            className="-mt-[40vh]"
          />

          <hr className="w-full border-gray-600 mb-4 -mt-8" />
          <h1 className="text-5xl mb-1 text-center uppercase text-gray-600">
            Chicago 2024
          </h1>
          <hr className="w-full border-gray-600 mb-8 mt-2" />

          <div className="flex flex-col justify-center items-center mb-12">
            <p className="text-xs italic mb-2 text-gray-500">
              Performing exclusively at
            </p>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center text-gray-500 text-xl mb-4">
                <p className="">The Den Theatre</p>
                <p className="">1331 N. Milwaukee Ave.</p>
                <p className="">Chicago, IL 60622</p>
              </div>
              <p className="text-xs italic mb-2 text-gray-500">Box Office</p>
              <p className="text-sm">
                <a
                  href="tel:773-697-3830"
                  className="text-amber-300/60 hover:text-yellow-200/80 transition-colors duration-300"
                >
                  773-697-3830
                </a>
              </p>
              <p>
                <a
                  href="https://thedentheatre.com/"
                  target="_blank"
                  className="text-amber-300/60 hover:text-yellow-200/80 transition-colors duration-300"
                >
                  thedentheatre.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full landscape:w-1/2">
          <hr className="w-full border-gray-600 mb-4 mt-0" />
          <h1 className="text-5xl mb-1 text-center uppercase text-gray-600">
            Dates & Times
          </h1>
          <hr className="w-full border-gray-600 mb-8 mt-2" />

          <p className="text-xs italic mb-2 text-gray-500">
            Click any date to visit the box office page for that performance.
          </p>
          <div className="w-full landscape:w-1/2  flex flex-col justify-center items-center mt-4">
            <div className="flex flex-col justify-center items-center gap-1">
              <a
                href=" https://ci.ovationtix.com/35386/performance/11538764"
                target="_blank"
                className="bg-amber-300/80 px-4 py-1 rounded-md text-gray-50 hover:bg-yellow-300/80 transition-colors duration-300 w-64 text-center"
              >
                <p className="text-sm">Thursday, December 5 at 8pm</p>
              </a>
              <a
                href="https://ci.ovationtix.com/35386/performance/11538765"
                target="_blank"
                className="bg-amber-300/80 px-4 py-1 rounded-md text-gray-50 hover:bg-yellow-300/80 transition-colors duration-300 w-64 text-center"
              >
                <p className="text-sm">Friday, December 6 at 8pm</p>
              </a>
              <a
                href="https://ci.ovationtix.com/35386/performance/11540127"
                target="_blank"
                className="bg-amber-300/80 px-4 py-1 rounded-md text-gray-50 hover:bg-yellow-300/80 transition-colors duration-300 w-64 text-center"
              >
                <p className="text-sm">Saturday, December 7 at 8pm</p>
              </a>
              <a
                href="https://ci.ovationtix.com/35386/performance/11540128"
                target="_blank"
                className="bg-amber-300/80 px-4 py-1 rounded-md text-gray-50 hover:bg-yellow-300/80 transition-colors duration-300 w-64 text-center"
              >
                <p className="text-sm">Sunday, December 8 at 7pm</p>
              </a>
              <a
                href="https://ci.ovationtix.com/35386/performance/11540129"
                target="_blank"
                className="bg-amber-300/80 px-4 py-1 rounded-md text-gray-50 hover:bg-yellow-300/80 transition-colors duration-300 w-64 text-center"
              >
                <p className="text-sm">Thursday, December 12 at 8pm</p>
              </a>
              <a
                href="https://ci.ovationtix.com/35386/performance/11540130"
                target="_blank"
                className="bg-amber-300/80 px-4 py-1 rounded-md text-gray-50 hover:bg-yellow-300/80 transition-colors duration-300 w-64 text-center"
              >
                <p className="text-sm">Friday, December 13 at 8pm</p>
              </a>
              <a
                href="https://ci.ovationtix.com/35386/performance/11540131"
                target="_blank"
                className="bg-amber-300/80 px-4 py-1 rounded-md text-gray-50 hover:bg-yellow-300/80 transition-colors duration-300 w-64 text-center"
              >
                <p className="text-sm">Saturday, December 14 at 8pm</p>
              </a>
              <a
                href="https://ci.ovationtix.com/35386/performance/11540132"
                target="_blank"
                className="bg-amber-300/80 px-4 py-1 rounded-md text-gray-50 hover:bg-yellow-300/80 transition-colors duration-300 w-64 text-center"
              >
                <p className="text-sm">Sunday, December 15 at 7pm</p>
              </a>
              <a
                href="https://ci.ovationtix.com/35386/performance/11540133"
                target="_blank"
                className="bg-amber-300/80 px-4 py-1 rounded-md text-gray-50 hover:bg-yellow-300/80 transition-colors duration-300 w-64 text-center"
              >
                <p className="text-sm">Thursday, December 19 at 8pm</p>
              </a>
              <a
                href="https://ci.ovationtix.com/35386/performance/11540134"
                target="_blank"
                className="bg-amber-300/80 px-4 py-1 rounded-md text-gray-50 hover:bg-yellow-300/80 transition-colors duration-300 w-64 text-center"
              >
                <p className="text-sm">Friday, December 20 at 8pm</p>
              </a>
              <a
                href="https://ci.ovationtix.com/35386/performance/11540135"
                target="_blank"
                className="bg-amber-300/80 px-4 py-1 rounded-md text-gray-50 hover:bg-yellow-300/80 transition-colors duration-300 w-64 text-center"
              >
                <p className="text-sm">Saturday, December 21 at 8pm</p>
              </a>
              <a
                href="https://ci.ovationtix.com/35386/performance/11540136"
                target="_blank"
                className="bg-amber-300/80 px-4 py-1 rounded-md text-gray-50 hover:bg-yellow-300/80 transition-colors duration-300 w-64 text-center"
              >
                <p className="text-sm">Sunday, December 22 at 3pm</p>
              </a>
            </div>
            <hr className="w-full border-gray-600 mb-4 mt-16" />
            <h1 className="text-5xl mb-1 text-center uppercase text-gray-600">
              You Should Know
            </h1>
            <hr className="w-full border-gray-600 mb-0 mt-2" />
            <ul className="text-xs italic mt-8 mb-16 text-gray-500">
              <li>All tickets are general admission.</li>
              <li>Late seating at the discretion of the house manager.</li>
              <li>$16-$32.</li>
              <li>
                The running time is 95 minutes. There is no intermission. The
                Den Theatre has a full bar on premises; purchased drinks are
                allowed in the theater.
              </li>
              <li>This production is recommended for ages 15 and up.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
