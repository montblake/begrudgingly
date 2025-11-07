import Link from "next/link";
import {
  Mail,
  Camera,
  Glasses,
  PersonStanding as Creator,
  Cone as Spotlight,
  CircleUser as Contact,
  ScrollText as Program,
} from "lucide-react";

// Build icon map dynamically based on what's actually used
const buildIconMap = (iconNames: string[]) => {
  const iconMap: Record<string, JSX.Element> = {};

  iconNames.forEach((iconName) => {
    switch (iconName) {
      case "mail":
        iconMap.mail = <Mail className="w-4 h-4" />;
        break;
      case "camera":
        iconMap.camera = <Camera className="w-4 h-4" />;
        break;
      case "glasses":
        iconMap.glasses = <Glasses className="w-4 h-4" />;
        break;
      case "creator":
        iconMap.creator = <Creator className="w-4 h-4" />;
        break;
      case "spotlight":
        iconMap.spotlight = <Spotlight className="w-4 h-4" />;
        break;
      case "contact":
        iconMap.contact = <Contact className="w-4 h-4" />;
        break;
      case "program":
        iconMap.program = <Program className="w-4 h-4" />;
        break;
    }
  });

  return iconMap;
};

export default function CTAElement({
  intro,
  links,
}: {
  intro: string;
  links: { href: string; text: string; internal: boolean; icon: string }[];
}) {
  // Extract unique icon names from links and build icon map
  // This ensures only icons actually used by the parent page are included
  const uniqueIcons = Array.from(new Set(links.map((link) => link.icon)));
  const iconMap = buildIconMap(uniqueIcons);

  return (
    <div className="w-[100%] lg:w-[80%] mx-auto md:mx-0 mt-4 md:mt-1 flex flex-col items-start gap-2  from-neutral-800/75 to-neutral-950/75 pt-4 pb-4 px-0 rounded-xl  border-neutral-600 drop-shadow-lg">
      {intro !== "" && (
        <p className="text-xs md:text-sm text-neutral-300">{intro}</p>
      )}
      <div className="w-full flex flex-col gap-2">
        {links &&
          links.map((link) => (
            <div key={link.href} className="w-full">
              {link.internal ? (
                <Link
                  href={link.href}
                  className="bg-gradient-to-br from-yellow-200/75 to-yellow-900/75 text-neutral-950 text-xs font-bold px-4 py-4 rounded-xl  active:scale-95 transition-all duration-300 w-full flex items-center justify-center drop-shadow-md"
                >
                  {iconMap[link.icon]}
                  <span className="ml-2">{link.text}</span>
                </Link>
              ) : (
                <a
                  href="mailto:dickens@dickensagain.com"
                  className="bg-gradient-to-br from-yellow-200/75 to-yellow-900/75 text-neutral-950 font-bold text-xs px-4 py-3 rounded-xl hover:bg-neutral-300 active:scale-95 transition-all duration-300 w-full flex items-center justify-center gap-2 drop-shadow-md"
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
