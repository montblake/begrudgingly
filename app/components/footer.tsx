export default function Footer() {
  return (
    <section className="  flex flex-col justify-start items-center px-12 md:px-24 py-12">

      <h2 className="uppercase text-sm text-amber-200">Contact</h2>
      <div className="text-neutral-200 text-sm py-8">

        <p>While this is a "one-man show", it certainly cannot be a "one-man operation." Currently, I am seeking a venue for this year's performances as well as members of the sales/marketing team supporting the production.</p>
        <div className="flex flex-col items-start pt-4">

          <p>Blake Montgomery</p>
          <p>performer, creator, producer</p>
        </div>
      </div>
      <a href="mailto:blakemontgomery312@gmail.com?subject=Charles Dickens Begrudgingly...">
        <button
          className="border border-amber-200 text-amber-200 rounded-full px-4 py-1 md:px-8 md:py-2 text-sm tracking-tight uppercase md:text-lg">Get In Touch</button>
      </a>
    </section >
  );
}