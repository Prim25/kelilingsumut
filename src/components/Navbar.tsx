import styles from "./Layout.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className={` absolute top-0 right-0 left-0 z-20 ${styles.navbar}`}>
      <div className=" container mx-auto flex gap-36 items-center px-10 md:py-5 md:px-24">
        <Image
          src={"/images/logo.png"}
          alt="Logo Wisata Sumut"
          width={50}
          height={50}
          className="rounded-full md:w-28"
        ></Image>
        <ul className="flex gap-6 text-[14px] md:text-2xl ">
          <li>
            <Link href="/">Beranda</Link>
          </li>
          <li>
            <Link href="#artikel">Artikel</Link>
          </li>
          <li>
            <Link href="#destinasi">Destinasi</Link>
          </li>
          <li>
            <Link href="#tentangkami">Tentang Kami</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
