import "./globals.css";
import { Space_Mono } from "next/font/google";
import type React from "react"; // Import React

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my web development portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceMono.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
