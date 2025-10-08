import Link from "next/link";
import Image from "next/image";
import css from "./page.module.css";
export default function Home() {
  return (
    <section className={css.home}>
      <Image
        src="/img/Hero image.png"
        alt="Hero background"
        fill
        priority
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div className={css.titleContainer}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.subtitle}>
          You can find everything you want in our catalog
        </p>
        <Link className={css.button} href="/catalog">
          View Now
        </Link>
      </div>
    </section>
  );
}