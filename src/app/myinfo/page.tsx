"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bgColor?: string;
  linkGithub?: string;
}

interface TeamGroup {
  title: string;
  members: TeamMember[];
}

// Project Manager
const projectManager: TeamMember = {
  name: "Andrian Reinaldo Crispin, S.H., S.Kom., M.Kom.",
  role: "Project Manager",
  image: "https://drive.google.com/uc?id=1nhoE2w1sFzSGD6ZzeBTLBcjif-WmwyoY",
  bgColor: "bg-white",
  linkGithub: "",
};

// Kelompok tim
const teamGroups: TeamGroup[] = [
  {
    title: "Tim Moodboard",
    members: [
      {
        name: "Vina Octaviani",
        role: "Anggota",
        image:
          "https://drive.google.com/uc?id=1rxSd28npDrJNfMy3hxsyW4-P_XnRYPIX",
        bgColor: "bg-orange-100",
        linkGithub: "https://github.com/octvinaa",
      },
      {
        name: "Agita Putri Br Bangun",
        role: "Anggota",
        image:
          "https://drive.google.com/uc?id=1CmVnVLEmZkaWUbEy82PM1GMJo9eOuJ20",
        bgColor: "bg-orange-100",
        linkGithub: "https://share.google/CF4lLZrjb20lP3a76",
      },
      {
        name: "Rian Syahputra Pandiangan",
        role: "Anggota",
        image:
          "https://drive.google.com/uc?id=1-YZ-FinxDsU7qJX41qZTS4WRr1KxFkbV",
        bgColor: "bg-orange-100",
        linkGithub: "",
      },
    ],
  },
  {
    title: "Tim UI/UX",
    members: [
      {
        name: "Christine Ester Novita Sari",
        role: "Anggota",
        image:
          "https://drive.google.com/uc?id=1WG0py6OyPJwdvh1kRDhrVDUYffaETB3H",
        bgColor: "bg-purple-100",
        linkGithub: "https://github.com/ChristineEster",
      },
      {
        name: "Yuni Arfiana P. br Sinuhaji",
        role: "Anggota",
        image:
          "https://drive.google.com/uc?id=1qdapeLp_bYEU8bAG8Rf5WI8cNrfZC2XZ",
        bgColor: "bg-purple-100",
        linkGithub: "https://github.com/yuniarfianaaa",
      },
      {
        name: "Yesi Sesilia Sitompul",
        role: "Anggota",
        image:
          "https://drive.google.com/uc?id=1489DjHufLrS8KgsKhDUa4k8bNbtwgzqd",
        bgColor: "bg-purple-100",
        linkGithub: "https://github.com/yessisesiliasitompul13-ctrl",
      },
      {
        name: "Shabrina Shafa Sembiring ",
        role: "Anggota",
        image:
          "https://drive.google.com/uc?id=1yswPm6iNu-R0luO78wyJQUiU0QPee1FB",
        bgColor: "bg-purple-100",
        linkGithub: "https://github.com/shabrinasembiring14",
      },
    ],
  },
  {
    title: "Tim Aset dan Dokumentasi",
    members: [
      {
        name: "Lundu Pratama Adrian Nababan",
        role: "Anggota",
        image:
          "https://drive.google.com/uc?id=1N1ymBlITghQt9fyuvEt9dK2a8Al6KL4s",
        bgColor: "bg-green-100",
        linkGithub: "https://github.com/lundunababan",
      },
      {
        name: "Risky Anita Saragih",
        role: "Anggota",
        image:
          "https://drive.google.com/uc?id=1UG9EkbFut9Z1ClhLO854VhD-JAb_IWqX",
        bgColor: "bg-green-100",
        linkGithub: "https://github.com/riskyanita",
      },
      {
        name: "Friska Meilani Barus",
        role: "Anggota",
        image:
          "https://drive.google.com/uc?id=1vo0eoQiOTxk2f377UOQFAOxCvaamQzpK",
        bgColor: "bg-green-100",
        linkGithub: "https://github.com/fbarus13-design",
      },
    ],
  },
  {
    title: "Tim Visualisasi Data",
    members: [
      {
        name: "Eifel Trizilfani Nainggolan",
        role: "Anggota",
        image:
          "https://drive.google.com/uc?id=1SPzBlasEjkfRNU4QdFlW8MvHr8eo3Tdh",
        bgColor: "bg-yellow-100",
        linkGithub: "https://github.com/etfngl",
      },
      {
        name: "Yesi Dwi Pratiwi",
        role: "Anggota",
        image:
          "https://drive.google.com/uc?id=1maUVSVNrKm1MPd7SnASSoZd00cVv7jBf",
        bgColor: "bg-yellow-100",
        linkGithub: "https://github.com/Yesidwipratiwi",
      },
      {
        name: "Ezra Tamara Dewi Tambunan",
        role: "Anggota",
        image:
          "https://drive.google.com/uc?id=1CAfpf4xHrpXqdnyYaxZbx_AZ3GwJJM-6",
        bgColor: "bg-yellow-100",
        linkGithub: "https://github.com/ezracans",
      },
    ],
  },
  {
    title: "Tim Pemrograman",
    members: [
      {
        name: "Anggiat Roberto Sinaga",
        role: "Anggota",
        image:
          "https://drive.google.com/uc?id=1OuWegEG_toVLH7rqRTMC0dR1YuCgOr0U",
        bgColor: "bg-blue-100",
        linkGithub: "https://github.com/anggiatsinaga",
      },
      {
        name: "Gres Audia Pasaribu",
        role: "Anggota",
        linkGithub: "https://github.com/gresaudiapasaribu",
        image:
          "https://drive.google.com/uc?id=17DrB-AbZv2wdw3Y5iF-az-3HSROg3b-j",
        bgColor: "bg-blue-100",
      },
      {
        name: "Muhammad Akbar Raihansyah",
        role: "Anggota",
        image:
          "https://drive.google.com/uc?id=1431yCbTwU5dWmjkfyvIdgSr3BGBHrz8o",
        bgColor: "bg-blue-100",
        linkGithub: "https://github.com/akbar33949",
      },
    ],
  },
];

