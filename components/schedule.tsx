import Image from "next/image";
import OnSaleButtonMobile from "./on-sale_button_mobile";
import OnSaleButtonMedium from "./on-sale_button_medium";

// Helper function to check if a date has passed
function isDatePassed(
  day: number,
  month: number,
  hour: number,
  minute: number
): boolean {
  const now = new Date();
  const performanceDate = new Date(2025, month - 1, day, hour, minute);
  return performanceDate < now;
}

// Helper function to parse time string (e.g., "8pm" -> { hour: 20, minute: 0 })
function parseTime(timeStr: string): { hour: number; minute: number } {
  const match = timeStr.match(/(\d+)(pm|am)/i);
  if (!match) return { hour: 20, minute: 0 }; // default to 8pm

  let hour = parseInt(match[1]);
  const period = match[2].toLowerCase();

  if (period === "pm" && hour !== 12) {
    hour += 12;
  } else if (period === "am" && hour === 12) {
    hour = 0;
  }

  return { hour, minute: 0 };
}

export default function Schedule() {
  const performances = [
    { day: 4, month: 12, time: "8pm", note: "[1]" },
    { day: 5, month: 12, time: "8pm", note: "[1]" },
    { day: 6, month: 12, time: "8pm", note: "[1]" },
    { day: 7, month: 12, time: "7pm", note: "[2]", mb: true },
    { day: 11, month: 12, time: "8pm" },
    { day: 12, month: 12, time: "8pm" },
    { day: 13, month: 12, time: "8pm" },
    { day: 14, month: 12, time: "3pm", mb: true },
    { day: 18, month: 12, time: "8pm", note: "[3]" },
    { day: 19, month: 12, time: "8pm" },
    { day: 20, month: 12, time: "8pm" },
    { day: 21, month: 12, time: "3pm", mb: true },
    { day: 26, month: 12, time: "8pm" },
    { day: 27, month: 12, time: "3pm" },
    { day: 27, month: 12, time: "8pm" },
    { day: 28, month: 12, time: "3pm" },
  ];

  const dayNames = [
    { short: "Sun", full: "Sunday" },
    { short: "Mon", full: "Monday" },
    { short: "Tue", full: "Tuesday" },
    { short: "Wed", full: "Wednesday" },
    { short: "Thu", full: "Thursday" },
    { short: "Fri", full: "Friday" },
    { short: "Sat", full: "Saturday" },
  ];

  return (
    <div className="w-full mt-4 md:pr-2 md:pl-6">
      <div className="w-full h-auto flex flex-row justify-center items-start gap-8 md:gap-12 px-4 pt-4 md:pt-8 pb-6 md:pb-12 md:px-8 bg-gradient-to-b from-amber-200/80 via-amber-400/80 to-amber-500/80 rounded-t-xl md:rounded-xl overflow-hidden">
        <div className="w-1/3 md:w-1/4 h-auto self-stretch flex flex-col items-between justify-between gap-0 pl-0">
          <div className="w-full flex flex-col items-start justify-center gap-0">
            <h2 className="text-4xl md:text-7xl tracking-tighter font-bold text-neutral-950 text-center">
              2025
            </h2>
            <h3 className="text-xs md:text-xl tracking-tighter md:-mt-2 font-bold uppercase text-neutral-950 text-center">
              Performances
            </h3>
            <p className="text-xs md:text-sm mt-4">at</p>
            <div className="flex flex-col items-start justify-center gap-0">
              <h2 className="text-base md:text-lg font-bold">Theater Wit</h2>
              <p className="text-xs md:text-base">1229 W. Belmont</p>
              <p className="text-xs md:text-base mb-4">Chicago, IL 60657</p>
              <h3 className="text-xs md:text-sm font-bold uppercase">
                Box Office
              </h3>
              <a
                href="tel:773-975-8150"
                className="text-xs md:text-base hover:border-b border-neutral-950"
              >
                (773) 975-8150
              </a>
              <a
                href="https://theaterwit.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-base hover:border-b border-neutral-950"
              >
                theaterwit.org
              </a>
            </div>
          </div>
          <div className="w-full md:w-[80%] aspect-square flex flex-col items-center justify-center gap-0 rounded-xl p-0 relative">
            <a
              href="https://thisisaclownshow.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/clownshow_logo_tent.avif"
                alt="This is a clownshow."
                width={200}
                height={200}
                quality={50}
                loading="lazy"
                sizes="(max-width: 768px) 33vw, 25vw"
                className="w-full h-auto object-contain object-center relative -left-0 top-1 md:top-0 opacity-80 rotate-[-4deg] hover:scale-105 transition-all duration-300"
              />
            </a>
          </div>
        </div>
        <div className="w-2/3 md:w-1/2 flex flex-col items-start justify-center gap-0">
          {performances.map((perf, index) => {
            const { hour, minute } = parseTime(perf.time);
            const hasPassed = isDatePassed(perf.day, perf.month, hour, minute);
            const date = new Date(2025, perf.month - 1, perf.day);
            const dayName = dayNames[date.getDay()];

            return (
              <p
                key={index}
                className={`text-xs md:text-base ${perf.mb ? "mb-2" : ""} ${
                  hasPassed ? "line-through" : ""
                }`}
              >
                {dayName.short}
                <span className="hidden md:inline">
                  {dayName.full.slice(3)}
                </span>
                , December {perf.day} at {perf.time}
                {perf.note && (
                  <span className="text-xs md:text-sm"> {perf.note}</span>
                )}
              </p>
            );
          })}

          <hr className="px-8 w-[100%] md:w-[80%] border-neutral-600 my-4" />
          <div className="flex flex-col items-start justify-center gap-0 text-xs md:text-sm">
            <p>[1] Previews, $30</p>
            <p>[2] Opening and Reception, $60</p>
            <p>[3] Archival Video Recording</p>
          </div>
        </div>
        <OnSaleButtonMedium />
      </div>

      <OnSaleButtonMobile />
    </div>
  );
}
