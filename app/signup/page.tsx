import React from "react";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-black">
      <div className="p-4">
        <Link
          href="/"
          className="text-gray-500 hover:underline transition duration-300"
        >
          ← Back to Home
        </Link>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Join Our Mailing List
          </h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-300 text-black py-2 rounded-md hover:bg-amber-400 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
