export default function BuyButton() {
  return (
    <div className="w-1/2 mx-auto h-auto relative z-40">
      <a
        href="https://thedentheatre.com/performances/2024/12/5/charles-dickens-begrudgingly-performs-a-christmas-carol-again-the-den-theatre-comedy-club"
        target="_blank"
        className="relative z-50 top-0"
      >
        <button className="bg-amber-300/80 px-4 py-2 rounded-2xl w-full text-neutral-50 border-2 border-black hover:border-neutral-50 transition-colors duration-300 text-center">
          <h1 className="text-lg">Tickets</h1>
        </button>
      </a>
    </div>
  );
}
