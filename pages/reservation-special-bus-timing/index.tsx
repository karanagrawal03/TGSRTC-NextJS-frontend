import { useEffect } from "react";
import ReservationBusesTabs from "../../components/reservation-spl-buses-tabs";
import {
  APPLY_AND_RENEW,
  SPECIAL_BUSES,
  WHICH_BUS_TIMINGS,
} from "../../constants";
import useFetch, { BASE_URL, UPLOADS_BASE_URL } from "../../services/service";
import styles from "./index.module.css";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

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
      <AnimationBus />
      <AnimationBusMobile />
      <div className={styles.container}>
        <div className={styles.timingsContainer}>
        <p className={styles.headingText}>{data?.tabsHeading}</p>
        <ReservationBusesTabs data={data} />
      </div>
      </div>
    </div>
  );
};

export default ReservationSpecialBusTiming;
