export default function SecondNav() {
  return (
    <div className="flex flex-col justify-center items-start gap-2 text-xs lg:text-sm text-black w-full mix-blend-screen">
      <div className="flex flex-col justify-center items-center gap-2 text-xs lg:text-sm text-black w-full">
        <p className="text-neutral-400 text-xs font-normal">
          production credits and company biographies
        </p>
        <a href="/performances">
          <div className="bg-gradient-to-b from-amber-600/80 to-amber-900/80 px-4 py-2 rounded-xl w-full text-neutral-300 border-2 border-black hover:border-neutral-50 transition-colors duration-300 text-center">
            digital program
          </div>
        </a>
      </div>
      <a href="/explore">
        <button className="bg-gradient-to-b from-amber-600/80 to-amber-900/80 px-4 py-2 rounded-xl w-full text-neutral-300 border-2 border-black hover:border-neutral-50 transition-colors duration-300 text-center">
          Press Reviews, excerpts and links
        </button>
      </a>
      <a href="/artist">
        <button className="bg-gradient-to-b from-amber-600/80 to-amber-900/80 px-4 py-2 rounded-xl w-full text-neutral-300 border-2 border-black hover:border-neutral-50 transition-colors duration-300 text-center">
          Publicity photos by Joe Mazza / brave lux inc.
        </button>
      </a>
      <a href="/artist">
        <button className="bg-gradient-to-b from-amber-600/80 to-amber-900/80 px-4 py-2 rounded-xl w-full text-neutral-300 border-2 border-black hover:border-neutral-50 transition-colors duration-300 text-center">
          Photos from first preview by Michael Brosilow.
        </button>
      </a>
    </div>
  );
}
