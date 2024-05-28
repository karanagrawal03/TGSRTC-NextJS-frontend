import type { NextPage } from "next";
import styles from "./index.module.css";
import { DELIVERS_EXCELLENCE, TGSRTC_LOGISTICS } from "../../constants";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: NextPage<FrameComponent7Type> = ({ className = "" }) => {
  return (
    <section className={[styles.logisticsHeroWrapper, className].join(" ")}>
      {/* <div className={styles.logisticsHero}> */}
        {/* <div className={styles.heroContent}> */}
          <img 
            className={styles.bgIcon} 
            loading="lazy"
            alt="logo" 
            src="/logistics-home-banner-background-web.png" />
            <img 
            className={styles.bgIconMobile} 
            loading="lazy"
            alt="logo" 
            src="/logistics-home-banner-background-mobile.png" />
        {/* </div> */}
        <div className={styles.heroSubtitleContainer}>
          <img
              className={styles.logoIcon}
              loading="lazy"
              alt="TGSRTC Logistics"
              src="/logistics-tgsrtc-logo.png"
            />
          <h1 className={styles.tgsrtcLogistics}>{TGSRTC_LOGISTICS}</h1>
          <h2 className={styles.deliversExcellenceEvery}>
            {DELIVERS_EXCELLENCE}
          </h2>
        </div>
      {/* </div> */}
    </section>
  );
};

export default FrameComponent7;
