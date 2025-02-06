import Link from "next/link";

interface NavLink {
  title: string;
  description: string;
  href: string;
  subLinks: NavLink[];
}

export default function HeaderOverlayMenu({
  isMenuOpen,
  toggleMenu,
  navLinks,
  pathname,
}: {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  navLinks: NavLink[];
  pathname: string;
}) {
  return (
    <div
      className={`fixed inset-0 bg-neutral-950/50 transition-opacity duration-300 z-50 ${
        isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed right-0 top-0 h-full w-96 bg-neutral-200 flex flex-col transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-2 right-2 text-neutral-600 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex-1 overflow-y-auto p-8 pb-64">
          <div>
            <ul className="mt-0 space-y-2 text-lg">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href !== "" ? (
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className={`block capitalize ${
                        pathname === link.href
                          ? "text-neutral-950 font-bold"
                          : "text-neutral-600 hover:underline"
                      }`}
                    >
                      {link.title}
                    </Link>
                  ) : (
                    <div className="block text-neutral-600 text-base bg-neutral-100 p-4 rounded-lg">
                      <div className="flex flex-col gap-2 bg-neutral-300 py-2 px-4 rounded-lg">
                        {link.title}
                        <hr className="w-full border-neutral-600 my-1" />
                        <p className="text-xs italic whitespace-pre-line mb-2">
                          {link.description.split("\u2029").map((line, i) => (
                            <span key={i}>
                              {line}
                              {i <
                                link.description.split("\u2029").length - 1 && (
                                <br />
                              )}
                            </span>
                          ))}
                        </p>
                      </div>
                      <ul className="flex flex-col space-y-2 pl-4 mt-2">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            onClick={toggleMenu}
                            className="text-neutral-700 text-lg hover:underline"
                          >
                            {subLink.title}
                          </Link>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <hr className="w-full border-neutral-600 my-6" />
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-4 text-neutral-800">
            <div className="flex flex-col justify-start items-start gap-0 font-bold mb-0">
              <h1 className="text-2xl">
                Charles Dickens
                <br />
                Begrudingly Performs
                <br />
                <span className="italic">A Christmas Carol</span> Again
              </h1>
              <p className="text-xs mt-2">
                created and performed by <br />
                <span className="text-lg">Blake Montgomery</span>
              </p>
            </div>

            <p className="text-xs hover:scale-110 text-red-600 transition-all duration-300">
              This is a{" "}
              <a
                href="https://www.thisisaclownshow.com"
                className=""
                target="_blank"
                rel="noopener noreferrer"
              >
                clownshow
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
