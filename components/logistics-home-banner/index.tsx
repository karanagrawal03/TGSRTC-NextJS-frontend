import type { NextPage } from "next";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";

export type FrameComponent7Type = {
  data?: any;
  className?: string;
};

const FrameComponent7: NextPage<FrameComponent7Type> = ({ data,className = "" }) => {
  return (
    <section className={[styles.logisticsHeroWrapper, className].join(" ")}>
          <img 
            className={styles.bgIcon} 
            loading="lazy"
            alt="logo" 
            src={`${UPLOADS_BASE_URL}${data?.heroImageWeb?.data.attributes.url}`} />
            <img 
            className={styles.bgIconMobile} 
            loading="lazy"
            alt="logo" 
            src={`${UPLOADS_BASE_URL}${data?.heroImageMobile?.data.attributes.url}`} />
        <div className={styles.heroSubtitleContainer}>
          <img
              className={styles.logoIcon}
              loading="lazy"
              alt="TGSRTC Logistics"
              src={`${UPLOADS_BASE_URL}${data?.heroSectionLogo?.data.attributes.url}`}
            />
          <h1 className={styles.tgsrtcLogistics}>{data?.heroTitle}</h1>
          <h2 className={styles.deliversExcellenceEvery}>
            {data?.heroSubTitle}
          </h2>
        </div>
    </section>
  );
};

export default FrameComponent7;
