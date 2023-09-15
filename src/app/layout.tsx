import "reflect-metadata";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";

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
        className={`${inter.className} h-auto [&>*]:px-[5%] md:[&>*]:px-[10%] md:[&>*]pt-8 dark:bg-gray-800`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
