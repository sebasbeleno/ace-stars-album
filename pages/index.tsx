import type { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout title="Home | Stars album" description="Welcome back!">
      <div className="flex flex-col content-center items-center justify-center w-full">
        <h1 className={styles.landing_title}>Bienvenido, explorador</h1>
        <p className={styles.landing_subtitle}>
          Consigue láminas y hazte con la fuerta
        </p>
      </div>
    </Layout>
  );
};

export default Home;
