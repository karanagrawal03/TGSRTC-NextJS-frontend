import type { NextPage } from "next";
import styles from "./index.module.css";
import { TOURISM, TOURISM_OFFER_LINE } from "../../constants";

const ReservationHeroTourism = () => {
  return (
    <section className={styles.reservationHeroTourism}>
      <img 
        className={styles.bgIcon} 
        loading="lazy"
        alt="Reservation-Hero-Tourism" 
        src="/tourism-banner-image-web.png" />
      <img 
        className={styles.bgIconMobile} 
        loading="lazy"
        alt="Reservation-Hero-Tourism" 
        src="/tourism-banner-image-mobile.png" />
      <div className={styles.tourismContentWrapper}>
        <h1 className={styles.tourism} >
          {TOURISM}
        </h1>
        <p className={styles.tgsrtcIsHappy}>
          {TOURISM_OFFER_LINE}
        </p>
      </div>
    </section>
  );
};

export default ReservationHeroTourism;
