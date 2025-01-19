import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

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
      <body className={`${baskerville.className} bg-neutral-300`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
