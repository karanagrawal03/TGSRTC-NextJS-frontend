import type { NextPage } from "next";
import styles from "./index.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";

export type ReservationHeroTourismType = {
  data: any;
  className?: string;
};

const ReservationHeroTourism: NextPage<ReservationHeroTourismType> = ({ data, className = "" }) => {
  return (
    <section className={[styles.reservationHeroTourism,className].join(" ")}>
      <img 
        className={styles.bgIcon} 
        loading="lazy"
        alt="contract-rates-banner" 
        src={UPLOADS_BASE_URL + data?.bannerWebImage?.data?.attributes?.url} />
      <img 
        className={styles.bgIconMobile} 
        loading="lazy"
        alt="contract-rates-banner" 
        src={UPLOADS_BASE_URL + data?.bannerMobileImage?.data?.attributes?.url}  />
      <div className={styles.contentWrapper}>
        <h1 className={styles.tourism}>{data?.heroTitle}</h1>
        <p className={styles.tgsrtcIsHappy}>{data?.heroSubTitle}</p>
      </div>
    </section>
  );
};

export default ReservationHeroTourism;