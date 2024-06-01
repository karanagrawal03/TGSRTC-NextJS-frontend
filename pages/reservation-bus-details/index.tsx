import type { NextPage } from "next";
import MainHeader from "../../components/reservation-details-banner";
import SeatLayoutOfTGSRTCContaine from "../../components/reservation-details-seat-layout";
import TypesOfCoaches from "../../components/reservation-details-types-of-coaches";
import FrameComponent4 from "../../components/reservation-details-city-services";
import OtherCityServicesSection from "../../components/reservation-details-other-bus-pass";
import styles from "./index.module.css";
import { garudaPlusBulletPoints, rajadhaniBulletPoints, superLuxuryBulletPoints } from "../../constants/reservation-bus-details";
import { GARUDA_PLUS_HEADING, GARUDA_PLUS_PARA, RAJDHANI_HEADING, RAJDHANI_PARA, SUPER_LUXURY_HEADING, SUPER_LUXURY_PARA, TYPES_OF_COACHES } from "../../constants";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";
import { useEffect } from "react";

const ReservationBusDetails: NextPageReservationBusDetailsType = () => {
  const { data, doFetch } = useFetch();

  useEffect(() => {
    doFetch(`/reservation-bus-details?populate=*`);
  }, []);
  console.log(data,"as data")
  return (<>
      <MainHeader data={data}/>
    <div className={styles.reservationBusDetails}>
      <main className={styles.contentContainer}>
        <section className={styles.seatLayoutOfTgsrtcContaineParent}>
          <SeatLayoutOfTGSRTCContaine data={data}/>
          <div className={styles.coachTypesHeading}>
        <h1 className={styles.typesOfCoaches}>{TYPES_OF_COACHES}</h1>
      </div>
      
      {data?.typesOfCoachesData.map((coach:any, index:number) => (
        <TypesOfCoaches
          key={index}
          subheading={coach.subheading}
          para={coach.para}
          bulletPoints={coach.bulletPoints}
          imageSrc={`${UPLOADS_BASE_URL}${coach.imageSrc}`}
        />
      ))}
  
          <FrameComponent4 data={data}/>
          <OtherCityServicesSection data={data}/>
        </section>
      </main>
    </div>
    </>
  );
};

export default ReservationBusDetails;
