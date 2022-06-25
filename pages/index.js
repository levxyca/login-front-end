import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login on Orange" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Orange</h1>
        <form action="/send-data-here" method="post">
          <label>Email</label>
          <input type="text" id="email" name="email" />
          <label>Password</label>
          <input type="password" id="pass" name="pass" />
          <input type="checkbox" id="showPass" name="showPass" />
          <label htmlFor="showPass">Mostrar a senha</label>
          <button type="submit">Acessar</button>
          <button type="submit">Cadastrar</button>
        </form>
      </main>
    </div>
  );
}
