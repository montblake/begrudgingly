import BuyButton from "./buy_button";

export default function CallToAction() {
  return (
    <div className="w-full h-full relative z-50 text-gray-400/80 flex flex-col justify-end items-end bg-black ">
      <div className="flex flex-col justify-end items-end border-gray-400/80 rounded-lg p-4 px-12 h-full w-full pb-12">
        {/* <BuyButton /> */}
        <h1 className="text-base mb-4">2024 Calendar</h1>
        <p className="text-sm mb-1">
          <span className="italic">Previews, $16</span>
        </p>
        <p className="text-sm">Thursday, December 5 at 8pm</p>
        <p className="text-sm">Friday, December 6 at 8pm</p>
        <p className="text-sm mb-4">Saturday, December 7 at 8pm</p>
        <p className="text-sm mb-1">
          <span className="italic">Performances, $32</span>
        </p>
        <p className="text-sm">Sunday, December 8 at 7pm</p>
        <p className="text-sm">Thursday, December 12 at 8pm</p>
        <p className="text-sm">Friday, December 13 at 8pm</p>
        <p className="text-sm">Saturday, December 14 at 8pm</p>
        <p className="text-sm">Sunday, December 15 at 7pm</p>
        <p className="text-sm">Thursday, December 19 at 8pm</p>
        <p className="text-sm">Friday, December 20 at 8pm</p>
        <p className="text-sm">Saturday, December 21 at 8pm</p>
        <p className="text-sm">Sunday, December 22 at 3pm</p>

        {/* <p className="text-sm mb-4">
          <span className="italic">Performance Venue:</span>
          <br />
          The Den Theatre
          <br />
          1331 N. Milwaukee Ave.
          <br />
          Chicago, IL 60622
          <br />
        </p>
        <p className="text-sm mb-4">
          <span className="italic">Box Office:</span>
          <br />
          <a href="tel:773-697-3830" className="hover:underline">
            773-697-3830
          </a>
          <br />
          <a href="https://thedentheatre.com/" target="_blank">
            thedentheatre.com
          </a>
        </p> */}
      </div>
    </div>
  );
}
