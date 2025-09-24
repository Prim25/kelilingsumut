"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Logo + Deskripsi */}
        <div className="flex items-start space-x-4">
          <Image
            src="https://drive.google.com/uc?export=view&id=1LVOBQ1LiUNzB05REzPPW2l5TisKz0_fd" // ganti dengan path logo
            alt="Keliling Sumut"
            width={80}
            height={80}
            className="rounded-full"
          />
          <p className="text-sm leading-relaxed">
            Keliling Sumut adalah website wisata yang menawarkan panduan lengkap
            untuk menjelajahi destinasi di seluruh Sumatera Utara.
          </p>
        </div>

        {/* Menu Navigasi */}
        <div className="flex flex-col space-y-2 text-sm font-medium text-center md:text-left">
          <Link href="/">Beranda</Link>
          <Link href="/artikel">Artikel</Link>
          <Link href="/destinasi">Destinasi</Link>
          <Link href="/event">Event</Link>
          <Link href="/tentang-kami">Tentang Kami</Link>
        </div>

        {/* Partner / Logo */}
        <div className="flex flex-col space-y-4 items-center md:items-end">
          <Image
            src="https://drive.google.com/uc?export=view&id=1EhJQ1IJsdCEEkyvIy2s7UGwxfyGAobGD" // logo Kementerian
            alt="Kementerian Ketenagakerjaan RI"
            width={120}
            height={60}
          />
          <Image
            src="https://drive.google.com/uc?export=view&id=1OM3VmZZkmJvf01G_SwhnUrdzNvBBojbI" // logo Universitas Prima Indonesia
            alt="Universitas Prima Indonesia"
            width={120}
            height={60}
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 border-t border-blue-600 pt-4 text-center text-xs">
        Keliling Sumut © 2025. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
