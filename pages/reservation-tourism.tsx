import type { NextPage } from "next";
import styles from "./reservation-tourism.module.css";
import ReservationHeroTourism from "../components/reservation-tourism";
import ReservationDestinations from "../components/reservation-destinations";
import Header from "../components/header";
import Footer from "../components/footer";
import { TRAVEL_ACROSS_TG,TOURISM_QUOTE1, TOURISM_QUOTE2 } from "../constants";

const ReservationTourism: NextPageReservationTourismType = () => {
  return (
    <div className={styles.reservationTourism}>
      <Header />
      <ReservationHeroTourism  />
      <section className={styles.content}>
        <img
          className={styles.busDust}
          loading="lazy"
          alt="bus"
          src="/bus--dust1@2x.png"
        />
        <div className={styles.reservationQuote}>
          <h1 className={styles.lifeIsShort}>
            {TOURISM_QUOTE1}
          </h1>
          <h1 className={styles.travelIsThe}>
            {TOURISM_QUOTE2}
          </h1>
          <h2 className={styles.travelAcrossTelangana}>
            {TRAVEL_ACROSS_TG}
          </h2>
        </div>
      </section>
      <ReservationDestinations />
      <Footer />
    </div>
  );
};

export default ReservationTourism;
