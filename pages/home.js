import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import logo from "../public/assets/logo.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Orange</title>
        <meta name="description" content="Orange" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.hero}>
        <div className={styles.hero__container}>
          <Image
            className={styles.logo}
            src={logo}
            width={280}
            height={35}
            alt="Orange"
          />
          <nav>
            <ul className={styles.list}>
              <li className={styles.list__item}>Foods</li>
              <li className={styles.list__item}>People</li>
              <li className={styles.list__item}>Places</li>
            </ul>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.main__container}>
          <h1 className={styles.title}>List of foods</h1>
          <div className={styles.separator}></div>
          <article>
            <section></section>
          </article>
        </div>
      </main>
    </div>
  );
}
