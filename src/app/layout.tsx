import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Flutter from "../components/Flutter";
import { ArticleProvider } from "@/context/ArticleContext";
import { DestinationProvider } from "@/context/ArticleDestinasi";

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
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Tag head lain jika ada */}
      </head>
      <body className={`${fontbri.variable} ${fontMono.variable} antialiased`}>
        <DestinationProvider>
          <ArticleProvider>
            <Navbar />
            {children}
            <Flutter />
          </ArticleProvider>
        </DestinationProvider>
      </body>
    </html>
  );
}