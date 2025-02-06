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
    <>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-neutral-950 bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-96 bg-neutral-200 p-8 flex flex-col justify-between">
            <button
              onClick={toggleMenu}
              className="absolute top-2 right-2 text-neutral-600"
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
            <div>
              <ul className="mt-0 space-y-2 text-lg">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    {link.href !== "" ? (
                      <Link
                        href={link.href}
                        className={`block capitalize ${
                          pathname === link.href
                            ? "text-neutral-950 font-bold"
                            : "text-neutral-600 hover:underline"
                        }`}
                      >
                        {link.title}
                      </Link>
                    ) : (
                      <div className="block capitalize text-neutral-400">
                        {link.title}
                        <ul className="flex flex-col space-y-2 pl-4">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              className="text-neutral-700 hover:underline"
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
              <hr className="w-full border-neutral-600 mt-12" />
            </div>
            <div className="w-full flex flex-col justify-between items-start gap-4 text-neutral-800">
              <div className="flex flex-col justify-start items-start gap-0 font-bold mb-12">
                <h1 className="text-2xl">
                  Charles Dickens
                  <br />
                  Begrudingly Performs
                  <br />
                  <span className="italic">A Christmas Carol</span> Again
                </h1>
                <p className="text-xs mt-4">
                  created and performed by <br />
                  <span className="text-lg">Blake Montgomery</span>
                </p>
              </div>

              <p className="text-xs hover:scale-110 active:text-red-600 transition-all duration-300">
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
      )}
    </>
  );
}
