import type { NextPage } from "next";
import Header from "../../components/header";
import ReservationHeroConcessionSc from "../../components/reservation-points-banner";
import ReservationDetailsOfReserva from "../../components/reservation-points-table";
import Footer from "../../components/footer";
import styles from "./index.module.css";

const ReservationPoints = () => {
  return (
    <div className={styles.reservationPoints}>
      <ReservationHeroConcessionSc />
      <section className={styles.reservationDetailsOfReservaParent}>
        <ReservationDetailsOfReserva />
      </section>
    </div>
  );
};

export default ReservationPoints;
