import "reflect-metadata";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Myolang Blog",
  description: "Myolang Blog",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-auto [&>*]:px-[5%] md:[&>*]:px-[10%] md:[&>*]pt-8 dark:bg-gray-800`}
      >
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
