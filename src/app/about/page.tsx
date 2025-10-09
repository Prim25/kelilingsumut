"use client";

import { useState } from "react";
import Link from "next/link";
import { JSX } from "react";
import Image from "next/image";


export default function About(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-3xl font-extrabold tracking-tight text-yellow-600 select-none"
            >
              Keliling<span className="text-gray-800">Sumut</span>
            </Link>

            {/* Tombol ☰ / ✕ */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-3xl text-gray-700"
              aria-label="Toggle Menu"
            >
              {open ? "✕" : "☰"}
            </button>

            {/* Menu Desktop */}
            <div className="hidden md:flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-blue-600">
                Beranda
              </Link>
              <Link href="/about" className="text-blue-600 font-semibold">
                About Us
              </Link>
              <a href="#team" className="hover:text-blue-600">
                Tim
              </a>
              <a href="#contact" className="hover:text-blue-600">
                Kontak
              </a>
            </div>
          </div>

          {/* Menu Mobile */}
          {open && (
            <div className="flex flex-col gap-4 mt-4 bg-white shadow-md rounded-lg p-4 md:hidden">
              <Link href="/" className="hover:text-blue-600">
                Beranda
              </Link>
              <Link href="/about" className="text-blue-600 font-semibold">
                About Us
              </Link>
              <a href="#team" className="hover:text-blue-600">
                Tim
              </a>
              <a href="#contact" className="hover:text-blue-600">
                Kontak
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* TENTANG */}
      <section className="pt-32 px-6 md:px-16 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-700">
          Tentang KelilingSumut
        </h1>
        <p className="text-gray-600 leading-relaxed mb-10">
          KelilingSumut adalah platform wisata yang membantu kamu menjelajahi
          keindahan Sumatera Utara dan seluruh Indonesia. Kami menyediakan
          destinasi populer, paket wisata lengkap, serta panduan terpercaya
          untuk membuat perjalananmu nyaman dan tak terlupakan.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Misi</h3>
            <p className="text-gray-600 text-sm">
              Memberikan pengalaman perjalanan yang aman, terjangkau, dan
              menyenangkan untuk semua wisatawan.
            </p>
          </div>
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Visi</h3>
            <p className="text-gray-600 text-sm">
              Menjadi platform wisata terpercaya untuk menjelajahi destinasi
              terbaik di Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* TIM KAMI */}
      <section id="team" className="px-6 md:px-16 mt-28 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
          Tim Kami
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { name: "Rina", role: "Founder", img: "/team1.jpg" },
            { name: "Budi", role: "Tour Guide", img: "/team2.jpg" },
            { name: "Sari", role: "Customer Support", img: "/team3.jpg" },
          ].map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >
              <Image
                src={t.img}
                alt={t.name}
                fill
                className="w-28 h-28 mx-auto rounded-full mb-4 object-cover"
              />
              <h4 className="font-semibold text-blue-600">{t.name}</h4>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KONTAK */}
      <section id="contact" className="px-6 md:px-16 mt-28 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
          Hubungi Kami
        </h2>
        <form className="bg-white shadow rounded-2xl p-8 space-y-4">
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full border rounded-lg p-3"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg p-3"
          />
          <textarea
            placeholder="Pesan"
            className="w-full border rounded-lg p-3 h-28"
          />
          <button
            type="submit"
            className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Kirim Pesan
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="mt-28 py-8 text-center text-sm text-gray-500 border-t">
        © 2025 KelilingSumut. Semua Hak Dilindungi.
      </footer>
    </main>
  );
}
