import type { NextPage } from "next";
import styles from "./HomeGamyamApp.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";

export type HomeGamyamAppType = {
  data?: {
    gamayamTitle?: string;
    gamayamParagraph?: string;
    gamayamLogoUrl?: string;
    webIconUrl?: string;
    shadowImageUrl?: string;
  };
  className?: string;
};

const HomeGamyamApp: NextPage<HomeGamyamAppType> = ({ data, className = "" }) => {
  return (
    <section className={[styles.homeGamyamApp, className].join(" ")}>
      <div className={styles.gamayamContent}>
        <div className={styles.logoAndTextSection}>
          <img
            className={styles.gamayamLogoIcon}
            loading="lazy"
            alt="gamayam logo"
            src={`${UPLOADS_BASE_URL}${data?.gamayamLogoUrl}`}
          />
          <div className={styles.texts}>
            <h1 className={styles.gamyamApp}>{data?.gamayamTitle }</h1>
            <p className={styles.experienceSeamlessTravel}>
              {data?.gamayamParagraph }
            </p>
          </div>
        </div>
        <img
          className={styles.icon}
          loading="lazy"
          alt="mobile images"
          src={`${UPLOADS_BASE_URL}${data?.webIconUrl}` }
        />
        <img
          className={styles.shadowlayer}
          loading="lazy"
          alt="shadow image"
          src={`${UPLOADS_BASE_URL}${data?.shadowImageUrl}` }
        />
      </div>
    </section>
  );
};

export default HomeGamyamApp;
