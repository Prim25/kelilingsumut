import Image from "next/image";
import { articles } from "@/app/data/articles";
import Link from "next/link";
interface Props {
  params: { artikelId: string };
}
export default function ArtikelDetail({ params }: Props) {
  const article = articles.find((a) => a.id === Number(params.artikelId));
  if (!article) {
    return <div className="p-6 text-red-600">Artikel tidak ditemukan.</div>;
  }

  return (
    <main className="container mx-auto px-4 md:px-desk mt-30">
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
            alt="Danau Siombak"
            width={800}
            height={400}
            className="rounded-2xl shadow mb-6"
          />
          <section className="space-y-6">
            <p>
              Tempat wisata Medan nggak pernah mati gaya! Banyak sudut cantik
              yang bisa buat memori indah di lensa kamera hingga mata kamu
              sendiri lho!
            </p>
            <p>
              Tunggu apa lagi? Simak dibawah yuk rekomendasi tempat wisata di
              Medan khusus buat kamu!
            </p>

            <div className="space-y-6">
              {[
                {
                  no: 1,
                  title: "Taman Wisata Danau Siombak Marelan",
                  desc: "Taman wisata Danau Siombak Marelan, merupakan danau buatan yang berlokasi di Jl. Ps. Nippon No.Ujung, Paya Pasir, Kecamatan Medan Marelan, Kota Medan, Sumatera Utara.",
                },
                {
                  no: 2,
                  title: "Istana Maimun",
                  desc: "Istana Maimun, salah satu yang menjadi tempat wisata populer di kota Medan. Berlokasi di jalan Brigjend Katamso No. 66, A U R, Kec. Medan Maimun, Kota Medan, Sumatera Utara.",
                },
                {
                  no: 3,
                  title: "Taman Sri Deli",
                  desc: "Taman Sri Deli, salah satu taman kota yang berserahan untuk kota Medan. Area taman yang dilengkapi dengan air mancur ini terletak di Jalan Sisingamangaraja, Mesjid, Kecamatan Medan Kota, Kota Medan. Taman ini buka 24 jam dan punya area bermain anak.",
                },
                {
                  no: 4,
                  title: "Rumah Adat Karo GARISTA",
                  desc: "Rumah Adat Karo GARISTA, merupakan tujuan wisata yang tepat untuk mempelajari budaya. Terletak di Jalan Bunga Herba 5 Ujung No.89, Simpang Selayang, Kecamatan Medan Selayang, Kota Medan. Tiket masuk Rp 10.000, buka jam 08.00 – 17.00.",
                },
                {
                  no: 5,
                  title: "Taman Cadika Pramuka",
                  desc: "Taman ini punya area padang rumput luas, arena bermain, spot foto, dan kafe. Lokasi di Jalan Karya Wisata, Pangkalan Masyhur, Kecamatan Medan Johor. Buka 05.00 – 22.00.",
                },
                {
                  no: 6,
                  title: "Rumah Tjong A Fie Mansion",
                  desc: "Rumah Tjong A Fie Mansion, milik seorang pedagang sukses Tionghoa abad ke-19. Gaya arsitektur bergaya Art Deco dengan perpaduan budaya Cina dan Eropa.",
                },
                {
                  no: 7,
                  title: "Gedung London Sumatera",
                  desc: "Gedung tua peninggalan Belanda tahun 1906, kini dikenal sebagai Lonsum. Terletak di Jl. Jendral Ahmad Yani No.2, Kesawan, Kota Medan. Dulu hanya bisa dimasuki kalangan elite, sekarang terbuka untuk umum.",
                },
              ].map((item) => (
                <div key={item.no} className="">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">{item.no}.</span>
                    <h2 className="font-semibold text-lg">{item.title}</h2>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="space-y-3 mt-42">
          {articles
            .filter((a) => a.id !== article.id)
            .slice(0, 3)
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
