import type { NextPage } from "next";
import styles from "./index.module.css";
import {
  BUS_CONTRACT_RATES,
  BUS_CONTRACT_RATES_TAGLINE,
} from "../../constants";
import TendersComponent from "../../components/tenders-component";

const Tenders = () => {
  return (
    <section className={styles.reservationHeroTourism}>
      <img
        className={styles.bgIcon}
        loading="lazy"
        alt="contract-rates-banner"
        src="/contract-rates-banner-web.png"
      />
      <img
        className={styles.bgIconMobile}
        loading="lazy"
        alt="contract-rates-banner"
        src="/contract-rates-banner-mobile.png"
      />
      <div className={styles.contentWrapper}>
        <h1 className={styles.tourism}>{BUS_CONTRACT_RATES}</h1>
        <p className={styles.tgsrtcIsHappy}>{BUS_CONTRACT_RATES_TAGLINE}</p>
      </div>

      <TendersComponent />
    </section>
  );
};

export default Tenders;
