import styles from "./Layout.module.css";
const destinasi = [
  { name: "Danau Toba", img: "/images/pop1.jpg" },
  { name: "Air Terjun Dua Warna", img: "/images/pop2.jpg" },
  { name: "Pulau Samosir", img: "/images/viewbg.jpg" },
];
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image"
export default function DestinasiPopuler() {
  return (
    <section id="destinasi" className="py-16 container mx-auto px-6 md:px-24">
      <div className="flex items-center justify-between mb-14">
        <div>
          <h2 className="text-2xl font-bold mb-2">Destinasi Populer</h2>
          <p className="">
            Destinasi populer di Sumatera Utara yang wajib dikunjungi
          </p>
        </div>
        <div className={`${styles.bgColor} p-4 rounded-full text-xl`}>
          <FaArrowRight className="text-white" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {destinasi.map((d, i) => (
          <div key={i} className="overflow-hidden shadow-lg relative group">
            <Image
              src={d.img}
              alt={d.name}
              fill
              className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:h-115 group-hover:-mt-4 group-hover:mb-4"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <p className="font-bold text-2xl text-white absolute bottom-10 left-8">
              {d.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
