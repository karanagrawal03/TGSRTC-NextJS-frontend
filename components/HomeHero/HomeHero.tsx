import type { NextPage } from "next";
import styles from "./HomeHero.module.css";

export type HomeHeroType = {
  className?: string;
};

const HomeHero: NextPage<HomeHeroType> = ({ className = "" }) => {
  return (
    <section className={[styles.homeHero, className].join(" ")}>
      <h1 className={styles.tgsrtcServing}>
        {"TGSRTC serving people since 1932"}
      </h1>
    </section>
  );
};

export default HomeHero;
