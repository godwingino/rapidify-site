import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rapidify | Digital Marketing and SMM",
  description: "Grow your business with Rapidify, a SMMA & development studio.",
  openGraph: {
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: 'Rapidify Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>

        {children}
        <Analytics />

      </body>
    </html>
  );
}
