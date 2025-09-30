import styles from "./Layout.module.css";
const destinasi = [
  {
    name: "Danau Toba",
    img: "https://drive.google.com/uc?export=view&id=1BYhOwwUAil_hSNauFUNVHv3_RBFXMEYz",
  },
  {
    name: "Air Terjun Dua Warna",
    img: "https://drive.google.com/uc?export=view&id=1G98h9hR4svGw6oHw6MBj7VX7oajHON2t",
  },
  {
    name: "Pulau Samosir",
    img: "https://drive.google.com/uc?export=view&id=1IdhrwRkcno1lShLN2dH2DidE62qJhWkc",
  },
];
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function DestinasiPopuler() {
  return (
    <section id="destinasi" className="py-16 container mx-auto px-6 md:px-desk">
      <div className="flex items-center justify-between mb-14">
        <div>
          <h2 className="text-2xl font-bold mb-2">Destinasi Populer</h2>
          <p className="">
            Destinasi populer di Sumatera Utara yang wajib dikunjungi
          </p>
        </div>
        <div className={`${styles.bgColor} p-4 text-xl rounded-full`}>
          <FaArrowRight className="text-white" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {destinasi.map((d, i) => (
          <div
            key={i}
            className="relative group w-full h-[450px] overflow-hidden shadow-lg"
          >
            <Image
              src={d.img}
              alt={d.name}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />

            {/* blur bar di bawah */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-black/0 backdrop-blur-md opacity-10 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* text muncul naik */}
            <p className="absolute bottom-10 left-8 text-2xl font-bold text-white opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
              {d.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
