import type { NextPage } from "next";
import TourismCard from "./tourism-card";
import styles from "./reservation-destinations.module.css";

export type ReservationDestinationsType = {
  className?: string;
};

const ReservationDestinations: NextPage<ReservationDestinationsType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.reservationDestinations, className].join(" ")}>
      <div className={styles.destinationsWrapper}>
        <h1 className={styles.destinations}>Destinations</h1>
      </div>
      <div className={styles.tourismCards}>
        <TourismCard
          hyderabadDarshan="Hyderabad Darshan"
          pictures="/pictures1@2x.png"
        />
        <TourismCard
          hyderabadDarshan="TTD SED Darshan Package"
          pictures="/pictures-1@2x.png"
          propLeft="600px"
          propTop="0px"
        />
        <TourismCard
          hyderabadDarshan="Singareni Darshan"
          pictures="/pictures-2@2x.png"
          propLeft="0px"
          propTop="818px"
        />
        <TourismCard
          hyderabadDarshan="Karthika Maasam Darshini"
          pictures="/pictures-3@2x.png"
          propLeft="600px"
          propTop="818px"
        />
      </div>
    </section>
  );
};

export default ReservationDestinations;
