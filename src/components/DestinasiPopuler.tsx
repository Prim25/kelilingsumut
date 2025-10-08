"use client";
import styles from "./Layout.module.css";
Link;
const destinasi = [
  {
    name: "Danau Toba",
    img: "https://drive.google.com/uc?export=view&id=1BYhOwwUAil_hSNauFUNVHv3_RBFXMEYz",
  },
  {
    name: "Air Terjun Dua Warna",
    img: "https://drive.google.com/uc?export=view&id=1G98h9hR4svGw6oHw6MBj7VX7oajHON2t",
  },
  {
    name: "Pulau Samosir",
    img: "https://drive.google.com/uc?export=view&id=1IdhrwRkcno1lShLN2dH2DidE62qJhWkc",
  },
];
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { IoFilterOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useDestinations } from "@/context/ArticleDestinasi";

export default function DestinasiPopuler() {
  const [search, setSearch] = useState("");
  const { destinations } = useDestinations();
  const filteredDestinations = destinations
    .filter((d) => {
      return d.nama.toLowerCase().includes(search.toLowerCase());
    })
    .slice(0, 3);
  return (
    <section id="destinasi" className="py-16 container mx-auto px-6 md:px-desk">
      <div className="flex items-center gap-5 justify-end mb-14 w-full">
        <div className="py-2 px-5 items-center border border-gray-800 flex rounded-full w-1/2">
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
        <div className="p-3  rounded-full border border-gray-800">
          <IoFilterOutline />
        </div>
      </div>
      <div className="flex items-center justify-between mb-14">
        <div>
          <h2 className="text-2xl font-bold mb-2">Destinasi Populer</h2>
          <p className="">
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
