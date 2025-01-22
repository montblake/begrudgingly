// import Link from "next/link";
// import BuyButton from "./buy_button";

export default function Footer() {
  return (
    <div className="w-full hidden md:block fixed bottom-0 left-0 h-fit z-100 z-50">
      {/* <div className="w-full h-4 bg-gradient-to-b from-transparent to-neutral-950" /> */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-x-4 gap-y-2  text-neutral-400 z-50 bg-neutral-800 px-4 pt-8 sm:py-2 py-2 border-t border-neutral-600">
        {/* <div className="flex flex-col w-full justify-start items-start md:flex-row md:justify-between">
        <div className="flex flex-col w-full"> */}
        <h1 className="text-xs italic inline-block">
          Charles Dickens Begrudgingly{" "}
          <span className="inline-block sm:inline">
            Performs &lsquo;A Christmas Carol&rsquo; Again.
          </span>
        </h1>
        <p className="text-xs inline-block">
          Created and performed by Blake Montgomery.
        </p>
        {/* </div>
      </div> */}

        {/* <hr className="w-full border-neutral-600 border-t-1 my-4 md:hidden" /> */}
        {/* <div className="flex flex-row items-center justify-start space-x-2 mt-4 md:mt-0">
          <a
            href="mailto:dickens@dickensagain.com"
            className="bg-neutral-300 border border-neutral-400 hover:bg-neutral-100 rounded-md p-2 text-neutral-900 text-xs aspect-square h-16"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
            </svg>
          </a>
          <div className="flex space-x-2 justify-start w-full">
            <a
              href="https://www.facebook.com/people/DickensAgain/61567779243511/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-300 border border-neutral-400 hover:bg-neutral-100 rounded-md p-2 text-neutral-900 text-xs aspect-square h-16"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/dickensagain"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-300 border border-neutral-400 hover:bg-neutral-100 rounded-md p-2 text-neutral-900 text-xs aspect-square h-16"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div> */}
        <a
          href="https://thisisaclownshow.com"
          target="_blank"
          className="hover:text-red-600"
        >
          {/* <hr className="w-full border-neutral-600 border-t-1" /> */}
          {/* <div className="text-xs md:text-sm"> */}
          <p className="text-xs inline-block">
            This is a <span className="font-bold">clownshow</span>.
          </p>
          {/* </div> */}
        </a>
      </div>
    </div>
  );
}
