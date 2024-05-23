import type { NextPage } from "next";
import styles from "./home-gamyam-app.module.css";

export type HomeGamyamAppType = {
  className?: string;
};

const HomeGamyamApp: NextPage<HomeGamyamAppType> = ({ className = "" }) => {
  return (
    <section className={[styles.homeGamyamApp, className].join(" ")}>
      <img className={styles.mapIcon} alt="" src="/map@2x.png" />
      <div className={styles.gamayamContent}>
        <div className={styles.logoAndTextSection}>
          <img
            className={styles.gamayamLogoIcon}
            loading="lazy"
            alt=""
            src="/gamayam-logo@2x.png"
          />
          <div className={styles.texts}>
            <h1 className={styles.gamyamApp}>Gamyam App</h1>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
              eiusmodtempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum
            </div>
          </div>
        </div>
        <div className={styles.mobileMockupImage}>
          <div className={styles.wrapperVector234251015}>
            <img
              className={styles.wrapperVector234251015Child}
              alt=""
              src="/vector-234251015.svg"
            />
          </div>
          <img
            className={styles.pic51}
            loading="lazy"
            alt=""
            src="/pic-5-1@2x.png"
          />
          <img
            className={styles.pic71}
            loading="lazy"
            alt=""
            src="/pic-7-1@2x.png"
          />
          <img
            className={styles.aVisualGuideCould}
            loading="lazy"
            alt=""
            src="/3891016-81688-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeGamyamApp;
