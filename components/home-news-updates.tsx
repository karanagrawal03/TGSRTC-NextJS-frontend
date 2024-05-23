import type { NextPage } from "next";
import Cards from "./cards";
import styles from "./home-news-updates.module.css";

export type HomeNewsUpdatesType = {
  className?: string;
};

const HomeNewsUpdates: NextPage<HomeNewsUpdatesType> = ({ className = "" }) => {
  return (
    <section className={[styles.homeNewsUpdates, className].join(" ")}>
      <h1 className={styles.newsUpdates}>{`News & Updates`}</h1>
      <div className={styles.carousel}>
        <img className={styles.icons} alt="" src="/icons-3.svg" />
        <div className={styles.newsUpdateContainer}>
          <Cards
            pictures1="pending_I49:13700;717:19838"
            lineSeparator="pending_I49:13700;717:27687;717:25512"
          />
          <Cards
            pictures1="pending_I49:13701;717:19838"
            lineSeparator="pending_I49:13701;717:27687;717:25512"
          />
          <Cards
            pictures1="pending_I49:13702;717:19838"
            lineSeparator="pending_I49:13702;717:27687;717:25512"
          />
        </div>
        <img className={styles.icons1} alt="" src="/icons-4.svg" />
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
