"use client";

import Image from "next/image";

export default function Maintenance() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-yellow-50 to-white px-4">
      <Image
        src="/mt.png"
        alt="Maintenance"
        width={300}
        height={300}
        className="mb-6"
      />
      <h1 className="text-4xl font-bold text-yellow-600 mb-4">
        Sedang Dalam Pemeliharaan
      </h1>
      <p className="text-gray-600 max-w-md">
        Website sedang dalam pemeliharaan. Silakan kembali beberapa saat lagi.
      </p>
    </main>
  );
}
