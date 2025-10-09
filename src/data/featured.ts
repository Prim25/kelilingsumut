// src/data/featured.ts
export type FeaturedPlace = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  blurb: string;
  radiusKm?: number;
  hotels: { name: string; url?: string }[];
  restaurants: { name: string; url?: string }[];
  travel: string[]; // short travel tips
};

export const FEATURED_SUMUT: FeaturedPlace[] = [
  {
    id: "tuktuk-lake-toba",
    name: "Tuktuk (Lake Toba)",
    // Tuktuk Siadong coordinates
    lat: 2.6650895, lng: 98.8486809,
    blurb:
      "Waterfront village on Samosir Island—base for exploring Lake Toba, views, boat trips, Batak culture.",
    radiusKm: 8,
    hotels: [
      { name: "Marianna Resort & Convention (Tuktuk)", url: "https://www.tripadvisor.com/Hotels-g8132644-Tuktuk_Siadong_Samosir_Island_North_Sumatra_Sumatra-Hotels.html" },
      { name: "Tuk Tuk Timbul Bungalows", url: "https://www.expedia.com/Lake-Toba-Hotels.0-l6295843-0.Travel-Guide-Filter-Hotels" }
    ],
    restaurants: [
      { name: "Jenny’s Restaurant (Tuktuk)", url: "https://www.tripadvisor.com/Restaurant_Review-g3187028-d2173024-Reviews-Jenny_s_Restaurant-Ambarita_Samosir_Island_North_Sumatra_Sumatra.html" },
      { name: "Laster Jony’s Bar & Grill", url: "https://exploringsumatra.com/best-restaurants-in-tuktuk-lake-toba/" }
    ],
    travel: [
      "KNO → Parapat: 3–4h by private car via toll road, +30–45m ferry to Tuktuk.",
    ],
  },
  {
    id: "bukit-lawang",
    name: "Bukit Lawang (Leuser)",
    // Bukit Lawang village
    lat: 3.54932, lng: 98.12245,
    blurb:
      "Gateway to Gunung Leuser NP—orangutans, river tubing, jungle treks.",
    radiusKm: 6,
    hotels: [
      { name: "Ecolodge Bukit Lawang", url: "https://www.expedia.com/Bukit-Lawang-Hotels-Ecolodge-Bukit-Lawang.h17425049.Hotel-Information" },
      { name: "EcoTravel Cottages", url: "https://www.sumatra-ecotravel.com/ecotravel-cottages/" }
    ],
    restaurants: [
      { name: "Kapal Bambu Restaurant (at Ecolodge)", url: "https://bukitlawang.ecolodges.id/restaurant/" }
    ],
    travel: [
      "Medan/KNO → Bukit Lawang: ~3–5h (fastest by private car).",
    ],
  },
  {
    id: "berastagi",
    name: "Berastagi (Sibayak & Gundaling)",
    // Berastagi town
    lat: 3.185291, lng: 98.504913,
    blurb:
      "Highland town for Mt. Sibayak hikes, hot springs, fruit market, views.",
    radiusKm: 6,
    hotels: [
      { name: "Mikie Holiday Resort & Hotel", url: "https://www.expedia.com/Berastagi-Hotels-Mikie-Holiday-Resort-Hotel.h5249774.Hotel-Information" },
      { name: "Hotel Sibayak Internasional", url: "https://www.booking.com/hotel/id/sibayak.html" }
    ],
    restaurants: [
      { name: "Iyo Restaurant (local dishes)", url: "https://www.bucketlistly.blog/posts/berastagi-best-things-to-do" },
      { name: "Mesikel Bar & Resto (near Gundaling)", url: "https://www.tripadvisor.com.my/RestaurantsNear-g469407-d4435588-Gundaling_Hill-Berastagi_North_Sumatra_Sumatra.html" }
    ],
    travel: [
      "Medan → Berastagi: ~1–2h by car (traffic-dependent).",
    ],
  },
];
