import type { NextPage } from "next";
import styles from "./HomeHero.module.css";
import { HERO_TITLE } from "../../constants";

export type HomeHeroType = {
  className?: string;
  title: string;
};

const HomeHero: NextPage<HomeHeroType> = ({ className = "", title }) => {
  return (
    <section className={[styles.homeHero, className].join(" ")}>
      <div className={styles.titleSection}>
        <h1 className={styles.tgsrtcServing}>{title}</h1>
      </div>
    </section>
  );
};

export default HomeHero;
