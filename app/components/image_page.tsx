import Image from 'next/image';

interface ImagePageProps {
  page: "zero" | "one" | "two" | "three" | "four";
}

export default function ImagePage({ page }: ImagePageProps) {

  const lookup = {
    zero: "/charles-full.jpg",
    one: "/dickens_color4.jpg",
    two: "/dickens_color2.jpg",
    three: "/dickens_color5.jpg",
    four: "/dickens_color3.jpg"
  }

  return (
    <section className="flex justify-center items-center w-full">

      {/* UNDER TABLE IMAGE AS BACKGROUND */}
      <div className=" relative overflow-hidden w-full">
        <Image
          src={lookup[page]}
          alt="Dickens Production Image"
          height="1000"
          width="1000"
          className="w-full"
        />
      </div>

    </section>

  );
}