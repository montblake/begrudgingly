import Image from 'next/image';

interface ImagePageProps {
  page: "one" | "two" | "three";
}

export default function ImagePage({ page }: ImagePageProps) {

  const lookup = {
    one: "/dickens_color4.jpg",
    two: "/dickens_color2.jpg",
    three: "/dickens_color5.jpg",
    four: "/dickens_color3.jpg"
  }

  return (
    <section className="bg-black flex justify-center items-center">

      {/* UNDER TABLE IMAGE AS BACKGROUND */}
      <div className="bg-green-400 w-full">
        <Image
          src={lookup[page]}
          alt="Dickens Production Image"
          height="500"
          width="500"
          className="w-full"
        />
      </div>

    </section>

  );
}