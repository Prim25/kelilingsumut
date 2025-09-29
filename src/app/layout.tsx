import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Flutter from "../components/Flutter";
import { ArticleProvider } from "@/context/ArticleContext";

const fontbri = Bricolage_Grotesque({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keliling Sumut",
  description: "Keliling Sumut",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontbri.variable} ${fontMono.variable} antialiased`}>
        <ArticleProvider>
          <Navbar />
          {children}
          <Flutter />
        </ArticleProvider>
      </body>
    </html>
  );
}
