"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useDestinations } from "@/context/ArticleDestinasi";
import { CiSearch } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import dynamic from "next/dynamic";
const MapClient = dynamic(() => import("@/components/MapClient"), { ssr: false });

export default function DestinationsList() {
  const { destinations } = useDestinations();
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const category = searchParams.get("kategori");

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  //  KATEGORI
  const categories = ["semua", ...new Set(destinations.map((d) => d.kategori))];

  //  FILTER DATA
  const filteredDestinations = destinations.filter((d) => {
    const kategoriYgCocok =
      selectedCategory === "semua"
        ? true
        : d.kategori.toLowerCase() === selectedCategory.toLowerCase();
    const pencarianYgCocock = d.nama
      .toLowerCase()
      .includes(search.toLowerCase());
    return kategoriYgCocok && pencarianYgCocock;
  });

  //  PAGINATION
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDestinations = filteredDestinations.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // HANDLER
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <section className="max-w-7xl mx-auto px-desk py-10">
      <div className="mb-16">
        <h1 className="font-bold text-2xl">Destinasi</h1>
        <p>
          Temukan dan jelajahi daftar wisata yang tersedia untuk mendapatkan
          informasi lebih detail
        </p>
        <div className="flex items-center gap-5 justify-end mt-10 w-full">
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
      </div>
      {/* =================================================================MAP================================================================ */}
      <div className="mt-6">
        <MapClient
          selectedCategory={selectedCategory}
          searchText={search}
          // geojsonUrl="/geo/destinations.geojson" // (optional) if you used a different name/path
        />
      </div>
      <h2 className="text-3xl font-bold text-center mb-8 mt-20">
        {category ? `Destinasi: ${category}` : "Daftar Destinasi"}
      </h2>

      {/* ===KATEGORI ====== */}
      <div className="flex flex-wrap justify-center gap-5 mb-10">
        {categories.map((kategori) => (
          <button
            key={kategori}
            onClick={() => handleCategoryClick(kategori)}
            className={`px-5 py-2 rounded-full border font-medium transition-all duration-200 
              ${
                selectedCategory === kategori
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
              }`}
          >
            {kategori}
          </button>
        ))}
      </div>

      {/*  LIST DESTINASI  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {currentDestinations.map((dest) => (
          <div
            key={dest.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
          >
            <Image
              src={dest.gambarUtama}
              alt={dest.nama}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <Link href={`/destinasi/${dest.id}`}>
                <h2 className="font-bold text-lg mb-2">{dest.nama}</h2>
              </Link>
              <p className="text-sm mt-2">{dest.deskripsiUtama}</p>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-10 gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded-md disabled:opacity-40 hover:bg-blue-50"
          >
            &lt;
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 border rounded-md transition-all duration-200 
                ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
                }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded-md disabled:opacity-40 hover:bg-blue-50"
          >
            &gt;
          </button>
        </div>
      )}
    </section>
  );
}

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const DestinationPage: React.FC = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   const destinations = [
//     {
//       id: 1,
//       title: "Gunung Sibuatan",
//       category: "Gunung",
//       image:
//         "https://drive.google.com/uc?export=view&id=1XM6lno8Wl2SQdBst6QnBXC9c2Maesah4",
//       description:
//         "Gunung Sibuatan adalah gunung tertinggi di Sumatera Utara dengan ketinggian sekitar 2.457 meter di atas permukaan laut..."
//     },
//     {
//       id: 6,
//       title: "Pantai Romantis",
//       category: "Pantai",
//       image:
//         "https://drive.google.com/uc?export=view&id=1Wk-hVtRdxO1Qi7a-B-4f6c-sgV8BHgmq",
//       description:
//         "Pantai Romantis merupakan salah satu destinasi wisata unik di Kabupaten Serdang Bedagai..."
//     },
//     {
//       id: 12,
//       title: "Museum Sipalakka",
//       category: "Museum",
//       image:
//         "https://drive.google.com/uc?export=view&id=13OP_TI71qY6r3wbxkjrjQSuq8XhPGe66",
//       description:
//         "Museum Sipalakka merupakan museum yang terletak di Balige, Kabupaten Toba..."
//     },
//     {
//       id: 20,
//       title: "Central Park Zoo And Resort",
//       category: "Kebun Binatang",
//       image:
//         "https://drive.google.com/uc?export=view&id=1_twEuSGZuqBIZZu7J8hsJISy4GGF0J0A",
//       description:
//         "Central Park Zoo and Resort merupakan destinasi wisata keluarga yang menggabungkan konsep kebun binatang modern..."
//     },
//     {
//       id: 26,
//       title: "Air Terjun Pelangi Indah",
//       category: "Air Terjun",
//       image:
//         "https://drive.google.com/uc?export=view&id=1GybioJZdodevoxc1ds1CyxjIAjSE5XCb",
//       description:
//         "Air Terjun Pelangi Indah adalah salah satu destinasi wisata alam yang menawan di kawasan Samosir..."
//     }
//   ];

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   const handleFilter = (category: string | null) => {
//     setSelectedCategory(category);
//     setCurrentPage(1); // reset ke halaman pertama setelah filter
//   };

//   // Filter destinasi sesuai kategori yang dipilih
//   const filteredDestinations = selectedCategory
//     ? destinations.filter((d) => d.category === selectedCategory)
//     : destinations;

//   const paginatedDestinations = filteredDestinations.slice(
//     (currentPage - 1) * 6,
//     currentPage * 6
//   );

//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
//         {/* Title and Search Bar */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-semibold text-center w-full">
//             Peta Destinasi
//           </h1>
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-full sm:w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//           />
//         </div>

//         {/* Peta Interaktif */}
//         <div className="mb-6 flex justify-center">
//           <Image
//             src="https://drive.google.com/uc?export=view&id=1LVOBQ1LiUNzB05REzPPW2l5TisKz0_fd"
//             alt="Peta Interaktif"
//             width={800}
//             height={400}
//             className="w-full sm:w-2/3 md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Category Filters */}
//         <div className="flex justify-center flex-wrap gap-3 mb-6">
//           {["Gunung", "Pantai", "Museum", "Air Terjun", "Kebun Binatang"].map(
//             (cat) => (
//               <button
//                 key={cat}
//                 onClick={() => handleFilter(cat)}
//                 className={`px-6 py-2 rounded-lg ${
//                   selectedCategory === cat
//                     ? "bg-blue-700 text-white"
//                     : "bg-blue-500 text-white hover:bg-blue-600"
//                 }`}
//               >
//                 {cat}
//               </button>
//             )
//           )}
//           {selectedCategory && (
//             <button
//               onClick={() => handleFilter(null)}
//               className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
//             >
//               Reset
//             </button>
//           )}
//         </div>

//         {/* Destination Cards */}
//         {paginatedDestinations.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
//             {paginatedDestinations.map((destination) => (
//               <Link
//                 key={destination.id}
//                 href={`/destinasi/${destination.id}`}
//                 className="block"
//               >
//                 <div className="bg-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
//                   <Image
//                     src={destination.image}
//                     alt={destination.title}
//                     width={500}
//                     height={300}
//                     className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-110"
//                   />
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                     {destination.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm line-clamp-4">
//                     {destination.description}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">
//             Tidak ada destinasi ditemukan.
//           </p>
//         )}

//         {/* Pagination */}
//         <div className="flex justify-center items-center space-x-4 mt-6">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="px-4 py-2 bg-gray-500 text-white rounded-lg disabled:bg-gray-300"
//           >
//             Previous
//           </button>
//           <span className="text-lg font-semibold">Page {currentPage}</span>
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage * 6 >= filteredDestinations.length}
//             className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300"
//           >
//             Next
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DestinationPage;
