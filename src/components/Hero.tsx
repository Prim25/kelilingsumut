"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
        <div className="flex items-center mb-4 space-x-2">
          <motion.span
            className="w-4 h-4 bg-blue-500 rounded-full"
            animate={{ y: [0, -18, 0] }}
            transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
          />
          <motion.span
            className="w-4 h-4 bg-yellow-400 rounded-full"
            animate={{ y: [0, -18, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />
          <motion.span
            className="w-4 h-4 bg-orange-400 rounded-full"
            animate={{ y: [0, -18, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />
        </div>
        <p className="text-xl font-bold text-blue-700 animate-pulse">Memuat...</p>
      </div>
    );
  }

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