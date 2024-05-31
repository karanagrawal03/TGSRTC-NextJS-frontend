import type { NextPage } from "next";
import styles from "./HomeGamyamApp.module.css";

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
            alt=""
            src="/gamayam-logo@2x.png"
          />
          <div className={styles.texts}>
            <h1 className={styles.gamyamApp}>{"Gamyam App"}</h1>
            <p className={styles.experienceSeamlessTravel}>
              Experience seamless travel with TGSRTC's innovative "TGSRTC
              Gamyam" mobile app, offering real-time tracking for all buses.
              With this convenient feature, passengers can effortlessly monitor
              the status of all bus services, ensuring a smooth and stress-free
              journey
            </p>
          </div>
        </div>
        <img
          className={styles.icon}
          loading="lazy"
          alt=""
          src="/mobiles-icon.svg"
        />
        <img
          className={styles.shadowlayer}
          loading="lazy"
          alt=""
          src="/shadow-avatar.svg"
        />
      </div>
    </section>
  );
};

export default HomeGamyamApp;
