import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "shadow-dickens":
          'url("/photos/bravelux/100-joe-mazza-chicago-brave-lux-inc-5206928.jpg")',
        "victorian-texture": "url('/victorian-texture_darker.webp')",
        "red-dickens": 'url("/red-dickens-2.jpg")',
      },
      textShadow: {
        "shadow-dickens": "0 0 4px rgba(0, 0, 0, 1)",
      },
      colors: {
        "title-start": "#dcbf7d",
        "title-middle": "cba95f",
        "title-end": "#b48a34",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
