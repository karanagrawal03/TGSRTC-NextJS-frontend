import { useEffect } from "react";
import ReservationHeroConcessionSc from "../../components/reservation-points-banner";
import ReservationDetailsOfReserva from "../../components/reservation-points-table";
import styles from "./index.module.css";
import useFetch from "../../services/service";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

const ReservationPoints = () => {
  const {data, doFetch}=useFetch();
  useEffect(()=>{
    doFetch("/reservation-points?populate=*");
  },[])
  return (
    <div className={styles.reservationPoints}>
      <ReservationHeroConcessionSc data={data}/>
      <AnimationBus/>
      <AnimationBusMobile/>
      <section className={styles.reservationDetailsOfReservaParent}>
        <ReservationDetailsOfReserva data={data}/>
      </section>
    </div>
  );
};

export default ReservationPoints;
