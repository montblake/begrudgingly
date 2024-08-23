type CallToActionProps = {
  context: 'booking' | 'landing'
}

const CALLS = {
  landing: {
    title: "Stay in the Loop",
    bulletPoints: [
      "Follow Mr. Dickens as he explores Chicago",
      "Inside the production: Follow Blake Montgomery as he revives and revises",
      "Ticket Discouts, special events, and more"
    ],
    buttonText: "Follow Dickens"
  },
  booking: {
    title: "Now Booking for the holidays in q2024 and 2025",
    bulletPoints: [
      "Depending on availability and house size, performances could be held the weekend, week, or few weeks leading up to December 25.",
      "Open to discuss both straight rental and presentation/co-production arrangements",
    ],
    buttonText: "Contact Us"
  }
}


export default function CallToAction({ context }: CallToActionProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-neutral-700 rounded-lg p-8 sm:p-16 md:p-24 text-neutral-200 mt-4 landscape:p-8 landscape:mt-0 landscape:w-1/3 lg:p-8 lg:mt-0 lg:w-1/3">

      <p className="text-lg sm:text-xl md:text-2xl tracking-tight uppercase text-center landscape:text-xl lg:text-xl">{CALLS[context].title}</p>
      <ul className="text-xs sm:text-sm md:text-base lg:text-sm landscape:text-sm list-disc list-outside p-4 flex flex-col gap-2 text-neutral-200">

        {CALLS[context].bulletPoints.map((bp, i) => (
          <li key={i}>{bp}</li>
        ))}
      </ul>

      <div className="">

        <a href="mailto:blakemontgomery312@gmail.com?subject=Charles Dickens Begrudgingly">
          {/* <Mail color="black" size={32} strokeWidth="2" /> */}
          <button className="text-neutral-800 bg-amber-200/80  hover:bg-amber-200 active:bg-amber-200 py-2 px-4 rounded-lg font-bold uppercase whitespace-nowrap">{CALLS[context].buttonText}</button>
        </a>
      </div>

    </div>
  );
}