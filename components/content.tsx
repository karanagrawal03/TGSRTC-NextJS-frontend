import type { NextPage } from "next";
import styles from "./content.module.css";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.logisticsHero}>
        <div className={styles.logisticsHeroContent}>
          <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
          <img
            className={styles.logoIcon}
            loading="lazy"
            alt=""
            src="/logo@2x.png"
          />
        </div>
        <h1 className={styles.tsrtcLogistics}>TSRTC Logistics</h1>
        <div className={styles.heroDescription}>
          <h2 className={styles.deliversExcellenceEvery}>
            Delivers excellence every mile !
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Content;
