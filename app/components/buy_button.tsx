export default function BuyButton() {
  return (
    <div className="w-full h-auto relative z-50 mb-[10vw]">
      <a
        href="https://thedentheatre.com/performances/2024/12/5/charles-dickens-begrudgingly-performs-a-christmas-carol-again-the-den-theatre-comedy-club"
        target="_blank"
        className="relative z-50 top-0"
      >
        <button className="flex flex-col bg-amber-200/80 rounded-lg p-4 text-gray-800 relative z-50 w-fit mx-auto text-xs justify-center items-center font-bold">
          <p className="text-xs italic">
            Purchase Ticket <br /> The Den Theatre Box Office
          </p>
        </button>
      </a>
    </div>
  );
}
