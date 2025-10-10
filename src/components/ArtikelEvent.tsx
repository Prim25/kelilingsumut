"use client";
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useArticles } from "@/context/ArticleContext";
import Link from "next/link";
import { motion } from "framer-motion";

const ArtikelEvent = () => {
  const { articles } = useArticles();

  // Loading screen logic
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
        <div className="flex items-center mb-4 space-x-2">
          <motion.span
            className="w-4 h-4 bg-blue-500 rounded-full"
            animate={{ y: [0, -18, 0] }}
            transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
          />
          <motion.span
            className="w-4 h-4 bg-yellow-400 rounded-full"
            animate={{ y: [0, -18, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />
          <motion.span
            className="w-4 h-4 bg-orange-400 rounded-full"
            animate={{ y: [0, -18, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />
        </div>
        <p className="text-xl font-bold text-blue-700 animate-pulse">Memuat...</p>
      </div>
    );
  }

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