import type { NextPage } from "next";
import styles from "./index.module.css";
import Tables from "../tables";
import { tableData as data} from "../../constants/reservation-points";
import { DETAILS_OF_RESERVATION_POINTS } from "../../constants";

export type ReservationDetailsOfReservaType = {
  className?: string;
};

const ReservationDetailsOfReserva: NextPage<
  ReservationDetailsOfReservaType
> = ({ className = "" }) => {
  return (
    <div className={[styles.reservationDetailsOfReserva, className].join(" ")}>
      <div className={styles.tableTitle}>
        <h2 className={styles.title}>{DETAILS_OF_RESERVATION_POINTS}</h2>
        <Tables rows={data} containerClassName={styles.tableRow}/>
      </div>
    </div>
  );
};

export default ReservationDetailsOfReserva;
