// src/MapComponent.js
import React, { useEffect } from "react";
import L from "leaflet";

// Data destinasi wisata
const destinations = [
  { name: "Gunung Sinabung", lat: 3.1702, lng: 98.3928, description: "Gunung aktif di Sumatra Utara." },
  { name: "Pantai Parangtritis", lat: -8.0233, lng: 110.3075, description: "Pantai indah di Yogyakarta." },
  { name: "Air Terjun Sipiso-piso", lat: 2.9730, lng: 98.4233, description: "Air terjun tinggi di Sumatra Utara." },
  // Tambahkan destinasi lainnya sesuai kebutuhan
];

const MapComponent = () => {
  useEffect(() => {
    // Membuat peta
    const map = L.map("map", {
      center: [3.5952, 98.6722], // Titik tengah Indonesia (Sumatra Utara)
      zoom: 5,
    });

    // Menambahkan layer peta OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    // Menambahkan marker untuk setiap destinasi wisata
    destinations.forEach((destination) => {
      L.marker([destination.lat, destination.lng])
        .addTo(map)
        .bindPopup(`
          <b>${destination.name}</b><br />
          ${destination.description}
        `);
    });
  }, []);

  return <div id="map" style={{ height: "500px", width: "100%" }} />;
};

export default MapComponent;
