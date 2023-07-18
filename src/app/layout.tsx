import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/common/NavBar";
import "reflect-metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Myolang Blog",
  description: "Myolang Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} h-auto px-[10%] pt-8 dark:bg-gray-800`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
