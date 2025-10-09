"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
  Circle,
  Marker,
  Popup,
} from "react-leaflet";
import L, { GeoJSON as LGeoJSON } from "leaflet";
import type { Feature, FeatureCollection, Geometry, Point } from "geojson";
import { FEATURED_SUMUT, type FeaturedPlace } from "@/data/featured";

// ===== Fix default Leaflet icon for Next.js =====
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

// ===== Simple emoji icons for POIs (no extra assets needed) =====
const hotelIcon = L.divIcon({
  className: "poi-emoji",
  html: "🏨",
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});
const foodIcon = L.divIcon({
  className: "poi-emoji",
  html: "🍽️",
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

// ===== helpers =====
function colorFromCategory(kategori?: string) {
  const colors = ["#2563eb","#16a34a","#f59e0b","#ef4444","#8b5cf6","#0ea5e9","#84cc16","#f97316"];
  if (!kategori) return "#2563eb";
  let hash = 0; for (let i = 0; i < kategori.length; i++) hash = (hash * 31 + kategori.charCodeAt(i)) >>> 0;
  return colors[hash % colors.length];
}
const pointToLayer = (feature: Feature<Point, any>, latlng: L.LatLngExpression) =>
  L.circleMarker(latlng, { radius: 7, weight: 2, opacity: 1, fillOpacity: 0.9, color: "#111827", fillColor: colorFromCategory(feature?.properties?.kategori) });

const style = (feature: Feature<Geometry, any>) => ({ color: colorFromCategory(feature?.properties?.kategori), weight: 2, opacity: 0.9, fillOpacity: 0.3 });

function FitToBoundsOnce({ points }: { points: Array<[number, number]> }) {
  const map = useMap();
  const done = useRef(false);
  useEffect(() => {
    if (done.current || points.length === 0) return;
    const bounds = L.latLngBounds(points.map(([lat, lng]) => [lat, lng]));
    map.fitBounds(bounds.pad(0.2));
    done.current = true;
  }, [map, points]);
  return null;
}

type Poi = { id: number; name: string; lat: number; lng: number };

export default function MapClient({
  geojsonUrl = "/geo/destinations.geojson",
  selectedCategory,
  searchText,
}: {
  geojsonUrl?: string;
  selectedCategory: string; // "semua" | <kategori>
  searchText: string;
}) {
  const [raw, setRaw] = useState<FeatureCollection<Geometry, any> | null>(null);
  const geoJsonRef = useRef<LGeoJSON>(null);
  const [active, setActive] = useState<FeaturedPlace | null>(null);
  const [hotels, setHotels] = useState<Poi[]>([]);
  const [restaurants, setRestaurants] = useState<Poi[]>([]);
  const [loadingPoi, setLoadingPoi] = useState(false);

  // load GeoJSON
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(geojsonUrl, { cache: "no-store" });
        const data = (await res.json()) as FeatureCollection<Geometry, any>;
        if (!cancelled) setRaw(data);
      } catch (e) {
        console.error("Failed to load GeoJSON:", e);
      }
    })();
    return () => { cancelled = true; };
  }, [geojsonUrl]);

  // filter your GeoJSON using page state
  const filtered = useMemo<FeatureCollection<Geometry, any> | null>(() => {
    if (!raw) return null;
    const wantedCat = selectedCategory?.toLowerCase?.();
    const text = searchText?.toLowerCase?.() || "";
    const features = raw.features.filter((f) => {
      const p = f.properties || {};
      const catOk = selectedCategory === "semua" ? true : String(p.kategori || "").toLowerCase() === wantedCat;
      const searchOk = String(p.nama || "").toLowerCase().includes(text);
      return catOk && searchOk;
    });
    return { ...raw, features };
  }, [raw, selectedCategory, searchText]);

  // build Sumut-fit bounds from featured points (robust default view)
  const sumutPoints = FEATURED_SUMUT.map((p) => [p.lat, p.lng] as [number, number]);

  // popup HTML for GeoJSON features
  const onEachFeature = (feature: Feature<Geometry, any>, layer: L.Layer) => {
    const p = feature.properties || {};
    const nama = p.nama || "(tanpa nama)";
    const kategori = p.kategori || "-";
    const id = p.id ?? "";
    const href = `/destinasi/${id}`;
    const img = p.gambarUtama ? `<img src="${p.gambarUtama}" alt="${nama}" style="width:100%;max-height:140px;object-fit:cover;border-radius:8px;margin-bottom:8px;" />` : "";
    const desc = p.deskripsiUtama ? `<p style="margin:6px 0 0;line-height:1.3">${p.deskripsiUtama}</p>` : "";
    (layer as any).bindPopup(`
      <div style="min-width:220px;max-width:280px">
        ${img}
        <div style="font-weight:700;font-size:14px;margin-bottom:4px">${nama}</div>
        <div style="font-size:12px;opacity:.8;margin-bottom:4px">${kategori}</div>
        ${desc}
        <a href="${href}" style="display:inline-block;margin-top:8px;text-decoration:underline">Lihat detail</a>
      </div>
    `);
  };

  // fetch POIs when a featured destination becomes active
  useEffect(() => {
    if (!active) { setHotels([]); setRestaurants([]); return; }
    const controller = new AbortController();
    (async () => {
      try {
        setLoadingPoi(true);
        const r = await fetch(`/api/nearby?lat=${active.lat}&lng=${active.lng}&radius=${(active.radiusKm ?? 6) * 1000}`, {
          signal: controller.signal,
        });
        const data = await r.json();
        setHotels(data.hotels ?? []);
        setRestaurants(data.restaurants ?? []);
      } catch (e) {
        console.warn("Nearby fetch failed", e);
      } finally {
        setLoadingPoi(false);
      }
    })();
    return () => controller.abort();
  }, [active]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4">
      <div className="w-full h-[520px] rounded-2xl overflow-hidden border border-gray-200">
        <MapContainer center={[3.1, 98.7]} zoom={8} scrollWheelZoom style={{ width: "100%", height: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                     attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors' />

          {/* Fit to Sumut on first load */}
          <FitToBoundsOnce points={sumutPoints} />

          {/* Your main dataset */}
          {filtered && (
            <GeoJSON
              ref={geoJsonRef}
              data={filtered as any}
              onEachFeature={onEachFeature}
              pointToLayer={pointToLayer as any}
              style={style as any}
            />
          )}

          {/* Featured destinations (click to focus + fetch POIs) */}
          {FEATURED_SUMUT.map((p) => (
            <Marker
              key={p.id}
              position={[p.lat, p.lng]}
              eventHandlers={{
                click(e) {
                  const map = (e.target as any)._map as L.Map;
                  setActive(p);
                  map.setView([p.lat, p.lng], 13, { animate: true });
                },
              }}
            >
              <Popup>
                <div className="space-y-1">
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm opacity-80">{p.blurb}</div>
                  <div className="mt-2">
                    <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded">Rekomendasi</span>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Highlight radius & show POI markers when focused */}
          {active && (
            <>
              <Circle
                center={[active.lat, active.lng]}
                radius={(active.radiusKm ?? 6) * 1000}
                pathOptions={{ color: "#2563eb", weight: 2, opacity: 0.6, fillOpacity: 0.08 }}
              />

              {/* Hotels */}
              {hotels.map((h) => (
                <Marker key={`h-${h.id}`} position={[h.lat, h.lng]} icon={hotelIcon}>
                  <Popup><strong>Hotel</strong><div>{h.name}</div></Popup>
                </Marker>
              ))}

              {/* Restaurants */}
              {restaurants.map((r) => (
                <Marker key={`r-${r.id}`} position={[r.lat, r.lng]} icon={foodIcon}>
                  <Popup><strong>Restaurant</strong><div>{r.name}</div></Popup>
                </Marker>
              ))}
            </>
          )}
        </MapContainer>
      </div>

      {/* Side panel */}
      <aside className="border rounded-2xl p-4 bg-white h-[520px] overflow-y-auto">
        {active ? (
          <div>
            <h3 className="text-lg font-bold">{active.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{active.blurb}</p>

            <div className="mt-3 text-sm">
              {loadingPoi ? "Loading nearby hotels & restaurants…" : (
                <>
                  <h4 className="font-semibold mt-2">Nearby hotels</h4>
                  <ul className="list-disc ml-5">
                    {hotels.slice(0, 8).map((h) => <li key={h.id}>{h.name}</li>)}
                  </ul>
                  <h4 className="font-semibold mt-3">Nearby restaurants</h4>
                  <ul className="list-disc ml-5">
                    {restaurants.slice(0, 8).map((r) => <li key={r.id}>{r.name}</li>)}
                  </ul>
                </>
              )}
            </div>

            <button
              className="mt-4 text-sm px-3 py-1.5 rounded border hover:bg-blue-50"
              onClick={() => { setActive(null); setHotels([]); setRestaurants([]); }}
            >
              Reset fokus Sumut
            </button>
          </div>
        ) : (
          <div className="h-full grid place-items-center text-center text-sm text-gray-600">
            Klik salah satu pin <span className="font-medium">“Rekomendasi”</span> pada peta untuk zoom & lihat hotel/resto terdekat (ikon 🏨 & 🍽️).
          </div>
        )}
      </aside>
    </div>
  );
}
