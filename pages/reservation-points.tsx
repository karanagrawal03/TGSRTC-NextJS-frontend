import type { NextPage } from "next";
import Header2 from "../components/header2";
import ReservationHeroConcessionSc from "../components/reservation-hero-concession-sc";
import ReservationDetailsOfReserva from "../components/reservation-details-of-reserva";
import Footer from "../components/footer";
import styles from "./reservation-points.module.css";

const ReservationPoints: NextPageReservationPointsType = () => {
  return (
    <div className={styles.reservationPoints}>
      <img className={styles.busDust} alt="" src="/bus--dust@2x.png" />
      <Header2
        prop="/---1.svg"
        tELANGANASTATEROADTRANSPO="/telangana-state-road-transport-corporation1.svg"
      />
      <ReservationHeroConcessionSc
        maskGroup="/mask-group@2x.png"
        concessionSchemes="Reservation Points"
        propPadding="213px var(--padding-81xl) 338px"
        propMarginLeft="-617px"
      />
      <section className={styles.reservationDetailsOfReservaParent}>
        <ReservationDetailsOfReserva />
        <Footer />
        <img className={styles.busDust1} alt="" src="/bus--dust@2x.png" />
      </section>
    </div>
  );
};

export default ReservationPoints;
