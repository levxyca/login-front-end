import axios from "axios";
import { useRouter } from "next/router";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import logo from "../public/assets/logo.png";

let collection = "foods";

export async function getStaticProps() {
  // let isLogged = sessionStorage.getItem("isLogged");
  let isLogged = true;
  if (isLogged === true) {
    // let token = sessionStorage.getItem("token");
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjU2NDQwNzY2LCJleHAiOjE2NTkwMzI3NjZ9.dI7rqYLSNQ3AcixUuZzwcXdcfNu_iWoHoRMgHPzak00";
    const data = await axios
      .get(`http://localhost:1337/${collection}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return {
          redirect: {
            destination: "/",
          },
        };
      });
    const collectionResult = await data;
    return {
      props: { collectionResult },
    };
  } else {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
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
            {collectionResult.map((item) => {
              return item.name !== null ? (
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
              ) : (
                <></>
              );
            })}
          </article>
        </div>
      </main>
    </div>
  );
}
