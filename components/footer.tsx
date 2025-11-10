import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-neutral-800 border-t border-neutral-700 p-8">
      <h2 className="text-xs md:text-base font-bold text-center text-neutral-300 mb-4">
        Join our mailing list for updates and special ticket offers!
      </h2>
      <a
        href="http://eepurl.com/i2jCO2"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center mb-0"
      >
        <div className="w-16 h-16 md:w-24 md:h-24 p-4 rounded-full flex flex-col items-center justify-center gap-1 bg-gradient-to-b from-amber-400/80 via-amber-500/80 to-amber-600/80 border-2 border-black hover:scale-105 transition-all duration-300 active:border-neutral-300 text-neutral-950 active:text-neutral-300">
          <Mail size={36} />
          {/* <span className="hidden md:block text-sm font-bold uppercase">
            Subscribe
          </span> */}
        </div>
      </a>
    </div>
  );
}
