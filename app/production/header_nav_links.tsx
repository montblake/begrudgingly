interface NavLink {
  href: string;
  title: string;
  description: string;
}

export default function HeaderNavLinks({
  navLinks,
  pathname,
}: {
  navLinks: NavLink[];
  pathname: string;
}) {
  return (
    <ul className="hidden md:flex space-x-2 lg:space-x-4 items-center">
      {navLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className={`text-xs lg:text-sm  ${
              pathname === link.href
                ? "font-bold text-neutral-200"
                : "text-neutral-400 hover:text-neutral-300 active:underline"
            }`}
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
