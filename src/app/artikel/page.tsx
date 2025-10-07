"use client";
import React, {useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useArticles } from "@/context/ArticleContext";

const ArtikelPage = () => {
  const {articles} = useArticles()

  const events = [
    {
      image: "/images/event1.webp",
      title: "Trail of the kings 2025",
      date: "17 okt 2025- 19 okt 2025",
    },
    {
      image: "/images/event2.webp",
      title: "Pesta Njuah-Njuah",
      date: "31 sept 2025- 01 okt 2025",
    },
    {
      image: "/images/event3.webp",
      title: "Aquabike jetsky world championship 2025",
      date: "03 Nov 2025- 05 Nov 2025",
    },
    {
      image: "/images/event4.webp",
      title: "Maniamolo Fest 2025",
      date: "23 Nov 2025- 26 Nov 2025",
    },
    {
      image: "/images/event4.webp",
      title: "Event ke-5",
      date: "01 Des 2025- 03 Des 2025",
    },
    {
      image: "/images/event3.webp",
      title: "Aquabike jetsky world",
      date: "03 Nov 2025- 05 Nov 2025",
    },

    {
      image: "/images/event4.webp",
      title: "Event ke-6",
      date: "10 Des 2025- 12 Des 2025",
    },
    {
      image: "/images/event3.webp",
      title: "Aquabike jetsky world championship 2025",
      date: "03 Nov 2025- 05 Nov 2025",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isLeftActive, setIsLeftActive] = useState(true); // default kiri aktif

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }

    // update state sesuai arah
    setIsLeftActive(direction === "left");
  };

  return (
    <div className="mb-16 font-display">
      <div className="bg-[#EEF5FF] py-10 md:px-desk">
        <h1 className="text-3xl font-bold mb-10 text-center font-heading">Event Terbaru</h1>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-5"
        >
          {events.map((e, i) => (
            <div
              key={i}
              className="min-w-[250px] bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
            >
              <div className="w-40 h-40 overflow-hidden rounded-lg">
                <Image
                  src={e.image}
                  width={160}
                  height={160}
                  alt={e.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="mt-4 font-bold ">{e.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{e.date}</p>
            </div>
          ))}
        </div>

        {/* Tombol prev & next */}
        <div className="flex justify-center items-center mt-8 gap-3 text-white">
          <button
            onClick={() => scroll("left")}
            className={`p-3 rounded-full cursor-pointer transition-colors ${
              isLeftActive ? "bg-[#85BBFF]" : "bg-primary"
            }`}
          >
            <IoIosArrowBack />
          </button>

          <button
            onClick={() => scroll("right")}
            className={`p-3 rounded-full cursor-pointer transition-colors ${
              !isLeftActive ? "bg-[#85BBFF]" : "bg-primary"
            }`}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* Bagian Artikel */}
      <div className="mt-10 md:px-desk">
        <h1 className="font-bold text-3xl mb-10 font-heading">Artikel</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-52 relative">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className="object-cover"
                />
              </div>
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
                <p className="text-sm text-gray-600">{a.mainIntro}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtikelPage;
