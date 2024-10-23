import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";

export default function Performances() {
  return (
    <main className="w-full h-screen relative z-50 text-gray-400 flex flex-col justify-start items-center bg-black mt-10">
      <Nav />
      <div className="flex flex-col justify-center items-center pt-12 px-12 w-full pb-12">
        {/* <BuyButton /> */}
        <h1 className="text-xl mb-1">2024 Performance Calendar</h1>
        <p className="text-xs italic mb-4">
          Click any date to visit the box office page for that performance.
        </p>
        <div className="w-full landscape:w-1/2  flex flex-col justify-center items-center mt-4">
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-sm">
              <a
                href=" https://ci.ovationtix.com/35386/performance/11538764"
                target="_blank"
                className="hover:underline"
              >
                Thursday, December 5 at 8pm
              </a>
            </p>
            <p className="text-sm">
              <a
                href="https://ci.ovationtix.com/35386/performance/11538765"
                target="_blank"
                className="hover:underline"
              >
                Friday, December 6 at 8pm
              </a>
            </p>
            <p className="text-sm">
              <a
                href="https://ci.ovationtix.com/35386/performance/11540127"
                target="_blank"
                className="hover:underline"
              >
                Saturday, December 7 at 8pm
              </a>
            </p>

            <p className="text-sm">
              <a
                href="https://ci.ovationtix.com/35386/performance/11540128"
                target="_blank"
                className="hover:underline"
              >
                Sunday, December 8 at 7pm
              </a>
            </p>
            <p className="text-sm">
              <a
                href="https://ci.ovationtix.com/35386/performance/11540129"
                target="_blank"
                className="hover:underline"
              >
                Thursday, December 12 at 8pm
              </a>
            </p>
            <p className="text-sm">
              <a
                href="https://ci.ovationtix.com/35386/performance/11540130"
                target="_blank"
                className="hover:underline"
              >
                Friday, December 13 at 8pm
              </a>
            </p>
            <p className="text-sm">
              <a
                href="https://ci.ovationtix.com/35386/performance/11540131"
                target="_blank"
                className="hover:underline"
              >
                Saturday, December 14 at 8pm
              </a>
            </p>
            <p className="text-sm">
              <a
                href="https://ci.ovationtix.com/35386/performance/11540132"
                target="_blank"
                className="hover:underline"
              >
                Sunday, December 15 at 7pm
              </a>
            </p>
            <p className="text-sm">
              <a
                href="https://ci.ovationtix.com/35386/performance/11540133"
                target="_blank"
                className="hover:underline"
              >
                Thursday, December 19 at 8pm
              </a>
            </p>
            <p className="text-sm">
              <a
                href="https://ci.ovationtix.com/35386/performance/11540134"
                target="_blank"
                className="hover:underline"
              >
                Friday, December 20 at 8pm
              </a>
            </p>
            <p className="text-sm">
              <a
                href="https://ci.ovationtix.com/35386/performance/11540135"
                target="_blank"
                className="hover:underline"
              >
                Saturday, December 21 at 8pm
              </a>
            </p>
            <p className="text-sm">
              <a
                href="https://ci.ovationtix.com/35386/performance/11540136"
                target="_blank"
                className="hover:underline"
              >
                Sunday, December 22 at 3pm
              </a>
            </p>
          </div>
        </div>
        <div className="w-full landscape:w-1/2 border border-gray-600 rounded-md flex flex-col justify-center items-center mt-4">
          <h2 className="text-sm mb-1 italic text-gray-400 text-center border-b border-gray-600 p-4 w-full">
            Performance Venue
          </h2>
          <div className="flex flex-col justify-center items-center p-4">
            <p className="text-sm">The Den Theatre</p>
            <p className="text-sm">1331 N. Milwaukee Ave.</p>
            <p className="text-sm mb-4">Chicago, IL 60622</p>
            <p className="text-sm italic">Box Office:</p>
            <p className="text-sm">
              <a href="tel:773-697-3830" className="hover:underline">
                773-697-3830
              </a>
            </p>
            <p>
              <a
                href="https://thedentheatre.com/"
                target="_blank"
                className="hover:underline"
              >
                thedentheatre.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
