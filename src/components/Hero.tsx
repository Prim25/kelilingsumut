import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-fixed bg-cover bg-center flex items-center text-white"
      style={{ backgroundImage: "url('/images/viewbg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Konten */}
      <div className="relative z-10 container mx-auto px-6 md:px-24 font-heading">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-[500px] font-heading">
          Discover <span className="text-green-400">Sumut</span>, where nature
          meets culture.
        </h1>
        <p className="mt-4 text-[13px] md:text-xl max-w-xl text-gray-200">
          Keliling berbagai tempat wisata di Sumatera Utara dengan mudah dan
          murah.
        </p>
        <Link
          href={"/destinasi"}
          className="w-[350px] mt-6 border flex items-center justify-center  gap-3 border-white hover:bg-blue-700 hover:border-0 px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300"
        >
          Temukan Destinasi Wisata
          <FaArrowRight className="text-white" />
        </Link>
      </div>
      <div className="absolute right-96 bottom-5">
        <Image
          src="/images/Vector1.png"
          width={160}
          height={160}
          alt=""
          className="object-cover w-full h-full rotate-180 "
        />
        <Image
          src="/images/Vector2.png"
          width={80}
          height={80}
          alt=""
          className="object-cover -right-10 w-14 h-14 absolute bottom-35"
        />
      </div>
    </section>
  );
};

export default Hero;
