"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // untuk toggle menu mobile
  const pathname = usePathname();

  // Deteksi scroll khusus halaman landing
  useEffect(() => {
    if (pathname === "/") {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);

  const isLanding = pathname === "/";
  const navClass = isLanding
    ? scrolled
      ? "bg-blue-600/70 shadow-md backdrop-blur-md"
      : "bg-transparent"
    : "bg-primary";

  return (
    <nav
      className={`md:px-desk px-mob py-3 fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
        isLanding ? "fixed" : "relative"
      } ${navClass}`}
    >
      <div className="container mx-auto flex items-center justify-between py-1">
        {/* Logo */}
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Image
            src="https://drive.google.com/uc?export=view&id=1LVOBQ1LiUNzB05REzPPW2l5TisKz0_fd"
            alt="Logo Wisata Sumut"
            width={48}
            height={48}
            className="rounded-full border border-white shadow-md object-contain w-10 h-10 sm:w-12 sm:h-12"
            priority
          />
        </Link>

        {/* Tombol hamburger (muncul di mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-10 text-sm md:text-lg font-medium text-white">
          <li>
            <Link href="/" className="hover:text-green-300 transition-colors">
              Beranda
            </Link>
          </li>
          <li>
            <Link
              href="/artikel"
              className="hover:text-green-300 transition-colors"
            >
              Artikel
            </Link>
          </li>
          <li>
            <Link
              href="/destinasi"
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

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden mt-2 px-5 pb-5 bg-blue-600/90 backdrop-blur-md rounded-b-2xl shadow-lg">
          <ul className="flex flex-col gap-4 text-white text-base font-medium">
            <li>
              <Link
                href="/"
                className="hover:text-green-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/artikel"
                className="hover:text-green-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Artikel
              </Link>
            </li>
            <li>
              <Link
                href="/destinasi"
                className="hover:text-green-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Destinasi
              </Link>
            </li>
            <li>
              <Link
                href="/myinfo"
                className="hover:text-green-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Tentang Kami
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
