import type { NextPage } from "next";
import Header from "../components/header";
import ReservationMuchintala from "../components/reservation-muchintala";
import FooterSection from "../components/footer-section";
import RecognitionAndSocialMediaC from "../components/recognition-and-social-media-c";
import styles from "./reservation-special-bus-timing.module.css";

const ReservationSpecialBusTiming: NextPageReservationSpecialBusTimingType =
  () => {
    return (
      <div className={styles.reservationSpecialBusTiming}>
        <img className={styles.busDust} alt="" src="/bus--dust@2x.png" />
        <Header />
        <img
          className={styles.reservationHeroSpeacialBus}
          alt=""
          src="/reservation-hero-speacial-bus-timings@2x.png"
        />
        <ReservationMuchintala />
        <footer className={styles.footer}>
          <FooterSection />
          <div className={styles.lineSeparater}>
            <img
              className={styles.lineSeparatorIcon}
              alt=""
              src="/line-separator-2.svg"
            />
          </div>
          <RecognitionAndSocialMediaC />
          <div className={styles.copyright2021TgsrtcAllRWrapper}>
            <div className={styles.copyright2021Tgsrtc}>
              Copyright © 2021 TGSRTC, All Rights Reserved.
            </div>
          </div>
        </footer>
      </div>
    );
  };

export default ReservationSpecialBusTiming;
