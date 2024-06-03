import type { NextPage } from "next";
import styles from "./index.module.css";

export type ReservationKPIsType = {
  kpiData?:any;
  className?: string;
};

const ReservationKPIs: NextPage<ReservationKPIsType> = ({ kpiData,className = "" }) => {
  return (
    <section className={[styles.reservationKpis, className].join(" ")}>
      <img
        className={styles.busDustMobile}
        alt="bus mobile image"
        src="/busDust1Mobile.svg"
        loading="lazy"
      />
      <div className={styles.container}>
      {kpiData?.map((kpi : any) => (
        <>
          <div className={styles.kParent}>
            <div className={styles.kpiHeading}>
              <span>{kpi.number}</span>
              <span className={styles.kpiMetric}>{kpi.metrics}</span>
            </div>
            <div className={styles.kpiLabel}>{kpi.label}</div>
          </div>
          <div className={styles.lineSeparator}>
            <div className={styles.lineSeparatorWrapper}></div>
          </div>
        </>
      ))}
      </div>
    </section>
  );
};

export default ReservationKPIs;
