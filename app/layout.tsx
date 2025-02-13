import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/header";
import Footer from "../components/footer";
import ScrollToTop from "../components/scroll_to_top";

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
        className={`${baskerville.className} antialiased h-screen flex flex-col bg-victorian-texture bg-no-repeat bg-cover bg-fixed bg-center overflow-x-hidden`}
      >
        <ScrollToTop />
        <Header />
        <div className="flex-1 overflow-y-scroll">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
