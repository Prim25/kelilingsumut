"use client";

import Image from "next/image";
import Link from "next/link";
import { useArticles } from "@/context/ArticleContext";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoIosShareAlt } from "react-icons/io";

interface ArtikelDetailProps {
  params: { artikelId: string };
}

export default function ArtikelDetail({ params }: ArtikelDetailProps) {
  const { artikelId } = params 
  const { getArticleById, articles } = useArticles();

  const article = getArticleById(artikelId);
  if (!article) {
    return <p className="text-center py-10">Artikel tidak ditemukan...</p>;
  }

  return (
    <main className="container mx-auto px-4 md:px-desk mt-5 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Artikel */}
        <article className="lg:col-span-2">
          <span className="text-sm font-semibold text-gray-500">
            {article.category}
          </span>
          <h1 className="text-3xl font-bold mt-2 mb-3 leading-snug">
            {article.title}
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Tim Keliling Sumut • {article.date} • {article.readingTime}
          </p>
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={400}
            className="rounded-2xl shadow mb-6"
          />

          <div className="flex items-center gap-3 mb-5">
            <div className="bg-primary p-3 rounded-full text-white">
              <FaInstagram className="text-[14px]" />
            </div>
            <div className="bg-primary p-3 rounded-full text-white">
              <FaTiktok className="text-[14px]" />
            </div>
            <div className="bg-primary p-3 rounded-full text-white">
              <RiTwitterXFill className="text-[14px]" />
            </div>
            <div className="bg-primary p-3 rounded-full text-white">
              <IoIosShareAlt className="text-[14px]" />
            </div>
          </div>

          <section className="space-y-6">
            <p className="mb-5">{article.secIntro}</p>
            <div className="space-y-3">
              {(article.destinations || []).map((dest, i) => (
                <div key={dest.id}>
                  <h2 className="text-lg font-semibold mb-2">
                    {i + 1}. {dest.title}
                  </h2>
                  <p>{dest.description}</p>
                </div>
              ))}
            </div>
            {article.outro && (
              <p className="mt-8 text-gray-800">{article.outro}</p>
            )}
          </section>
        </article>

        {/* Sidebar */}
        <aside className="space-y-3 mt-42">
          {articles
            .filter((a) => a.id !== article.id)
            .slice(0, 5)
            .map((item, i) => (
              <Link
                key={i}
                href={`/artikel/${item.id}`}
                className="flex items-center gap-4 bg-white rounded-xl shadow hover:shadow-md transition p-3"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={90}
                  height={70}
                  className="rounded-lg object-cover"
                />
                <div>
                  <span className="text-xs font-semibold text-blue-600">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-medium leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
              </Link>         
            ))}
        </aside>
      </div>
    </main>
  );
}
