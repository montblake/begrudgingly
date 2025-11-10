import Image from "next/image";
import Link from "next/link";

export default function HeaderLogo() {
  return (
    <Link
      href="/"
      aria-label="Home"
      className="text-neutral-200 flex items-center"
    >
      <Image
        src="/cdb_logo.avif"
        alt="Home"
        width={200}
        height={32}
        quality={50}
        loading="lazy"
        className={`h-4 w-auto relative z-100 -top-[1px] opacity-90 mix-blend-screen`}
      />
    </Link>
  );
}
