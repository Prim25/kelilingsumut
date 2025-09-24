import React from "react";
import Image from "next/image";
import Link from "next/link";
import { articles } from "../data/articles";
//format khusus yang  dipakai supaya gambar/file bisa langsung ditampilkan (direct link). https://drive.google.com/uc?export=view&id=
const ArtikelPage = () => {
  const events = [
    {
      image: "/images/event1.png",
      title: "SHIFTING UP BATCH 3",
      date: "23 Mei 2025 – 26 Juni 2025",
    },
    {
      image: "/images/event1.png",
      title: "SHIFTING UP BATCH 3",
      date: "23 Mei 2025 – 26 Juni 2025",
    },
    {
      image: "/images/event1.png",
      title: "SHIFTING UP BATCH 3",
      date: "23 Mei 2025 – 26 Juni 2025",
    },
    {
      image: "/images/event1.png",
      title: "SHIFTING UP BATCH 3",
      date: "23 Mei 2025 – 26 Juni 2025",
    },
  ];

  return (
    <div className="mt-24 ">
      <div className="bg-[#EEF5FF] py-10 md:px-desk">
        <h1 className="text-3xl font-bold mb-10 text-center">Event Terbaru</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {events.map((e, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
            >
              {/* Gambar bulat */}
              <div className="w-40 h-40 overflow-hidden rounded-lg">
                <Image
                  src={e.image}
                  width={160}
                  height={160}
                  alt={e.title}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Judul */}
              <h2 className="mt-4 font-bold text-lg">{e.title}</h2>
              {/* Tanggal */}
              <p className="text-sm text-gray-600 mt-1">{e.date}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 md:px-desk">
        <h1 className="font-bold text-3xl mb-10">Artikel</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              {/* Gambar */}
              <div className="h-52 relative">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Isi card */}
              <div className="p-5">
                <p className="text-sm text-blue-600 font-semibold mb-1">
                  {a.category}
                </p>
                <Link href={`/artikel/${a.id}`}>
                  <h2 className="font-bold text-lg mb-2">{a.title}</h2>
                </Link>
                <p className="text-xs text-gray-500 mb-2">
                  {a.date} • {a.readingTime}
                </p>
                <p className="text-sm text-gray-600">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtikelPage;
