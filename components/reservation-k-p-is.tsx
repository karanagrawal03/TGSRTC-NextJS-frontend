import type { NextPage } from "next";
import styles from "./reservation-k-p-is.module.css";

export type ReservationKPIsType = {
  className?: string;
};

const ReservationKPIs: NextPage<ReservationKPIsType> = ({ className = "" }) => {
  return (
    <section className={[styles.reservationKpis, className].join(" ")}>
      <img className={styles.busDustMobile} alt="" src="/busDust1Mobile.svg" />
     <div className={styles.container}>
     <div className={styles.kParent}>
        <div className={styles.k}>
          <span>10</span>
          <span className={styles.k1}>K</span>
        </div>
        <div className={styles.onAvgDaily}>Buses Running</div>
      </div>
      <div>
        <div className={styles.lineSeparatorWrapper}></div>
      </div>
      {/* <div className={styles.m}>M</div> */}
      <div className={styles.kParent}>
        <div className={styles.k}>
          <span>3.8</span>
          <span className={styles.k1}>M</span>
        </div>
        <div className={styles.onAvgDaily}>On Avg. Daily Bus Bookings</div>
      </div>
      <div>
        <div className={styles.lineSeparatorWrapper}></div>
      </div>
      <div className={styles.kParent}>
        {/* <div className={styles.lWrapper}> */}
        <div className={styles.k}>
          <span>40</span>
          <span className={styles.k1}>L</span>
          {/* </div> */}
        </div>
        <div className={styles.onAvgDaily}>Transporting Passengers</div>
      </div>
     </div>
    </section>
  );
};

export default ReservationKPIs;
