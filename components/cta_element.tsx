import {
  Mail,
  Camera,
  Newspaper,
  Glasses,
  Lightbulb,
  Cone as Spotlight,
  // PersonStanding as Performer,
  PersonStanding as Performer,
  ScrollText as Program,
  ReceiptText as Booking,
  CircleUser as Contact,
} from "lucide-react";
import Link from "next/link";

const iconMap = {
  mail: <Mail className="w-4 h-4" />,
  camera: <Camera className="w-4 h-4" />,
  newspaper: <Newspaper className="w-4 h-4" />,
  glasses: <Glasses className="w-4 h-4" />,
  lightbulb: <Lightbulb className="w-4 h-4" />,
  spotlight: <Spotlight className="w-4 h-4" />,
  performer: <Performer className="w-4 h-4" />,
  program: <Program className="w-4 h-4" />,
  booking: <Booking className="w-4 h-4" />,
  contact: <Contact className="w-4 h-4" />,
};

export default function CTAElement({
  intro,
  links,
}: {
  intro: string;
  links: { href: string; text: string; internal: boolean; icon: string }[];
}) {
  return (
    <div className="w-[100%] lg:w-[80%] mx-auto md:mx-0 mt-4 flex flex-col items-start gap-4 bg-gradient-to-br from-neutral-100/75 to-neutral-500/75 pt-4 pb-8 px-8 rounded-xl border border-neutral-500 drop-shadow-md">
      <p className="text-xs text-neutral-950">{intro}</p>
      <div className="w-full flex flex-col gap-2">
        {links &&
          links.map((link) => (
            <div key={link.href} className="w-full">
              {link.internal ? (
                <Link
                  href={link.href}
                  className="bg-neutral-900 border border-neutral-500 text-neutral-400 text-xs px-4 py-4 rounded-xl hover:text-neutral-200 transition-all duration-300 ease-in-out active:scale-95 w-full flex items-center justify-center drop-shadow-md"
                >
                  {iconMap[link.icon as keyof typeof iconMap]}
                  <span className="ml-2">{link.text}</span>
                </Link>
              ) : (
                <a
                  href="mailto:dickens@dickensagain.com"
                  className="bg-neutral-900 border border-neutral-500 text-neutral-400 hover:text-neutral-200 text-xs px-4 py-3 rounded-xl hover:text-neutral-300 transition-all duration-300 ease-in-out active:scale-95 w-full flex items-center justify-center gap-2 drop-shadow-md"
                >
                  <Mail className="w-4 h-4" />
                  <span className="ml-0">{link.text}</span>
                </a>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
