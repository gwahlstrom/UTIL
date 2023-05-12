import { myContext } from "../components/Context";
import Navbar from "../components/Navbar";
import Timer from "../components/Timer";
import Weather from "../components/Weather";
import styles from "./Home.module.scss";
import React from "react";
import { useContext, useState, useEffect } from "react";

function Home() {
  const { weatherActive, timerActive } = useContext(myContext)
  return (
    <>
      <div className={styles.background}>
        <Navbar />
        {weatherActive? <Weather/> : null}
        {timerActive? <Timer/> : null}
      </div>
    </>
  );
}

export default Home;
