import styles from "./index.module.css";
import Tables from "../tables";

export type ReservationDetailsOfReservaType = {
  className?: string;
};

const ReservationDetailsOfReserva = ({ data }:any) => {
  return (
    <div className={styles.reservationDetailsOfReserva}>
      <div className={styles.tableTitle}>
        <h2 className={styles.title}>{data?.reservationPointsTitle}</h2>
        {data?.reservationPointsTableData != null && data?.reservationPointsTableData != undefined ? <Tables rows={data?.reservationPointsTableData} containerClassName={styles.tableRow}/>:<></>}
      </div>
    </div>
  );
};

export default ReservationDetailsOfReserva;
