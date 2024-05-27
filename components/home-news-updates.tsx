import type { NextPage } from "next";
import Cards2 from "./cards2";
import styles from "./home-news-updates.module.css";

export type HomeNewsUpdatesType = {
  className?: string;
};

const HomeNewsUpdates: NextPage<HomeNewsUpdatesType> = ({ className = "" }) => {
  return (
    <section className={[styles.homeNewsUpdates, className].join(" ")}>
      <h1 className={styles.newsUpdates}>{`News & Updates`}</h1>
      <div className={styles.carousel}>
        <img className={styles.icons} alt="" src="/icons-10.svg" />
        <div className={styles.newsUpdateCards}>
          <Cards2 />
          <Cards2 />
          <Cards2 />
        </div>
        <img className={styles.icons1} alt="" src="/icons-11.svg" />
      </div>
      <div className={styles.carousal}>
        <img
          className={styles.carouselRedDot}
          alt=""
          src="/carousel-red-dot.svg"
        />
        <img
          className={styles.carouselRedDot1}
          alt=""
          src="/carousel-red-dot-1.svg"
        />
        <img
          className={styles.carouselRedDot2}
          alt=""
          src="/carousel-red-dot-1.svg"
        />
        <img
          className={styles.carouselRedDot3}
          alt=""
          src="/carousel-red-dot-1.svg"
        />
        <img
          className={styles.carouselRedDot4}
          alt=""
          src="/carousel-red-dot-1.svg"
        />
      </div>
    </section>
  );
};

export default HomeNewsUpdates;
