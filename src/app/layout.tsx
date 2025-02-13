import "./globals.css";
import { Jersey_10 } from "next/font/google";
import type React from "react";

const jersey = Jersey_10({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Kabir's Portfolio",
  description: "Welcome to my web portfolio!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jersey.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
