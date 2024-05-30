import type { NextPage } from "next";
import Header from "../../components/header";
import ReservationMuchintala from "../../components/reservation-muchintala";
import FooterSection from "../../components/footer-section";
import RecognitionAndSocialMediaC from "../../components/recognition-and-social-media-c";
import styles from "./index.module.css";
import ReservationBusesTabs from "../../components/reservation-spl-buses-tabs";
import { WHICH_BUS_TIMINGS } from "../../constants";

const ReservationSpecialBusTiming =
  () => {
    return (
      <div className={styles.reservationSpecialBusTiming}>
        <Header />
        <img
          className={styles.reservationHeroSpeacialBus}
          alt="reservation-hero-spl"
          src="/reservation-hero-speacial-bus-timings@2x.png"
        />
        {/* <ReservationMuchintala /> */}
        <div className={styles.container}>
          <p className={styles.headingText}>{WHICH_BUS_TIMINGS}</p>
          <ReservationBusesTabs />
        </div>
      </div>
    );
  };

export default ReservationSpecialBusTiming;
