"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={ `md:px-desk fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
        scrolled
          ? "bg-blue-600/70 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between  py-3">
        {/* Logo */}
        <Link href="/">
          <Image
            src="https://drive.google.com/uc?export=view&id=1LVOBQ1LiUNzB05REzPPW2l5TisKz0_fd"
            alt="Logo Wisata Sumut"
            width={48}
            height={48}
            className="rounded-full border border-white shadow-md object-contain"
            priority
          />
        </Link>

        {/* Menu */}
        <ul className="flex gap-10 text-sm md:text-lg font-medium text-white">
          <li>
            <Link href="/" className="hover:text-green-300 transition-colors">
              Beranda
            </Link>
          </li>
          <li>
            <Link
              href="./artikel"
              className="hover:text-green-300 transition-colors"
            >
              Artikel
            </Link>
          </li>
          <li>
            <Link
              href="./destinasi"
              className="hover:text-green-300 transition-colors"
            >
              Destinasi
            </Link>
          </li>
          <li>
            <Link
              href="/myinfo"
              className="hover:text-green-300 transition-colors"
            >
              Tentang Kami
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
