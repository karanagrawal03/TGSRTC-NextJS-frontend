import type { NextPage } from "next";
import TourismCard from "../tourism-card";
import styles from "./index.module.css";
import { TOURISM_PLACE_IMAGE as tourism ,TourismPlace} from "../../constants/tourism";
import { DESTINATION } from "../../constants";

const ReservationDestinations = () => {
  return (
    <section className={styles.reservationDestinations}>
      <div className={styles.destinationsWrapper}>
        <h1 className={styles.destinations}>{DESTINATION}</h1>
      </div>
      <div className={styles.tourismCards}>
         {tourism.map((tour : TourismPlace) => (
                <TourismCard  placeName={tour.placeName} image={tour.image} places={tour.places}/>
            ))}
      </div>
    </section>
  );
};

export default ReservationDestinations;