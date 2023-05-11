import Navbar from "../components/Navbar";
import styles from "./Home.module.scss";
import React from "react";

function Home() {
  return (
    <>
      <div className={styles.background}>
        <Navbar />
      </div>
    </>
  );
}

export default Home;
