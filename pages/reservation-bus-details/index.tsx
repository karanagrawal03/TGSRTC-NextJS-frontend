import type { NextPage } from "next";
import MainHeader from "../../components/reservation-details-banner";
import SeatLayoutOfTGSRTCContaine from "../../components/reservation-details-seat-layout";
import TypesOfCoaches from "../../components/reservation-details-types-of-coaches";
import FrameComponent4 from "../../components/reservation-details-city-services";
import OtherCityServicesSection from "../../components/reservation-details-other-bus-pass";
import styles from "./index.module.css";
import Header from "../../components/header";
import { garudaPlusBulletPoints, rajadhaniBulletPoints, superLuxuryBulletPoints } from "../../constants/reservation-bus-details";
import { GARUDA_PLUS_HEADING, GARUDA_PLUS_PARA, RAJDHANI_HEADING, RAJDHANI_PARA, SUPER_LUXURY_HEADING, SUPER_LUXURY_PARA, TYPES_OF_COACHES } from "../../constants";
import Footer from "../../components/footer";

const ReservationBusDetails: NextPageReservationBusDetailsType = () => {
  return (<>
      <Header/>
      <MainHeader />
    <div className={styles.reservationBusDetails}>
      <main className={styles.contentContainer}>
        <section className={styles.seatLayoutOfTgsrtcContaineParent}>
          <SeatLayoutOfTGSRTCContaine />
          <div className={styles.coachTypesHeading}>
        <h1 className={styles.typesOfCoaches}>{TYPES_OF_COACHES}</h1>
      </div>
        <TypesOfCoaches
        subheading={GARUDA_PLUS_HEADING}
        para={GARUDA_PLUS_PARA}
        bulletPoints={garudaPlusBulletPoints}
        imageSrc="/garuda-bus.png"
    />
       <TypesOfCoaches
        subheading={RAJDHANI_HEADING}
        para={RAJDHANI_PARA}
        bulletPoints={rajadhaniBulletPoints}
        imageSrc="/rajdhani-bus.png"
    />
      <TypesOfCoaches
        subheading={SUPER_LUXURY_HEADING}
        para={SUPER_LUXURY_PARA}
        bulletPoints={superLuxuryBulletPoints}
        imageSrc="/super-luxury-bus.png"
    />
          <FrameComponent4 />
          <OtherCityServicesSection />
        </section>
      </main>
     <Footer/>
    </div>
    </>
  );
};

export default ReservationBusDetails;
