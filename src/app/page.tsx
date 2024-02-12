import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D0%BD%D1%96-%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D1%96%D0%B0%D0%BB%D0%B8">
        page 1
      </Link>
      <Link href="/%D0%BF%D1%80%D0%BE-%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D0%B5-%D0%B1%D0%BB%D0%B0%D0%B3%D0%BE%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D1%87%D1%8F">
        page 2
      </Link>
      <Link href="/%D0%BF%D1%80%D0%BE-%D1%82%D0%B5%D1%80%D0%B0%D0%BF%D1%96%D1%8E">
        page 3
      </Link>
      <Link href="/%D1%82%D0%B5%D0%BC%D0%B8">page 4</Link>

      <Link href="/%D1%82%D0%B5%D1%81%D1%82%D0%B8">page 5</Link>
    </main>
  );
}
