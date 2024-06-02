import { useEffect } from "react";
import ReservationHeroConcessionSc from "../../components/reservation-points-banner";
import ReservationDetailsOfReserva from "../../components/reservation-points-table";
import styles from "./index.module.css";
import useFetch from "../../services/service";

const ReservationPoints = () => {
  const {data, doFetch}=useFetch();
  useEffect(()=>{
    doFetch("/reservation-points?populate=*");
  },[])
  return (
    <div className={styles.reservationPoints}>
      <ReservationHeroConcessionSc data={data}/>
      <section className={styles.reservationDetailsOfReservaParent}>
        <ReservationDetailsOfReserva data={data}/>
      </section>
    </div>
  );
};

export default ReservationPoints;
