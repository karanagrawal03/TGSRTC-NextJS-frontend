import styles from "./index.module.css";
import { UPLOADS_BASE_URL } from "../../services/service";

const ReservationHeroConcessionSc= ({data}:any) => {
  return (
    <section className={styles.reservationHeroConcessionSc}>
      <img className={styles.maskGroupIcon} alt="background image" src={UPLOADS_BASE_URL+data?.heroBackgroundImageWeb?.data?.attributes?.url} loading="lazy"/>
      <img className={styles.maskGroupIconMobile} alt="background image" src={UPLOADS_BASE_URL+data?.heroBackgroundImageMobile?.data?.attributes?.url} loading="lazy"/>
      <div className={styles.applyRenewTravelEffortleWrapper}>
        <h1 className={styles.concessionSchemes}>{data?.heroTitle}</h1>
        <h2 className={styles.applyRenew}>{data?.heroSubtitle}</h2>
      </div>
    </section>
  );
};

export default ReservationHeroConcessionSc;
