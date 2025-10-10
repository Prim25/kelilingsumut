"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoIosShareAlt } from "react-icons/io";

type Destination = {
  id: number;
  kategori: string;
  nama: string;
  gambarUtama: string;
  galeri: string[];
  deskripsi: string;
};

export default function DestinationDetailPage() {
  const { id } = useParams();
  const [destination, setDestination] = useState<Destination | null>(null);
  const [allDestinations, setAllDestinations] = useState<Destination[]>([]);
  const [mainImage, setMainImage] = useState<string>(""); // 🖼️ gambar utama dinamis

  useEffect(() => {
    fetch("/data/destinations.json")
      .then((res) => res.json())
      .then((data) => {
        const arr: Destination[] = Array.isArray(data) ? data : [];
        setAllDestinations(arr);

        if (id && arr.length > 0) {
          const found = arr.find((d) => d.id.toString() === id);
          setDestination(found || null);
          if (found) {
            setMainImage(found.gambarUtama); // 🖼️ set gambar utama awal
          }
        }
      })
      .catch((err) => console.error("Error loading destinations:", err));
  }, [id]);

  if (!destination) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-center text-red-500 text-lg">
          Destinasi tidak ditemukan
        </p>
      </div>
    );
  }

  const filteredRecommendations = allDestinations
    .filter((d) => d.id.toString() !== id)
    .filter((d) => d.kategori === destination.kategori)
    .slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-desk py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* KONTEN UTAMA */}
      <div className="lg:col-span-2">
        <p className="text-sm text-blue-600 font-semibold uppercase mb-2">
          {destination.kategori}
        </p>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          {destination.nama}
        </h1>

        <p className="text-gray-500 text-sm mb-6">
          Tim Keliling Sumut · 01 Oktober 2025 · Waktu baca 4 menit
        </p>

        {/* GAMBAR UTAMA */}
        {mainImage && (
          <Image
            src={mainImage}
            alt={destination.nama}
            width={800}
            height={400}
            className="w-full h-[400px] object-cover rounded-xl shadow mb-6 transition-all duration-300"
          />
        )}

        {/* GALERI */}
        {destination.galeri?.length > 0 && (
          <div className="flex gap-3 mb-6 overflow-x-auto scrollbar-hide">
            {destination.galeri.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setMainImage(img)} // ✅ ubah gambar utama
                className={`relative group focus:outline-none ${
                  mainImage === img ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <Image
                  src={img}
                  alt={`${destination.nama} ${idx + 1}`}
                  width={200}
                  height={120}
                  className="w-48 h-28 rounded-lg object-cover border shadow-sm group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        )}
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-primary p-3 rounded-full text-white">
            <FaInstagram className="text-[14px]" />
          </div>
          <div className="bg-primary p-3 rounded-full text-white">
            <FaTiktok className="text-[14px]" />
          </div>
          <div className="bg-primary p-3 rounded-full text-white">
            <RiTwitterXFill className="text-[14px]" />
          </div>
          <div className="bg-primary p-3 rounded-full text-white">
            <IoIosShareAlt className="text-[14px]" />
          </div>
        </div>
        {/* DESKRIPSI */}
        <article className="prose prose-lg max-w-none text-justify leading-relaxed text-gray-700">
          {destination.deskripsi}
        </article>
      </div>

      {/* REKOMENDASI */}
      <aside className="space-y-10 mt-26">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Rekomendasi Destinasi {destination.kategori}
        </h2>

        {filteredRecommendations.length > 0 ? (
          filteredRecommendations.map((d) => (
            <Link
              key={d.id}
              href={`/destinasi/${d.id}`}
              className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <div className="overflow-hidden rounded-xl w-28 h-20 flex-shrink-0">
                <Image
                  src={d.gambarUtama}
                  alt={d.nama}
                  width={112}
                  height={80}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="flex flex-col justify-between">
                <p className="text-xs uppercase tracking-wide text-blue-500 font-semibold mb-1">
                  {d.kategori}
                </p>
                <h3 className="font-semibold text-gray-900 text-lg leading-tight hover:text-blue-600 transition-colors duration-200">
                  {d.nama}
                </h3>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-sm">
            Belum ada destinasi lain di kategori ini.
          </p>
        )}
      </aside>
    </div>
  );
}
