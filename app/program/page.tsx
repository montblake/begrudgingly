import React from "react";

export default function Program() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-black p-12">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-center mb-12">
          <span className="text-4xl">Charles Dickens</span>
          <br />
          <span className="text-6xl">Begrudgingly</span>
          <br />
          <span className="text-xl relative top-[8px]">
            Performs <span className="italic">A Christmas Carol</span> Again
          </span>
        </h1>
        <div className="flex flex-col items-center justify-center mb-8">
          <h5 className="text-base italic">created and performed by</h5>
          <h2 className="text-2xl font-bold">Blake Montgomery</h2>
        </div>
        <div className="flex flex-col items-center justify-center mb-8">
          <h5 className="text-base italic">scenic design</h5>
          <h2 className="text-xl font-bold mb-2">Pamela Maurer</h2>
          <h5 className="text-base italic">costume design</h5>
          <h2 className="text-xl font-bold mb-2">Izumi Inaba</h2>
          <h5 className="text-base italic">wig design</h5>
          <h2 className="text-xl font-bold mb-2">Megan E. Pirtle</h2>
          <h5 className="text-base italic">lighting design</h5>
          <h2 className="text-xl font-bold mb-2">Emmitt Socey</h2>
          <h5 className="text-base italic">sound design</h5>
          <h2 className="text-xl font-bold">Oskar Westbridge</h2>
        </div>
        <div className="flex flex-col items-center justify-center mb-8">
          <h5 className="text-base italic">ghost of rehearsals present</h5>
          <h2 className="text-xl font-bold">George Keating</h2>
        </div>

        <div className="flex flex-col items-center justify-center mb-8">
          <h5 className="text-base italic">stage management</h5>
          <h2 className="text-xl font-bold mb-2">Jake Snell</h2>

          <h5 className="text-base italic">Production Electrician</h5>
          <h2 className="text-xl font-bold mb-2">Hannah Kwak</h2>
          <h5 className="text-base italic">board operator</h5>
          <h2 className="text-xl font-bold mb-2">
            Thompson MacKenzie Scribner
          </h2>
          <h5 className="text-base italic">electrician</h5>
          <h2 className="text-xl font-bold mb-2">Hazel Matteson</h2>
          <h5 className="text-base italic">prompt book fabrication</h5>
          <h2 className="text-xl font-bold mb-2">Sion Silva</h2>
        </div>
        <div className="flex flex-col items-center justify-center mb-8">
          <h5 className="text-base italic">House Management</h5>
          <h2 className="text-xl font-bold mb-2">Andrew Snyder</h2>
          <h5 className="text-base italic">Marketing and Media</h5>
          <h2 className="text-xl font-bold mb-2">SHOUT Marketing</h2>
        </div>
        <div className="flex flex-col items-center justify-center mb-8">
          <h5 className="text-base italic">special thanks to</h5>
          <h2 className="text-base font-bold text-center">
            Chelsea Keenan, Lee Keenan,
            <br />
            Lauren Pizzi, Mieka Van Der Ploeg
          </h2>
        </div>
      </div>
    </div>
  );
}
