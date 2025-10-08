import Link from "next/link";
import Logo from "../../assets/Logo.svg";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.container}>
      <Link href="/" className={css.logo}>
        <Logo />
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
