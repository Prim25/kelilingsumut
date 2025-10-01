"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const DestinationPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const destinations = [
    {
      id: 1,
      title: "Gunung Sinabung",
      category: "Gunung",
      image: "https://drive.google.com/uc?export=view&id=1MD1Gyty-S7VUpaiPCMJwujkw31q5qnfi",
      description: "Gunung aktif di Sumatera Utara yang sering jadi destinasi wisata alam."
    },
    {
      id: 2,
      title: "Danau Toba",
      category: "Danau",
      image: "https://drive.google.com/uc?export=view&id=1LVOBQ1LiUNzB05REzPPW2l5TisKz0_fd",
      description: "Danau vulkanik terbesar di Asia Tenggara, cocok untuk wisata keluarga."
    },
    {
      id: 3,
      title: "Air Terjun Sipiso-piso",
      category: "Air Terjun",
      image: "https://drive.google.com/uc?export=view&id=1MD1Gyty-S7VUpaiPCMJwujkw31q5qnfi",
      description: "Air terjun setinggi 120 meter dengan panorama Danau Toba."
    },
    {
      id: 4,
      title: "Danau Linting",
      category: "Danau",
      image: "https://drive.google.com/uc?export=view&id=1LVOBQ1LiUNzB05REzPPW2l5TisKz0_fd",
      description: "Danau kecil dengan air berwarna hijau kebiruan dan suasana tenang."
    }
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedDestinations = destinations.slice(
    (currentPage - 1) * 6,
    currentPage * 6
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
        {/* Title and Search Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-center w-full">Peta Destinasi</h1>
          <input
            type="text"
            placeholder="Search"
            className="w-full sm:w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Peta Interaktif */}
        <div className="mb-6 flex justify-center">
          <Image
            src="https://drive.google.com/uc?export=view&id=1LVOBQ1LiUNzB05REzPPW2l5TisKz0_fd"
            alt="Peta Interaktif"
            width={800}
            height={400}
            className="w-full sm:w-2/3 md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Category Filters */}
        <div className="flex justify-center space-x-4 mb-6">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">Gunung</button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">Pantai</button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">Museum</button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">Air Terjun</button>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
          {paginatedDestinations.map((destination) => (
            <Link key={destination.id} href={`/destinasi/${destination.id}`} className="block">
              <div className="bg-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{destination.title}</h3>
                <p className="text-gray-600 text-sm">{destination.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4 mt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg disabled:bg-gray-300"
          >
            Previous
          </button>
          <span className="text-lg font-semibold">Page {currentPage}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage * 6 >= destinations.length}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default DestinationPage;
