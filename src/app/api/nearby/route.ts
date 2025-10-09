import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = Number(searchParams.get("lat"));
  const lng = Number(searchParams.get("lng"));
  const radius = Number(searchParams.get("radius") ?? 6000); // meters

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    return NextResponse.json({ error: "lat/lng required" }, { status: 400 });
  }

  // Overpass QL: hotels + restaurants within radius
  const q = `
    [out:json][timeout:25];
    (
      node["tourism"="hotel"](around:${radius},${lat},${lng});
      way["tourism"="hotel"](around:${radius},${lat},${lng});
      node["amenity"="restaurant"](around:${radius},${lat},${lng});
      way["amenity"="restaurant"](around:${radius},${lat},${lng});
    );
    out center 100;
  `;

  try {
    const res = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: `data=${encodeURIComponent(q)}`,
      // If you deploy on edge/runtime:node, keep this simple; Overpass can be slow
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Overpass error" }, { status: 502 });
    }

    type El = {
      type: "node" | "way" | "relation";
      id: number;
      lat?: number; lon?: number;
      center?: { lat: number; lon: number };
      tags?: Record<string, string>;
    };

    const json = await res.json();
    const elements: El[] = json.elements ?? [];

    const hotels: any[] = [];
    const restaurants: any[] = [];

    for (const el of elements) {
      const p = el.tags || {};
      const name = p.name || "(no name)";
      const latlng = el.type === "node"
        ? { lat: el.lat!, lng: el.lon! }
        : el.center
          ? { lat: el.center.lat, lng: el.center.lon }
          : null;
      if (!latlng) continue;

      if (p.tourism === "hotel") {
        hotels.push({ id: el.id, name, ...latlng });
      } else if (p.amenity === "restaurant") {
        restaurants.push({ id: el.id, name, ...latlng });
      }
    }

    return NextResponse.json({ hotels, restaurants });
  } catch (e) {
    return NextResponse.json({ error: "fetch failed" }, { status: 500 });
  }
}
