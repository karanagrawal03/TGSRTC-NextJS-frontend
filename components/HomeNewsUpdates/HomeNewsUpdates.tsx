import type { NextPage } from "next";
import styles from "./HomeNewsUpdates.module.css";
import Carousal from "../Carosal";
import { useEffect, useState } from "react";
import { NEWS_UPDATES } from "../../constants";
import NewsAndUpdatesCard from "../HomeCard/HomeCard";

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
      <h1 className={styles.newsUpdates}>{NEWS_UPDATES}</h1>
      <div className={styles.carousel}>
        <Carousal
          perView={perView}
          autoplay={false}
          sliderClassName={styles.customSlider}
          children={[
            <NewsAndUpdatesCard />,
            <NewsAndUpdatesCard />,
            <NewsAndUpdatesCard />,
            <NewsAndUpdatesCard />,
            <NewsAndUpdatesCard />,
            <NewsAndUpdatesCard />,
            <NewsAndUpdatesCard />,
            <NewsAndUpdatesCard />,
            <NewsAndUpdatesCard />,
            <NewsAndUpdatesCard />,
            <NewsAndUpdatesCard />,
          ]}
        />
      </div>
    </section>
  );
};

export default HomeNewsUpdates;
