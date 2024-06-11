import type { NextPage } from "next";
import styles from "./HomeGamyamApp.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";
import { useEffect, useState } from "react";

export type HomeGamyamAppType = {
  data?: {
    gamayamTitle?: string;
    gamayamParagraph?: string;
    gamayamLogoUrl?: string;
    webIconUrl?: string;
    shadowImageUrl?: string;
    mobileIconUrl?:string;
  };
  className?: string;
};

const HomeGamyamApp: NextPage<HomeGamyamAppType> = ({ data, className = "" }) => {
  const [width, setWidth] = useState<boolean>(false);
useEffect(() => {
  const handleResize = () => {
    setWidth(window.innerWidth > 750);
  };

  handleResize();
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

  return (
    <section className={[styles.homeGamyamApp, className].join(" ")}>
      <div className={styles.gamayamContent}>
        <div className={styles.logoAndTextSection}>
          {width ? (
          <img
            className={styles.gamayamLogoIcon}
            loading="lazy"
            alt="gamayam logo"
            src={`${UPLOADS_BASE_URL}${data?.gamayamLogoUrl}`}
          />
          ) :(
            <img
            className={styles.gamayamLogoIcon}
            loading="lazy"
            alt="gamayam logo"
            src={`${UPLOADS_BASE_URL}${data?.mobileIconUrl}`}
          />
          )}
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
