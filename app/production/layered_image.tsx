import Image from "next/image";
import { usePathname } from "next/navigation";

export default function LayeredImage() {
  const pathname = usePathname();

  return (
    <div className="relative w-full h-full">
      <Image
        src="/dickens_layers/layered_cropped.png"
        alt="Dickens 2024 Publicity Image"
        fill
        className="object-contain"
        priority
      />

      <Image
        src="/dickens_layers/border_layer_new.png"
        alt="Dickens 2024 Publicity Image"
        fill
        className="object-contain"
        priority
      />

      {pathname === "/production" && (
        <Image
          src="/dickens_layers/venue_layer_new.png"
          alt="Dickens 2024 Publicity Image"
          fill
          className="object-contain"
          priority
        />
      )}

      <Image
        src="/dickens_layers/layered_title.png"
        alt="Dickens 2024 Publicity Image"
        fill
        className="object-contain"
        priority
      />

      <Image
        src="/dickens_layers/layered_credits.png"
        alt="Dickens 2024 Publicity Image"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
