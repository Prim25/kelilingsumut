import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-50 to-white px-4">
      <Image
        src="/bromo.png"
        alt="Ilustrasi 404"
        width={300}
        height={300}
        className="w-72 mb-6"
        priority
      />
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-gray-600 mb-6">
        Halaman yang kamu cari tidak ditemukan.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}