const TentangKamiPage: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
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
    <div className="bg-gray-100 font-display">
      {/* Hero Section */}
      <section className="relative md:h-[350px]">
        <Image
          src="https://drive.google.com/uc?export=view&id=1bMuhhfnYRNiSanLPJP3ssJxqupMd55AW"
          alt="Banner"
          sizes="100vw"
          fill
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center font-heading">
            Liburan Cerdas, Pengalaman Berkesan.
          </h1>
        </div>
      </section>

      {/* Deskripsi */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h3 className="text-xl font-semibold mb-4">
            Hai, Sobat Keliling! 👋
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Temukan keindahan Sumatera Utara dalam satu genggaman! Melalui
            platform ini, Anda dapat mengakses informasi wisata yang lengkap,
            akurat, dan selalu diperbarui. Mulai dari panorama alam yang
            memukau, kekayaan budaya yang unik, hingga berbagai destinasi
            populer maupun tersembunyi, semua tersaji dengan mudah dan praktis.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Smart Tourism hadir untuk memudahkan wisatawan dalam merencanakan
            perjalanan yang nyaman, aman, dan berkesan. Tak hanya itu, platform
            ini juga mendukung pengembangan pariwisata berkelanjutan serta
            memperkenalkan kearifan lokal agar semakin dikenal di tingkat
            nasional maupun internasional. Dengan inovasi digital, Sumatera
            Utara kini semakin dekat untuk dijelajahi.
          </p>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-12 bg-gray-50 px-desk">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-100 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">Visi Kami</h3>
              <p>
                Menjadikan Sumatera Utara sebagai destinasi unggulan yang
                dikenal luas, baik di tingkat nasional maupun internasional.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-blue-100 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">Misi Kami</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-left">
                <li>
                  Memberikan informasi wisata yang lengkap, akurat, dan mudah
                  diakses.
                </li>
                <li>
                  Memperkenalkan budaya lokal dan kearifan masyarakat Sumut.
                </li>
                <li>
                  Membantu wisatawan merencanakan perjalanan yang nyaman, aman,
                  dan berkesan.
                </li>
                <li>
                  Mendukung pengembangan ekowisata dan pariwisata berkelanjutan
                  di Sumatera Utara.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Manager */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center font-display">
          <h2 className="text-3xl font-bold mb-6 font-heading">
            Kenalan Dengan Tim Kami
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mx-auto w-60 p-6 rounded-xl shadow-lg bg-gradient-to-br from-blue-100 to-white flex flex-col items-center cursor-pointer"
            onClick={() => setSelectedMember(projectManager)}
          >
            <Image
              src={projectManager.image}
              alt={projectManager.name}
              width={150}
              height={150}
              className="rounded-md border-4 border-white shadow-md mb-4 object-cover"
            />
            <h3 className="text-lg font-bold">{projectManager.name}</h3>
            <p className="text-gray-600">{projectManager.role}</p>
          </motion.div>
        </div>
      </section>

      {/* Team Groups */}
      <section className="pb-12 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          {teamGroups.map((group, idx) => (
            <div key={idx} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">{group.title}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {group.members.map((member, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className={`w-56 rounded-xl shadow-lg p-6 flex flex-col items-center cursor-pointer ${member.bgColor}`}
                    onClick={() => setSelectedMember(member)}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="rounded-full border-4 border-white shadow-md mb-4 object-cover"
                    />
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Zoom */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative bg-white p-6 rounded-xl shadow-2xl max-w-md w-full text-center"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
              >
                ✕
              </button>
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                width={250}
                height={250}
                className="rounded-full border-4 border-gray-200 shadow-md mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">{selectedMember.name}</h3>
              <p className="text-gray-600">{selectedMember.role}</p>
              {selectedMember.linkGithub && selectedMember.linkGithub !== "" && (
                <a
                  href={selectedMember.linkGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Lihat Github
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TentangKamiPage;