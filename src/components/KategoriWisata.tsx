const kategori = [
  { name: "Gunung", img: "https://drive.google.com/uc?export=view&id=1PI5H0DHU_HmF1IWSdKxPNSdXKLN6pV6C" },
  { name: "Pantai", img: "https://drive.google.com/uc?export=view&id=1KVpeu6HmGE95jXSSQ2yUDwu3XmTAwHGy" },
  { name: "Museum", img: "https://drive.google.com/uc?export=view&id=1MAt-asY-6GTjJ7c0QEO62OuBj6mb0xj2" },
  { name: "Air Terjun", img: "https://drive.google.com/uc?export=view&id=1KoJ3VKSEognVkHDmq7j4cMQ4x-1lHZig" },
  { name: "Danau", img: "https://drive.google.com/uc?export=view&id=1TVFPe8zTVwIvQEANjyw3ASMlYs6Of6Tr" },
  { name: "Kebun Binatang", img: "https://drive.google.com/uc?export=view&id=1sY74_o80mwMkMCVLyIJtqPAjgaA4amJG" },
];


import Image from "next/image";

export default function KategoriWisata() {
  return (
    <section className="py-16 container mx-auto px-6 md:px-desk">
      <h2 className="text-2xl font-bold mb-4">Kategori Wisata</h2>
      <p className="mb-8">Temukan destinasi menarik lainnya berdasarkan kategori</p>

      <div className="grid md:grid-cols-3 gap-6">
        {kategori.map((k, i) => (
          <div
            key={i}
            className="relative rounded-lg overflow-hidden shadow-md group"
          >
            <Image
              src={k.img}
              height={300}
              width={400}
              alt={k.name}
              className="w-full h-48 object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-lg mb-2">{k.name}</h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full w-fit text-sm">
                Lihat
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
