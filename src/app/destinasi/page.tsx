"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useDestinations } from "@/context/ArticleDestinasi";
import { CiSearch } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import dynamic from "next/dynamic";
const MapClient = dynamic(() => import("@/components/MapClient"), {
  ssr: false,
});

export default function DestinationsList() {
const filterRef = useRef<HTMLDivElement>(null);
  const { destinations } = useDestinations();
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const category = searchParams.get("kategori");
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  //  KATEGORI
  const categories = ["semua", ...new Set(destinations.map((d) => d.kategori))];

  //  FILTER DATA
  const filteredDestinations = destinations.filter((d) => {
    const kategoriYgCocok =
      selectedCategory === "semua"
        ? true
        : d.kategori.toLowerCase() === selectedCategory.toLowerCase();
    const pencarianYgCocock = d.nama
      .toLowerCase()
      .includes(search.toLowerCase());
    return kategoriYgCocok && pencarianYgCocock;
  });

  //  PAGINATION
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDestinations = filteredDestinations.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // HANDLER
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <section className="max-w-7xl mx-auto px-desk py-10">
      <div className="mb-16">
        <h1 className="font-bold text-2xl">Destinasi</h1>
        <p>
          Temukan dan jelajahi daftar wisata yang tersedia untuk mendapatkan
          informasi lebih detail
        </p>
        <div className="flex items-center gap-5 justify-end mt-10 w-full">
          <div className="py-2 px-5 items-center border border-gray-800 flex rounded-full w-full md:w-1/2 justify-between">
            <input
              type="text"
              name=""
              id=""
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
        </div>

        {/* FILTER MENU POPUP */}
        {showFilter && (
          <div 
            ref={filterRef}
            className="absolute top-66 right-10 z-30 max-w-md w-[350px] bg-white border rounded-xl p-6 shadow"
          >
            <h3 className="font-bold text-lg mb-4">
              Temukan Rekomendasi Wisata
            </h3>
            {/* Usia */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">Usia</label>
              <div className="grid grid-cols-2 gap-2">
                <button className="border rounded-full px-4 py-2">
                  Anak-anak (0-12 tahun)
                </button>
                <button className="border rounded-full px-4 py-2">
                  Remaja (13-19 tahun)
                </button>
                <button className="border rounded-full px-4 py-2">
                  Dewasa (20-45 tahun)
                </button>
                <button className="border rounded-full px-4 py-2">
                  Lansia (50+ tahun)
                </button>
              </div>
            </div>
            {/* Kategori Wisata */}
            <div className="mb-4 ">
              <label className="block font-semibold mb-2">
                Kategori Wisata
              </label>
              <select
                className="border rounded-full px-4 py-2 w-full"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Pilih Kategori Wisata</option>
                {categories.map((kategori, idx) => (
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

      {/* =================================================================MAP================================================================ */}
      <div className="mt-6">
        <MapClient
          selectedCategory={selectedCategory}
          searchText={search}
          // geojsonUrl="/geo/destinations.geojson" // (optional) if you used a different name/path
        />
      </div>
      <h2 className="text-3xl font-bold text-center mb-8 mt-20">
        {category ? `Destinasi: ${category}` : "Daftar Destinasi"}
      </h2>

      {/* ===KATEGORI ====== */}
      <div className="flex flex-wrap justify-center gap-5 mb-10">
        {categories.map((kategori) => (
          <button
            key={kategori}
            onClick={() => handleCategoryClick(kategori)}
            className={`px-5 py-2 rounded-full border font-medium transition-all duration-200 
              ${
                selectedCategory === kategori
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
              }`}
          >
            {kategori.charAt(0).toUpperCase() + kategori.slice(1).toLowerCase()}
          </button>
        ))}
      </div>

      {/*  LIST DESTINASI  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {currentDestinations.map((dest) => (
          <div
            key={dest.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
          >
            <Image
              src={dest.gambarUtama}
              alt={dest.nama}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <Link href={`/destinasi/${dest.id}`}>
                <h2 className="font-bold text-lg mb-2">{dest.nama}</h2>
              </Link>
              <p className="text-sm mt-2">{dest.deskripsiUtama}</p>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-10 gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded-md disabled:opacity-40 hover:bg-blue-50"
          >
            &lt;
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 border rounded-md transition-all duration-200 
                ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
                }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded-md disabled:opacity-40 hover:bg-blue-50"
          >
            &gt;
          </button>
        </div>
      )}
    </section>
  );
}
