import type { NextPage } from "next";
import styles from "./index.module.css";
import {
  BUS_CONTRACT_RATES,
  BUS_CONTRACT_RATES_TAGLINE,
} from "../../constants";
import TendersComponent from "../../components/tenders-component";
import { useEffect } from "react";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";

const Tenders = () => {
  const { data, doFetch } = useFetch();
  useEffect(() => {
    doFetch(`/tenders?populate=*`);
  }, []);
  const heroSection = data?.heroSection[0];
  return (
    <section className={styles.reservationHeroTourism}>
      <img
        className={styles.bgIcon}
        loading="lazy"
        alt="contract-rates-banner"
        src={UPLOADS_BASE_URL + heroSection?.heroSectionWebImage}
      />
      <img
        className={styles.bgIconMobile}
        loading="lazy"
        alt="contract-rates-banner"
        src={UPLOADS_BASE_URL + heroSection?.heroSectionMobileImage}
      />
      <div className={styles.contentWrapper}>
        <h1 className={styles.tourism}>{heroSection?.heroSectionHeading}</h1>
        <p className={styles.tgsrtcIsHappy}>
          {heroSection?.heroSectionSubHeading}
        </p>
      </div>

      <TendersComponent TotalData={data} />
    </section>
  );
};

export default Tenders;
