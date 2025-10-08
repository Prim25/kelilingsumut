"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Layout.module.css";
import Image from "next/image";
import { useArticles } from "@/context/ArticleContext";
import Link from "next/link";

const ArtikelEvent = () => {
  const { articles } = useArticles();
  if (articles.length === 0) return null;
  const shuffled = [...articles].sort(() => Math.random() - 0.5);
  const featured = shuffled[0];
  const sidebar = shuffled.slice(1.6);
  return (
    <div className="py-16 container mx-auto px-6 md:px-24 font-display">
      {/* Header */}
      <div className="flex items-center justify-between mb-14">
        <div>
          <h2 className="text-2xl font-bold mb-2">Artikel dan Event</h2>
          <p>
            Lihat artikel dan event menarik mengenai destinasi wisata favoritmu
          </p>
        </div>
        <Link href={"/artikel"} className={`bg-primary hover:bg-primary/90 p-4 rounded-full text-xl`}>
          <FaArrowRight className="text-white" />
        </Link>
      </div>

      {/* Konten Utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Artikel Besar Kiri */}
        <div>
          <Image
            src={featured.image}
            alt={featured.title}
            width={600}
            height={400}
            className="rounded-lg w-full object-cover"
          />
          <p className="text-blue-800 mt-3">{featured.category}</p>
          <Link
            href={`/artikel/${featured.id}`}
            className="text-xl font-bold mb-3 cursor-pointer"
          >
            {featured.title}
          </Link>
          <p className="mb-4 text-gray-500">
            {featured.date} - Waktu Baca {featured.readingTime}
          </p>
          <p>{featured.mainIntro}</p>
        </div>

        <aside className="space-y-3">
          {sidebar.slice(0, 5).map((item, i) => (
            <Link
              key={i}
              href={`/artikel/${item.id}`}
              className="flex items-center gap-4 bg-white rounded-xl shadow hover:shadow-md transition p-3"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={90}
                height={70}
                className="rounded-lg object-cover"
              />
              <div>
                <span className="text-xs font-semibold text-blue-600">
                  {item.category}
                </span>
                <h3 className="text-sm font-medium leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            </Link>
          ))}
        </aside>
      </div>
    </div>
  );
};

export default ArtikelEvent;

{
  /* Artikel Kecil Kanan */
}
{
  /* <div className="flex flex-col gap-6"> */
}
{
  /* Card 1 */
}
{
  /* <div className="flex items-start gap-3">
            <Image
              src="https://drive.google.com/uc?export=view&id=14THNbG4RJdyZJw8ShduPkcgRazXxISS_"
              alt="Wisata Alam"
              width={100}
              height={80}
              className="w-35 h-25 object-cover rounded-lg"
            />
            <div>
              <p className="text-blue-600 text-sm font-medium">Alam</p>
              <h3 className="font-semibold leading-snug">
                7 Tempat Wisata Alam di Sumut, Keindahannya Bak Surga Dunia
              </h3>
              <p className="text-gray-500 text-sm">15 Feb 2025 - Waktu baca 4 menit</p>
            </div>
          </div> */
}

{
  /* Card 2 */
}
{
  /* <div className="flex items-start gap-3">
            <Image
              src="https://drive.google.com/uc?export=view&id=1VEctHCGc7Wx5MZyTEq3431CJbZHKyqRO"
              alt="Tips Wisata"
              width={100}
              height={80}
              className="w-35 h-25 object-cover rounded-lg"
            />
            <div>
              <p className="text-blue-600 text-sm font-medium">Tips</p>
              <h3 className="font-semibold leading-snug">
                7 Tips Berwisata di Alam, Jelajahi Keindahan dengan Aman
              </h3>
              <p className="text-gray-500 text-sm">15 Feb 2025 - Waktu baca 4 menit</p>
            </div>
          </div> */
}

{
  /* Card 3 */
}
{
  /* <div className="flex items-start gap-3">
            <Image
              src="https://drive.google.com/uc?export=view&id=1frUhAeSyjJVtL7-DMFsmNSQqnNkUs266"
              alt=" Ativitas Wisata"
              width={100}
              height={80}
              className="w-35 h-25 object-cover rounded-lg"
            />
            <div>
              <p className="text-blue-600 text-sm font-medium">Tips</p>
              <h3 className="font-semibold leading-snug">
                7 Aktivitas Wisata di Danau Toba untuk Merayakan Tahun Baru
              </h3>
              <p className="text-gray-500 text-sm">15 Feb 2025 - Waktu baca 4 menit</p>
            </div>
          </div> */
}
{
  /* </div> */
}
