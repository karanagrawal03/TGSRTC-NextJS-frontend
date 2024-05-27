import type { NextPage } from "next";
import styles from "./reservation-k-p-is.module.css";

export type ReservationKPIsType = {
  className?: string;
};

const ReservationKPIs: NextPage<ReservationKPIsType> = ({ className = "" }) => {
  return (
    <section className={[styles.reservationKpis, className].join(" ")}>
      <div className={styles.kParent}>
        <div className={styles.k}>
          <span>10</span>
          <span className={styles.k1}>K</span>
        </div>
        <div className={styles.busesRunningWrapper}>
          <div className={styles.busesRunning}>Buses Running</div>
        </div>
      </div>
      <div className={styles.lineSeparatorWrapper}>
        <img
          className={styles.lineSeparatorIcon}
          alt=""
          src="/line-separator.svg"
        />
      </div>
      <div className={styles.m}>M</div>
      <div className={styles.frameParent}>
        <div className={styles.mWrapper}>
          <div className={styles.m1}>
            <span>3.8</span>
            <span className={styles.m2}>M</span>
          </div>
        </div>
        <div className={styles.onAvgDaily}>On Avg. Daily Bus Bookings</div>
      </div>
      <div className={styles.lineSeparatorContainer}>
        <img
          className={styles.lineSeparatorIcon1}
          alt=""
          src="/line-separator.svg"
        />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.lWrapper}>
          <div className={styles.l}>
            <span>40</span>
            <span className={styles.l1}>L</span>
          </div>
        </div>
        <div className={styles.transportingPassengers}>
          Transporting Passengers
        </div>
      </div>
    </section>
  );
};

export default ReservationKPIs;
