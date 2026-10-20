import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display_SC, Lato } from "next/font/google";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Sandesa 2.0",
  description: "Editor website",
};

const playfairSC = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-sc",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairSC.variable} ${lato.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
