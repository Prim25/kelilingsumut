import React from "react";

const Hero = () => {
  return (
    <section
      className="min-h-screen bg-fixed bg-cover bg-bottom flex flex-col justify-center items-start text-white md:px-24 px-10"
      style={{ backgroundImage: "url('/images/viewbg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 mt-14">
        <h1 className="text-4xl md:text-5xl font-bold max-w-xl ">
          Discover <span className="text-green-400">Sumut</span>, where nature
          meets culture.
        </h1>
        <p className="mt-4 text-lg max-w-md">
          Keliling berbagai tempat wisata di Sumatera Utara dengan mudah dan
          murah
        </p>
        <button className="mt-6 bg-blue-800 hover:bg-blue-900 px-6 py-2 rounded-full font-medium">
          Temukan Destinasi Terbaikmu
        </button>
      </div>
    </section>
  );
};

export default Hero;
