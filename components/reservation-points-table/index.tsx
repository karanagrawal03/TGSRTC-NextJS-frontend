import styles from "./index.module.css";
import Tables from "../tables";

interface ReservationPointsTableRow {
  number: string;
  kms: string;
  city_ordinary_rs: string;
  rate_of_pvg_mst_monthly_rs: string;
  rate_of_exp_mst_monthly_rs: string;
  title: string;
}

interface ReservationDetailsOfReservaData {
  reservationPointsTitle?: string;
  reservationPointsTableData?: ReservationPointsTableRow[];
}

interface ReservationDetailsOfReservaProps {
  data: ReservationDetailsOfReservaData | null;
}
const ReservationDetailsOfReserva = ({ data }:ReservationDetailsOfReservaProps) => {
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
