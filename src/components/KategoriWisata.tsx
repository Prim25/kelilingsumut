import Image from "next/image";
const kategori = [
  { name: "Gunung", img: "/images/gunung.jpg" },
  { name: "Pantai", img: "/images/pantai.jpg" },
  { name: "Museum", img: "/images/museum.jpg" },
  { name: "Kebun Binatang", img: "/images/kebun-binatang.jpg" },
  { name: "Air Terjun", img: "/images/air-terjun.jpg" },
  { name: "Danau", img: "/images/danau-toba.jpg" },
];

export default function KategoriWisata() {
  return (
    <section className="py-16 container mx-auto px-6">
      <h2 className="text-2xl font-bold mb-4">Kategori Wisata</h2>
      <p className="mb-8">Temukan destinasi menarik lainnya berdasarkan kategori</p>
      <div className="grid md:grid-cols-3 gap-6">
        {kategori.map((k, i) => (
          <div key={i} className="relative rounded-lg overflow-hidden shadow-md">
            <Image src={k.img} alt={k.name} className="w-full h-40 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white font-bold text-lg">
              {k.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
