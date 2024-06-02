import type { NextPage } from "next";
import styles from "./index.module.css";
import ReservationHeroTourism from "../../components/reservation-tourism";
import ReservationDestinations from "../../components/reservation-destinations";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";
import { useEffect } from "react";

const ReservationTourism: NextPageReservationTourismType = () => {
  const { data, doFetch } = useFetch();

  useEffect(() => {
    doFetch(`/reservation-tourisms?populate=*`);
  }, []);
  // console.log({ data }, "tourism data", UPLOADS_BASE_URL);

  return (
    <div className={styles.reservationTourism}>
      <ReservationHeroTourism 
        heroTitle={data?.heroTitle} 
        heroSubTitle={data?.heroSubTitle} 
        heroWebImage={data?.bannerWebImage} 
        heroMobileImage={data?.bannerMobileImage}
      />
      <section className={styles.content}>
        <img
          className={styles.busDust}
          loading="lazy"
          alt="bus"
          src="/bus--dust1@2x.png"
        />
        <div className={styles.reservationQuote}>
          <h1 className={styles.lifeIsShort}>{data?.travelQuote1}</h1>
          <h1 className={styles.travelIsThe}>{data?.travelQuote2}</h1>
          <h2 className={styles.travelAcrossTelangana}>{data?.travelInfo}</h2>
        </div>
      </section>
      <ReservationDestinations 
        destinationsTitle={data?.destinationsTitle}
        tourismCards={data?.tourismCards}
      />
    </div>
  );
};

export default ReservationTourism;