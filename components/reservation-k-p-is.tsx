import type { NextPage } from "next";
import styles from "./reservation-k-p-is.module.css";
import { KPI_NUMBER1, KPI_NUMBER1_METRICS, KPI_NUMBER1_LABEL, KPI_NUMBER2, KPI_NUMBER2_LABEL, KPI_NUMBER2_METRICS, KPI_NUMBER3, KPI_NUMBER3_LABEL, KPI_NUMBER3_METRICS } from "../constants";

export type ReservationKPIsType = {
  className?: string;
};

const ReservationKPIs: NextPage<ReservationKPIsType> = ({ className = "" }) => {
  return (
    <section className={[styles.reservationKpis, className].join(" ")}>
      <img className={styles.busDustMobile} alt="bus mobile image" src="/busDust1Mobile.svg" loading="lazy"/>
     <div className={styles.container}>
     <div className={styles.kParent}>
        <div className={styles.k}>
          <span>{KPI_NUMBER1}</span>
          <span className={styles.k1}>{KPI_NUMBER1_METRICS}</span>
        </div>
        <div className={styles.onAvgDaily}>{KPI_NUMBER1_LABEL}</div>
      </div>
      <div>
        <div className={styles.lineSeparatorWrapper}></div>
      </div>
      <div className={styles.kParent}>
        <div className={styles.k}>
          <span>{KPI_NUMBER2}</span>
          <span className={styles.k1}>{KPI_NUMBER2_METRICS}</span>
        </div>
        <div className={styles.onAvgDaily}>{KPI_NUMBER2_LABEL}</div>
      </div>
      <div>
        <div className={styles.lineSeparatorWrapper}></div>
      </div>
      <div className={styles.kParent}>
        <div className={styles.k}>
          <span>{KPI_NUMBER3}</span>
          <span className={styles.k1}>{KPI_NUMBER3_METRICS}</span>
        </div>
        <div className={styles.onAvgDaily}>{KPI_NUMBER3_LABEL}</div>
      </div>
     </div>
    </section>
  );
};

export default ReservationKPIs;
