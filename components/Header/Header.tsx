import Link from "next/link";
import Image from "next/image";
import css from "./Header.module.css";
export default function Header() {
  return (
    <header className={css.container}>
      <Link href="/" className={css.logo}>
        <Image src="/Logo.svg" alt="TravelTrack Logo" width={136} height={16} />
      </Link>
      <nav className={css.navContainer}>
        <Link href="/" className={css.navLinks}>
          Home
        </Link>
        <Link href="/catalog" className={css.navLinks}>
          Catalog
        </Link>
      </nav>
    </header>
  );
}
