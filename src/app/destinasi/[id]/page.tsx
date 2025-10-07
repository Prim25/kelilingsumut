"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

  useEffect(() => {
    fetch("/data/destinations.json")
      .then((res) => res.json())
      .then((data) => {
        const arr: Destination[] = Array.isArray(data) ? data : [];
        setAllDestinations(arr);

        if (id && arr.length > 0) {
          const found = arr.find((d) => d.id.toString() === id);
          setDestination(found || null);
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

  // Filter rekomendasi sesuai kategori
  const filteredRecommendations = allDestinations
    .filter((d) => d.id.toString() !== id) // hindari destinasi yang sedang dibuka
    .filter((d) => d.kategori === destination.kategori) // hanya kategori sama
    .slice(0, 5); // ambil maksimal 5

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
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
        {destination.gambarUtama && (
          <Image
            src={destination.gambarUtama}
            alt={destination.nama}
            width={800}
            height={400}
            className="w-full h-[400px] object-cover rounded-xl shadow mb-6"
          />
        )}

        {/* GALERI */}
        {destination.galeri?.length > 0 && (
          <div className="flex gap-3 mb-6 overflow-x-auto">
            {destination.galeri.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`${destination.nama} ${idx + 1}`}
                width={200}
                height={120}
                className="w-48 h-28 rounded-lg object-cover border shadow-sm hover:scale-105 transition"
              />
            ))}
          </div>
        )}

        {/* DESKRIPSI */}
        <article className="prose prose-lg max-w-none text-justify leading-relaxed text-gray-700">
          {destination.deskripsi}
        </article>
      </div>

      {/* REKOMENDASI */}
      <aside className="space-y-4">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Rekomendasi Destinasi {destination.kategori}
        </h2>

        {filteredRecommendations.length > 0 ? (
          filteredRecommendations.map((d) => (
            <Link
              key={d.id}
              href={`/destinasi/${d.id}`}
              className="flex gap-3 p-3 bg-white rounded-lg shadow hover:shadow-md transition"
            >
              <Image
                src={d.gambarUtama}
                alt={d.nama}
                width={96}
                height={64}
                className="w-24 h-16 object-cover rounded"
              />
              <div>
                <p className="text-sm text-blue-600 font-semibold">
                  {d.kategori}
                </p>
                <h3 className="font-bold text-gray-900 leading-snug">
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
