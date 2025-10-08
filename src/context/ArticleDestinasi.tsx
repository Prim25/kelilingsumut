"use client";

import {
  ReactNode,
  useState,
  createContext,
  useEffect,
  useContext,
} from "react";

type Destination = {
  id: number;
  nama: string;
  kategori: string;
  gambarUtama: string;
  deskripsi: string;
  deskripsiUtama: string;
  galeri: string[];
};

type DestinationContextType = {
  destinations: Destination[];
  getDestinationById: (id: string) => Destination | undefined;
};

export const DestinationContext = createContext<
  DestinationContextType | undefined
>(undefined);

export function DestinationProvider({ children }: { children: ReactNode }) {
  const [destinations, setDestinations] = useState<Destination[]>([]);

  const getDataDestination = async () => {
    try {
      const res = await fetch("/data/destinations.json");
      const data = await res.json();
      setDestinations(data);
    } catch (error) {
      console.error("Gagal ambil data destinasi:", error);
    }
  };

  useEffect(() => {
    getDataDestination();
  }, []);

  const getDestinationById = (id: string) => {
    return destinations.find((d) => d.id.toString() === id);
  };

  return (
    <DestinationContext.Provider value={{ destinations, getDestinationById }}>
      {children}
    </DestinationContext.Provider>
  );
}

export function useDestinations() {
  const context = useContext(DestinationContext);
  if (!context) {
    throw new Error(
      "useDestinations harus digunakan di dalam DestinationProvider"
    );
  }
  return context;
}
