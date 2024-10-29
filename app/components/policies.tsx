import Image from "next/image";

export default function Popcies() {
  return (
    <div className="w-full px-12 max-w-screen-xl mt-4 relative flex flex-col justify-center items-center py-8">
      <Image
        src="/decoration.png"
        alt="Victorian Decoration"
        width={40}
        height={40}
        className="w-16 h-auto"
      />
      <div className="pt-2 flex flex-col justify-center items-center">
        <p className="mb-0">All tickets are general admission.</p>
        <p className="mb-0">Recommended for ages 15 and up.</p>
      </div>

      <div className="flex flex-col justify-center items-center relative py-4">
        <hr className="w-1/3 border-gray-600 border-t-1 mb-4" />
        <p className="mb-0">Late seating at the discretion of management.</p>
        <p className="mb-0">The Den has a nice bar, come early.</p>
        <hr className="w-1/3 border-gray-600 border-t-1 mt-4" />
      </div>

      <div className="pb-2 flex flex-col justify-center items-center">
        <p className="mb-0">The show runs 95 minutes.</p>
        <p className="mb-0">There is no intermission.</p>
      </div>

      <Image
        src="/decoration.png"
        alt="Victorian Decoration"
        width={40}
        height={40}
        className="w-16 h-auto rotate-180"
      />

      <div className="pt-12">
        <p className="text-center text-gray-200">
          Mr. Dickens can&apos;t wait to meet you!
        </p>
      </div>
    </div>
  );
}
