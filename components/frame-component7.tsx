import type { NextPage } from "next";
import styles from "./frame-component7.module.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: NextPage<FrameComponent7Type> = ({ className = "" }) => {
  return (
    <section className={[styles.logisticsHeroWrapper, className].join(" ")}>
      <div className={styles.logisticsHero}>
        <div className={styles.heroContent}>
          <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
          <img
            className={styles.logoIcon}
            loading="lazy"
            alt=""
            src="/logo@2x.png"
          />
        </div>
        <h1 className={styles.tgsrtcLogistics}>TGSRTC Logistics</h1>
        <div className={styles.heroSubtitleContainer}>
          <h2 className={styles.deliversExcellenceEvery}>
            Delivers excellence every mile !
          </h2>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
