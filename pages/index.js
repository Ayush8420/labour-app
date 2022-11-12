import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <Main />
      </div>
    </>
  );
}
