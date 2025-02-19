import {
  Mail,
  Camera,
  Newspaper,
  Glasses,
  Lightbulb,
  Cone as Spotlight,
  // PersonStanding as Performer,
  User as Performer,
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
};

export default function PhotoNav({
  links,
}: {
  links: { href: string; text: string; internal: boolean; icon: string }[];
}) {
  return (
    <div className="w-[80%] max-w-[400px] mx-auto md:mx-0 mt-8 flex flex-col items-start gap-4  drop-shadow-md">
      {/* <p className="text-xs text-neutral-950">{intro}</p> */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-2">
        {links &&
          links.map((link) => (
            <div key={link.href} className="w-full">
              {link.internal ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-gradient-to-br from-yellow-200/75 to-yellow-900/75 text-neutral-950 text-xs font-bold px-4 py-4 rounded-xl hover:bg-neutral-300 active:scale-95 transition-all duration-300 w-full flex items-center justify-center drop-shadow-md"
                >
                  {iconMap[link.icon as keyof typeof iconMap]}
                  <span className="ml-2">{link.text}</span>
                </Link>
              ) : (
                <a
                  href="mailto:dickens@dickensagain.com"
                  className="bg-gradient-to-br from-yellow-200/75 to-yellow-900/75 text-neutral-950 hover:text-neutral-200 text-xs px-4 py-3 rounded-xl hover:bg-neutral-300 active:scale-95 transition-all duration-300 w-full flex items-center justify-center gap-2 drop-shadow-lg"
                >
                  <Mail className="w-4 h-4" />
                  <span className="ml-2">{link.text}</span>
                </a>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
