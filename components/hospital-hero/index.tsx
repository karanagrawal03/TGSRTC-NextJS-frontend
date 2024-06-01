import { NextPage } from "next";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";

export type HospitalHeroType = {
  data: any;
  className?: string;
};

const HospitalHero: NextPage<HospitalHeroType> = ({ data, className = "" }) => {
  return (
    <section className={[styles.hospitalHero, className].join(" ")}>
      <img
        className={styles.maskGroupIcon}
        loading="lazy"
        alt="hospital-banner-image"
        src={UPLOADS_BASE_URL + data?.bannerWebImage?.data?.attributes?.url}
      />
      <img
        className={styles.maskGroupIconMobile}
        loading="lazy"
        alt="hospital-banner-image-mobile"
        src={UPLOADS_BASE_URL + data?.bannerMobileImage?.data?.attributes?.url}
      />
      <div className={styles.content}>
        <h1 className={styles.tgsrtcTarnakaHospital}>{data?.heroTitle}</h1>
        <h2 className={styles.yourGatewayTo}>{data?.heroSubTitle}</h2>
      </div>
    </section>
  );
};

export default HospitalHero;
