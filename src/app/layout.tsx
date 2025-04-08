import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Poke Explorer",
  description:
    "Explore all Pokémon with our fast and responsive Pokémon Explorer app. Search, browse, and view detailed info powered by PokeAPI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <div className="main-container w-full min-h-dvh flex flex-col items-center justify-start ">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
