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
        "cover-dickens": "url('/dickens_newcover.jpg')",
        "footer-dickens": "url('/final_half_dickens.jpg')",
        "under-dickens": "url('/dickens_color4.jpg')",
        "victorian-texture": "url('/victorian-texture.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
