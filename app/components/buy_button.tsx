export default function BuyButton() {
  return (
    <div className="w-full h-auto relative z-50 mb-8">
      <a
        href="https://thedentheatre.com/performances/2024/12/5/charles-dickens-begrudgingly-performs-a-christmas-carol-again-the-den-theatre-comedy-club"
        target="_blank"
        className="relative z-50 top-0"
      >
        <button className="flex flex-col bg-amber-200/80 rounded-lg p-4 text-gray-800 relative z-50 w-full mx-auto text-xs justify-center items-center font-bold border border-black ">
          <h1 className="text-xl">Purchase Tickets</h1>
          {/* <p className="text-xs italic">The Den Theatre Box Office</p> */}
        </button>
      </a>
    </div>
  );
}
