import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const baskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "Charles Dickens Begrudgingly",
  description: "The Award-Winning Holiday Show, CHARLES DICKENS BEGRUDGINGLY PERFORMS 'A CHRISTMAS CAROL' AGAIN, created and performed by Blake Montgomery returns to the Chicago stage in 2024.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={baskerville.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
