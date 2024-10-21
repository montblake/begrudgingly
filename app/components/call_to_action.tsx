export default function CallToAction() {
  return (
    <div className="w-full h-auto relative z-50 mt-8 mb-12">
      <a
        href="https://thedentheatre.com/performances/2024/12/5/charles-dickens-begrudgingly-performs-a-christmas-carol-again-the-den-theatre-comedy-club"
        target="_blank"
        className="relative z-50 top-0"
      >
        <button className="flex flex-col bg-amber-200/80 rounded-lg p-4 text-gray-800 relative z-50 w-fit mx-auto justify-center items-center font-bold">
          {/* <p className="text-sm whitespace-nowrap">Coming This December</p>
          <p className="text-sm whitespace-nowrap">
            To The Den Theatre in Chicago
          </p> */}
          <p className="text-xlitalic">Purchase Tickets</p>
        </button>
      </a>
    </div>
  );
}
