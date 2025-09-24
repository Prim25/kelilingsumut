import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Layout.module.css";
import Image from "next/image";

const ArtikelEvent = () => {
  return (
    <div className="py-16 container mx-auto px-6 md:px-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-14">
        <div>
          <h2 className="text-2xl font-bold mb-2">Artikel dan Event</h2>
          <p>Lihat artikel dan event menarik mengenai destinasi wisata favoritmu</p>
        </div>
        <div className={`${styles.bgColor} p-4 rounded-full text-xl`}>
          <FaArrowRight className="text-white" />
        </div>
      </div>

      {/* Konten Utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Artikel Besar Kiri */}
        <div>
          <Image
            src="https://drive.google.com/uc?export=view&id=1or87puUjAfxLBhHGx5n_xE2LJ1Y7iOYS"
            alt="artikel"
            width={600}
            height={400}
            className="rounded-lg w-full object-cover"
          />
          <p className="text-blue-800 mt-3">Kuliner</p>
          <h1 className="text-xl font-bold mb-3">
            10 Restoran Legendaris di Medan dengan Cita Rasa Lezat
          </h1>
          <p className="mb-4 text-gray-500">23 Sep 2025 - Waktu Baca 4 Menit</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea at nisi iste.
          </p>
        </div>

        {/* Artikel Kecil Kanan */}
        <div className="flex flex-col gap-6">
          {/* Card 1 */}
          <div className="flex items-start gap-3">
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
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-3">
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
          </div>

          {/* Card 3 */}
          <div className="flex items-start gap-3">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtikelEvent;
