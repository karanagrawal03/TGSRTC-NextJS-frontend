import { useEffect } from "react";
import ReservationBusesTabs from "../../components/reservation-spl-buses-tabs";
import {
  APPLY_AND_RENEW,
  SPECIAL_BUSES,
  WHICH_BUS_TIMINGS,
} from "../../constants";
import useFetch, { BASE_URL, UPLOADS_BASE_URL } from "../../services/service";
import styles from "./index.module.css";

const ReservationSpecialBusTiming = () => {
  const { data, doFetch } = useFetch();
  useEffect(() => {
    doFetch(`/reservation-special-bus-timings?populate=*`);
  }, []);
  return (
    <div className={styles.reservationSpecialBusTiming}>
      <section className={styles.reservationHeroTourism}>
        <img
          className={styles.bgIcon}
          loading="lazy"
          alt="contract-rates-banner"
          src={UPLOADS_BASE_URL + data?.heroSectionBanner[0].heroSectionWebImage}
        />
        <img
          className={styles.bgIconMobile}
          loading="lazy"
          alt="contract-rates-banner"
          src={UPLOADS_BASE_URL + data?.heroSectionBanner[0].heroSectionMobileImage}
        />
        <div className={styles.contentWrapper}>
          <h1 className={styles.tourism}>{data?.heroSectionBanner[0].heroSectionHeading}</h1>
          <p className={styles.tgsrtcIsHappy}>{data?.heroSectionBanner[0].heroSectionSubHeading}</p>
        </div>
      </section>
      <div className={styles.container}>
        <p className={styles.headingText}>{data?.tabsHeading}</p>
        <ReservationBusesTabs data={data} />
      </div>
    </div>
  );
};

export default ReservationSpecialBusTiming;
