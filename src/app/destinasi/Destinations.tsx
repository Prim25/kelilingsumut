"use client"; // Mark as a client-side component

import React, { useState } from "react";

const DestinationPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const destinations = [
    {
      title: "Gunung Sinabung",
      category: "Gunung",
      image: "/assets/gunung-sinabung.jpg", // Replace with actual image paths
      description: "Deskripsi tentang Gunung Sinabung",
    },
    {
      title: "Gunung Sinabung",
      category: "Gunung",
      image: "/assets/gunung-sinabung.jpg",
      description: "Deskripsi tentang Gunung Sinabung",
    },
    {
      title: "Gunung Sinabung",
      category: "Gunung",
      image: "/assets/gunung-sinabung.jpg",
      description: "Deskripsi tentang Gunung Sinabung",
    },
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedDestinations = destinations.slice(
    (currentPage - 1) * 3,
    currentPage * 3
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header Section */}
      {/* <header className="bg-blue-800 text-white p-6 rounded-lg shadow-md">
        <nav>
          <ul className="flex justify-around space-x-4">
            <li>Beranda</li>
            <li>Artikel</li>
            <li>Destinasi</li>
            <li>Tentang Kami</li>
          </ul>
        </nav>
      </header> */}

      {/* Main Content */}
      <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
        {/* Title and Search Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-center w-full">
            Destinasi
          </h1>
          <input
            type="text"
            placeholder="Search"
            className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Map Section */}
        <div className="mb-6">
          <img
            src="/assets/peta.jpg"
            alt="Peta Interaktif"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        {/* Category Filters */}
        <div className="flex space-x-4 mb-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Gunung
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Pantai
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Museum
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Air Terjun
          </button>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {paginatedDestinations.map((destination, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {destination.title}
              </h3>
              <p className="text-gray-600">{destination.description}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-800 text-white rounded-lg disabled:bg-gray-400"
          >
            Previous
          </button>
          <span className="text-lg font-semibold">Page {currentPage}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === 3}
            className="px-4 py-2 bg-blue-800 text-white rounded-lg disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-blue-800 text-white p-4 mt-6 rounded-lg shadow-md">
        <p className="text-center">Keliling Sumut © 2023. All Rights Reserved.</p>
        <nav>
          <ul className="flex justify-center space-x-4">
            <li>Beranda</li>
            <li>Artikel</li>
            <li>Destinasi</li>
            <li>Event</li>
            <li>Tentang Kami</li>
          </ul>
        </nav>
      </footer> */}
    </div>
  );
};

export default DestinationPage;
