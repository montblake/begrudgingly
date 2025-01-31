import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-neutral-200 border-neutral-300">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold">
          Logo
        </Link>

        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/"
                className="text-sm font-medium hover:text-primary/80"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-primary/80"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-primary/80"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
