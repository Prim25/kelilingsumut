"use client";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { IoFilterOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useState, useRef, useEffect } from "react";
import { useDestinations } from "@/context/ArticleDestinasi";

export default function DestinasiPopuler() {
  const [search, setSearch] = useState("");
  const [selectedKategori, setSelectedKategori] = useState(""); // kategori filter
  const [showFilter, setShowFilter] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const { destinations } = useDestinations();

  // Tutup filter jika klik di luar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setShowFilter(false);
      }
    }
    if (showFilter) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilter]);

  // Ambil semua kategori unik dari destinasi
  const kategoriList = [
    ...new Set(destinations.map((d) => d.kategori)),
  ];

  // Filter destinasi sesuai search dan kategori
  const filteredDestinations = destinations
    .filter((d) =>
      d.nama.toLowerCase().includes(search.toLowerCase())
    )
    .filter((d) =>
      selectedKategori ? d.kategori === selectedKategori : true
    )
    .slice(0, 3);

  return (
    <section id="destinasi" className="py-16 container mx-auto px-6 md:px-desk">
      <div className="flex items-center gap-5 justify-end mb-14 w-full relative">
        <div className="py-2 px-5 items-center border border-gray-800 flex rounded-full w-1/2">
          <input
            type="text"
            placeholder="cari destinasi"
            className="outline-none w-full placeholder:text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <CiSearch className="text-2xl" />
        </div>
        <button
          className="p-3 rounded-full border border-gray-800 bg-white"
          onClick={() => setShowFilter((v) => !v)}
          aria-label="Tampilkan Filter"
        >
          <IoFilterOutline />
        </button>

        {/* FILTER MENU POPUP */}
        {showFilter && (
          <div
            ref={filterRef}
            className="absolute top-16 right-0 z-30 max-w-md w-[350px] bg-white border rounded-xl p-6 shadow"
          >
            <h3 className="font-bold text-lg mb-4">Temukan Rekomendasi Wisata</h3>
            {/* Usia */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">Usia</label>
              <div className="grid grid-cols-2 gap-2">
                <button className="border rounded-full px-4 py-2">Anak-anak (0-12 tahun)</button>
                <button className="border rounded-full px-4 py-2">Remaja (13-19 tahun)</button>
                <button className="border rounded-full px-4 py-2">Dewasa (20-45 tahun)</button>
                <button className="border rounded-full px-4 py-2">Lansia (50+ tahun)</button>
              </div>
            </div>
            {/* Kategori Wisata */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">Kategori Wisata</label>
              <select
                className="border rounded-full px-4 py-2 w-full"
                value={selectedKategori}
                onChange={(e) => setSelectedKategori(e.target.value)}
              >
                <option value="">Pilih Kategori Wisata</option>
                {kategoriList.map((kategori, idx) => (
                  <option key={idx} value={kategori}>
                    {kategori}
                  </option>
                ))}
              </select>
            </div>
            {/* Harga */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">Harga</label>
              <select className="border rounded-full px-4 py-2 w-full">
                <option>Pilih Rentang Harga</option>
                <option>Gratis</option>
                <option>&lt; Rp 50.000</option>
                <option>Rp 50.000 - Rp 100.000</option>
                <option>&gt; Rp 100.000</option>
              </select>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold mt-2">
              Kirim
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mb-14">
        <div>
          <h2 className="text-2xl font-bold mb-2">Destinasi Populer</h2>
          <p>
            Destinasi populer di Sumatera Utara yang wajib dikunjungi
          </p>
        </div>
        <Link
          href={`/destinasi`}
          className={`bg-primary hover:bg-primary/90 p-4 text-xl rounded-full`}
        >
          <FaArrowRight className="text-white" />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {filteredDestinations.map((d, i) => (
          <div
            key={i}
            className="relative group w-full h-[450px] overflow-hidden shadow-lg"
          >
            <Image
              src={d.gambarUtama}
              alt={d.nama}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            {/* blur bar di bawah */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-black/0 backdrop-blur-md opacity-10 group-hover:opacity-100 transition-opacity duration-700"></div>
            {/* text muncul naik */}
            <p className="absolute bottom-10 left-8 text-2xl font-bold text-white opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
              {d.nama}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}