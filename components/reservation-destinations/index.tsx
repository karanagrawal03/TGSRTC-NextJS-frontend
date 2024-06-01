import type { NextPage } from "next";
import TourismCard from "../tourism-card";
import styles from "./index.module.css";

export interface TourismPlace {
  placeName: string;
  image: string;
  pickupTime: string;
  pickupPoint: string;
  places: string[];
  packageDescription: string;
  button: string;
}

export type ReservationDestinationsType = {
  data: any;
  className?: string;
};

const ReservationDestinations:NextPage<ReservationDestinationsType> = ({ data, className = "" }) => {
  return (
    <section className={[styles.reservationDestinations, className].join(" ")}>
      <div className={styles.destinationsWrapper}>
        <h1 className={styles.destinations}>{data?.destinationsTitle}</h1>
      </div>
      <div className={styles.tourismCards}>
         {data?.tourismCards.map((tour : TourismPlace) => (
            <TourismCard  
              placeName={tour.placeName} 
              image={tour.image} 
              pickupTime={tour.pickupTime} 
              pickupPoint={tour.pickupPoint} 
              places={tour.places} 
              packageDescription={tour.packageDescription} 
              button={tour.button} 
            />
          ))}
      </div>
    </section>
  );
};

export default ReservationDestinations;