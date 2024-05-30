import type { NextPage } from "next";
import styles from "./index.module.css";
import { BUS_DETAILS, TRAVEL_EFFORTLESSLY } from "../../constants";

export type MainHeaderType = {
  className?: string;
};

const MainHeader: NextPage<MainHeaderType> = ({ className = "" }) => {
  return (   
    <div className={[styles.mainContainer, className].join(" ")}>
      <img
        className={styles.reservationBusDetailsHero}
        loading="lazy"
        alt="Bus Details"
        src="/reservation-bus-details-banner-web.png"
      />
       <img
        className={styles.reservationBusDetailsHeroMobile}
        loading="lazy"
        alt="Bus Details"
        src="/reservation-details-banner-mobile.png"
      />
      <div className={styles.reservationBusDetailsHeroContent}>
      <h1 className={styles.reservationBusDetailsHeroHeading}>{BUS_DETAILS}</h1>
      <p className={styles.reservationBusDetailsHeroPara}>{TRAVEL_EFFORTLESSLY}</p>
      </div>
    </div>
  );
};

export default MainHeader;
