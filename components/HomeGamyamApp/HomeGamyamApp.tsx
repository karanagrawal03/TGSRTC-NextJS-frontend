import type { NextPage } from "next";
import styles from "./HomeGamyamApp.module.css";
import { GAMAYAM_APP, GAMAYAM_APP_PARAGRAPH } from "../../constants";

export type HomeGamyamAppType = {
  className?: string;
};

const HomeGamyamApp: NextPage<HomeGamyamAppType> = ({ className = "" }) => {
  return (
    <section className={[styles.homeGamyamApp, className].join(" ")}>
      <div className={styles.gamayamContent}>
        <div className={styles.logoAndTextSection}>
          <img
            className={styles.gamayamLogoIcon}
            loading="lazy"
            alt="gamayam logo"
            src="/gamayam-logo@2x.png"
          />
          <div className={styles.texts}>
            <h1 className={styles.gamyamApp}>{GAMAYAM_APP}</h1>
            <p className={styles.experienceSeamlessTravel}>
            {GAMAYAM_APP_PARAGRAPH}
            </p>
          </div>
        </div>
        <img
          className={styles.icon}
          loading="lazy"
          alt="mobile images"
          src="/mobiles-icon.svg"
        />
        <img
          className={styles.shadowlayer}
          loading="lazy"
          alt="shadow image"
          src="/shadow-avatar.svg"
        />
      </div>
    </section>
  );
};

export default HomeGamyamApp;
