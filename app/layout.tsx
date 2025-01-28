import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Nav from "../components/nav";
import Footer from "../components/footer";

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Charles Dickens Begrudgingly Performs A CHRISTMAS CAROL Again",
  description:
    "Blake Montgomery's Jeff Award-winning solo show returns to Chicago at The Den Theatre, December 5-22, 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${baskerville.className} h-screen w-screen flex flex-col`}
      >
        <Nav />
        <div className="w-full flex-1 min-h-0 overflow-auto bg-victorian-texture bg-no-repeat bg-cover bg-fixed">
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
