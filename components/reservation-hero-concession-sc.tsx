import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./reservation-hero-concession-sc.module.css";

export type ReservationHeroConcessionScType = {
  className?: string;
  maskGroup?: string;
  concessionSchemes?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMarginLeft?: CSSProperties["marginLeft"];
};

const ReservationHeroConcessionSc: NextPage<
  ReservationHeroConcessionScType
> = ({
  className = "",
  maskGroup,
  concessionSchemes,
  propPadding,
  propMarginLeft,
}) => {
  const reservationHeroConcessionScStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <section
      className={[styles.reservationHeroConcessionSc, className].join(" ")}
      style={reservationHeroConcessionScStyle}
    >
      <img className={styles.maskGroupIcon} alt="" src={maskGroup} />
      <h1 className={styles.concessionSchemes}>{concessionSchemes}</h1>
      <div
        className={styles.applyRenewTravelEffortleWrapper}
        style={frameDivStyle}
      >
        <h2
          className={styles.applyRenew}
        >{`Apply, Renew & Travel effortlessly with TGSRTC`}</h2>
      </div>
    </section>
  );
};

export default ReservationHeroConcessionSc;
