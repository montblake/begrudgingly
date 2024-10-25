export default function SecondNav() {
  return (
    <div className="flex flex-row justify-center items-start gap-2 text-xs lg:text-sm text-black font-bold mb-16 mt-4 lg:mt-8 w-full">
      {/* <a href="/explore">
        <button className="bg-amber-300/80 px-4 py-2 rounded-2xl w-full text-gray-50 border-2 border-black hover:border-gray-50 transition-colors duration-300 text-center">
          Explore
          <br /> Show
        </button>
      </a> */}
      <a href="/performances">
        <div className="bg-amber-300/80 px-4 py-2 rounded-xl w-full text-gray-50 border-2 border-black hover:border-gray-50 transition-colors duration-300 text-center">
          Performances
        </div>
      </a>
      <a href="/artist">
        <button className="bg-amber-300/80 px-4 py-2 rounded-xl w-full text-gray-50 border-2 border-black hover:border-gray-50 transition-colors duration-300 text-center">
          Meet the Artist
        </button>
      </a>
    </div>
  );
}
