import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/header";

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true, // self-hosted via next/font, no gstatic chain
});

export const metadata = {
  metadataBase: new URL("https://www.dickensagain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for analytics (non-blocking) */}
        <link
          rel="preconnect"
          href="https://vitals.vercel-insights.com"
          crossOrigin=""
        />
      </head>
      <body
        className={`${baskerville.className} antialiased h-screen flex flex-col justify-start items-center bg-victorian-texture bg-no-repeat bg-cover bg-fixed bg-center`}
      >
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
