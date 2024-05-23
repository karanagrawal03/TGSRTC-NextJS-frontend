import type { NextPage } from "next";
import Header2 from "../components/header2";
import ReservationMuchintala from "../components/reservation-muchintala";
import Footer from "../components/footer";
import styles from "./reservation-special-bus-timing.module.css";

const ReservationSpecialBusTiming: NextPageReservationSpecialBusTimingType =
  () => {
    return (
      <div className={styles.reservationSpecialBusTiming}>
        <Header2
          tSRTCLogo="/tsrtc-logo2@2x.png"
          prop="/---8.svg"
          tELANGANASTATEROADTRANSPO="/telangana-state-road-transport-corporation7.svg"
          tSRTCLogoIconPadding="unset"
          iconPadding="unset"
          reservationsPadding="unset"
          reservationsPadding1="0px 0px var(--padding-11xs)"
          reservationsPadding2="unset"
          reservationsPadding3="unset"
          reservationsPadding4="unset"
          reservationsPadding5="unset"
          reservationsPadding6="unset"
          reservationsPadding7="unset"
        />
        <img
          className={styles.reservationHeroSpeacialBus}
          alt=""
          src="/reservation-hero-speacial-bus-timings@2x.png"
        />
        <ReservationMuchintala />
        <Footer />
      </div>
    );
  };

export default ReservationSpecialBusTiming;
