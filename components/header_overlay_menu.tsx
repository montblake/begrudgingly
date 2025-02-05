interface NavLink {
  href: string;
  label: string;
  desktopLabel: string | ReactNode;
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
          <div className="fixed right-0 top-0 h-full w-96 bg-neutral-200 p-4">
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
            <ul className="mt-8 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block uppercase text-neutral-600 hover:underline ${
                      pathname === link.href ? "font-bold text-neutral-900" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <hr className="w-full border-neutral-600 my-24" />
            <div className="w-full h-full flex flex-col justify-start items-start gap-4 text-neutral-600">
              <div className="flex flex-col justify-start items-start gap-0 font-bold">
                <h1>Charles Dickens Begrudingly</h1>
                <h2>
                  Performs <span className="italic">A Christmas Carol</span>{" "}
                  Again
                </h2>
              </div>
              <p>
                Created and performed by <br />
                <span className="">Blake Montgomery</span>
              </p>
              <hr className="w-full border-neutral-600 my-24" />
              <p>
                This is a{" "}
                <a
                  href="https://www.thisisaclownshow.com"
                  className="underline"
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
