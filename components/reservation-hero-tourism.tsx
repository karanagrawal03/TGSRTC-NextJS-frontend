import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./reservation-hero-tourism.module.css";

export type ReservationHeroTourismType = {
  className?: string;
  bG?: string;
  tourism?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propBottom?: CSSProperties["bottom"];
  propDisplay?: CSSProperties["display"];
};

const ReservationHeroTourism: NextPage<ReservationHeroTourismType> = ({
  className = "",
  bG,
  tourism,
  propHeight,
  propBottom,
  propDisplay,
}) => {
  const bGIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      bottom: propBottom,
    };
  }, [propHeight, propBottom]);

  const tourismStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <section className={[styles.reservationHeroTourism, className].join(" ")}>
      <img className={styles.bgIcon} alt="" src={bG} style={bGIconStyle} />
      <h1 className={styles.tourism} style={tourismStyle}>
        {tourism}
      </h1>
      <p className={styles.tgsrtcIsHappy}>
        TGSRTC is happy to announce the following package tours to our valuable
        commuters at affordable rates.
      </p>
    </section>
  );
};

export default ReservationHeroTourism;
