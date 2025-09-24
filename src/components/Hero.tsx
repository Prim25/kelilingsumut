const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-fixed bg-cover bg-center flex items-center text-white"
      style={{ backgroundImage: "url('/images/viewbg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Konten */}
      <div className="relative z-10 container mx-auto px-6 md:px-24">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-2xl">
          Discover <span className="text-green-400">Sumut</span>, where nature
          meets culture.
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl text-gray-200">
          Keliling berbagai tempat wisata di Sumatera Utara dengan mudah dan
          murah.
        </p>
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300">
          Temukan Destinasi Terbaikmu
        </button>
      </div>
    </section>
  );
};

export default Hero;
