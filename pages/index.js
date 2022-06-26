import { useRouter } from "next/router";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Login.module.css";

import logo from "../public/assets/logo.png";

export default function Login() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/home");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login on Orange" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <form className={styles.form} action="/send-data-here" method="post">
          <Image src={logo} width={300} height={40} alt="Orange" />
          <section className={styles.container}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input + " " + styles.email}
              type="text"
              id="email"
              name="email"
              placeholder="seunome@email.com"
            />
            <label className={styles.label} htmlFor="pass">
              Password
            </label>
            <input
              className={styles.input + " " + styles.pass}
              type="password"
              id="pass"
              name="pass"
              placeholder="Password"
            />
            <div className={styles.container_checkbox}>
              <input
                className={styles.checkbox}
                type="checkbox"
                id="showPass"
                name="showPass"
              />
              <label className={styles.checktext} htmlFor="showPass">
                Mostrar a senha
              </label>
            </div>
            <a className={styles.link} href="#">
              Problemas para acessar sua conta?
            </a>
            <button
              className={styles.login}
              type="submit"
              onClick={handleClick}
            >
              Acessar
            </button>
            <div className={styles.separators}>
              <div className={styles.separator}></div>
              <p className={styles.text}>ou</p>
              <div className={styles.separator}></div>
            </div>
            <button className={styles.register} type="submit">
              Cadastrar
            </button>
            <footer className={styles.footer}>
              <a className={styles.linkfooter} href="#">
                Termos de uso
              </a>
              <span className={styles.dotseparator}>•</span>
              <a className={styles.linkfooter} href="#">
                Política de privacidade
              </a>
            </footer>
          </section>
        </form>
      </main>
    </div>
  );
}
