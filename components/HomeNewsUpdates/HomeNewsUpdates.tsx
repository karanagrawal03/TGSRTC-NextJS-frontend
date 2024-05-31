import type { NextPage } from "next";
import styles from "./HomeNewsUpdates.module.css";
import Cards2 from "../HomeCard/HomeCard";
import Carousal from "../Carosal/Carousal";
import { useEffect, useState } from "react";

export type HomeNewsUpdatesType = {
  className?: string;
};

const HomeNewsUpdates: NextPage<HomeNewsUpdatesType> = ({ className = "" }) => {
  const [perView, setPerView] = useState(3);

  const updatePerView = () => {
    const width = window.innerWidth;
    if (width <= 450) {
      setPerView(1);
    } else if (width <= 750) {
      setPerView(2);
    } else {
      setPerView(3);
    }
  };

  useEffect(() => {
    // Set initial perView based on window size
    updatePerView();

    // Add event listener for window resize
    window.addEventListener("resize", updatePerView);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updatePerView);
    };
  }, []);

  return (
    <section className={[styles.homeNewsUpdates, className].join(" ")}>
      <h1 className={styles.newsUpdates}>{`News & Updates`}</h1>
      <div className={styles.carousel}>
        <Carousal
          perView={perView}
          autoplay={false}
          sliderClassName={styles.customSlider}
          children={[
            <Cards2 />,
            <Cards2 />,
            <Cards2 />,
            <Cards2 />,
            <Cards2 />,
            <Cards2 />,
            <Cards2 />,
            <Cards2 />,
            <Cards2 />,
          ]}
        />
      </div>
    </section>
  );
};

export default HomeNewsUpdates;
