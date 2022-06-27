import { useRouter } from "next/router";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import logo from "../public/assets/logo.png";

let collection = "foods";

export async function getStaticProps() {
  const data = await fetch(`http://localhost:1337/${collection}`);

  const collectionResult = await data.json();

  return {
    props: { collectionResult },
  };
}

export default function Home({ collectionResult }) {
  const router = useRouter();

  const handleClick = (e, page) => {
    e.preventDefault();
    router.push(`/${page}`);
  };
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
              <li>
                <a
                  className={styles.list__item + " " + styles.active}
                  onClick={(e) => handleClick(e, "home")}
                >
                  Foods
                </a>
              </li>
              <li>
                <a
                  className={styles.list__item}
                  onClick={(e) => handleClick(e, "people")}
                >
                  People
                </a>
              </li>
              <li>
                <a
                  className={styles.list__item}
                  onClick={(e) => handleClick(e, "places")}
                >
                  Places
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.main__container}>
          <h1 className={styles.title}>List of {collection}</h1>
          <div className={styles.separator}></div>
          <article className={styles.galery}>
            {collectionResult?.map((item) => (
              <section className={styles.galery__item} key={item.id}>
                <Image
                  className={styles.galery__img}
                  src={`http://localhost:1337${item.link.url}`}
                  width={500}
                  height={500}
                  alt={item.link.alternativeText}
                />
                <h2 className={styles.galery__text}>{item.name}</h2>
              </section>
            ))}
          </article>
        </div>
      </main>
    </div>
  );
}
