import Image from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  border: boolean;
  caption: string;
  rel_x: number;
  rel_y: number;
};

export default function SpecialImage({
  src,
  alt,
  width,
  height,
  border,
  caption,
  rel_x,
  rel_y,
}: ImageProps) {
  return (
    <div
      className={`w-full py-4 px-6 relative flex flex-col gap-2 md:px-0 md:translate-x-[var(--rel-x)] md:-translate-y-[var(--rel-y)]`}
      style={
        {
          "--rel-x": `${rel_x}px`,
          "--rel-y": `${rel_y}px`,
        } as React.CSSProperties
      }
    >
      <Image
        className={`w-full max-w-[360px] md:max-w-[500px] mx-auto rounded-2xl drop-shadow-lg ${
          border ? "border border-neutral-600" : ""
        }`}
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
      />
      {caption && (
        <p className="text-center text-xs text-neutral-400 italic drop-shadow-xl">
          {caption}
        </p>
      )}
    </div>
  );
}
