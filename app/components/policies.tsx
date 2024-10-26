export default function Policies() {
  return (
    <div className="w-full px-12 max-w-screen-xl">
      <ul className="text-sm mb-8 text-gray-200 flex flex-col lg:flex-row flex-wrap gap-2 lg:gap-1 lg:space-x-8 justify-center items-start bg-gray-200/40 p-4 rounded-xl w-full lg:px-12">
        <div className="">
          <li className="mb-0">All tickets are general admission.</li>
          <li className="mb-0">Recommended for ages 15 and up.</li>
        </div>
        <div className="">
          <li className="mb-0">
            Late seating at the discretion of management.
          </li>
          <li className="mb-0">The Den has a nice bar, come early.</li>
        </div>
        <div className="">
          <li className="mb-0">The show runs 95 minutes.</li>
          <li className="mb-0">There is no intermission.</li>
        </div>
      </ul>
      <div className="">
        <p className="text-center text-gray-200">
          Mr. Dickens can&apos;t wait to meet you!
        </p>
      </div>
    </div>
  );
}
