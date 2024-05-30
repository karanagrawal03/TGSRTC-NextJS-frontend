import type { NextPage } from "next";
import Header from "../../components/header";
import ReservationMuchintala from "../../components/reservation-muchintala";
import FooterSection from "../../components/footer-section";
import RecognitionAndSocialMediaC from "../../components/recognition-and-social-media-c";
import styles from "./index.module.css";
import ReservationBusesTabs from "../../components/reservation-spl-buses-tabs";
import {
  APPLY_AND_RENEW,
  BUS_CONTRACT_RATES,
  SPECIAL_BUSES,
  WHICH_BUS_TIMINGS,
} from "../../constants";

const ReservationSpecialBusTiming = () => {
  return (
    <div className={styles.reservationSpecialBusTiming}>
      <Header />
      <section className={styles.reservationHeroTourism}>
        <img
          className={styles.bgIcon}
          loading="lazy"
          alt="contract-rates-banner"
          src="/reservation-web.png"
        />
        <img
          className={styles.bgIconMobile}
          loading="lazy"
          alt="contract-rates-banner"
          src="/reservation-mobile.png"
        />
        <div className={styles.contentWrapper}>
          <h1 className={styles.tourism}>{SPECIAL_BUSES}</h1>
          <p className={styles.tgsrtcIsHappy}>{APPLY_AND_RENEW}</p>
        </div>
      </section>
      <div className={styles.container}>
        <p className={styles.headingText}>{WHICH_BUS_TIMINGS}</p>
        <ReservationBusesTabs />
      </div>
    </div>
  );
};

export default ReservationSpecialBusTiming;
