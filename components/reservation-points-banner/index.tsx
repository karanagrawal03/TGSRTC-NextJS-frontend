import type { NextPage } from "next";
import styles from "./index.module.css";
import { APPLY_AND_RENEW, RESERVATION_POINTS } from "../../constants";


const ReservationHeroConcessionSc= () => {

  return (
    <section className={styles.reservationHeroConcessionSc}>
      <img className={styles.maskGroupIcon} alt="image" src="/reservation-banner-web.png" loading="lazy"/>
      <img className={styles.maskGroupIconMobile} alt="image" src="/reservation-banner-mobile.png" loading="lazy"/>
      <div className={styles.applyRenewTravelEffortleWrapper}>
        <h1 className={styles.concessionSchemes}>{RESERVATION_POINTS}</h1>
        <h2 className={styles.applyRenew}>{APPLY_AND_RENEW}</h2>
      </div>
    </section>
  );
};

export default ReservationHeroConcessionSc;
