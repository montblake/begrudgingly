import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "shadow-dickens":
          "url('/photos/bravelux/100-joe-mazza-chicago-brave-lux-inc-5206928.jpg')",
        "victorian-texture": "url('/victorian-texture.webp')",
      },
      textShadow: {
        "shadow-dickens": "0 0 4px rgba(0, 0, 0, 1)",
      },
      colors: {
        "title-start": "#dcbf7d",
        "title-middle": "cba95f",
        "title-end": "#b48a34",
      },
    },
  },
  plugins: [],
};
export default config;
