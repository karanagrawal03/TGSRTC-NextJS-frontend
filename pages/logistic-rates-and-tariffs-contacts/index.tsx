import LogisticBookYourCargoSectionCard from "../../components/logistic-book-your-cargo-section-card";
import styles from "./index.module.css";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";
import { useEffect, useState } from "react";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

const LogisticRatesAndTariffsContacts = () => {
  const { data, doFetch } = useFetch();
  const [width, setWidth] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth > 750);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    doFetch(`/logistic-rates-and-tariffs-contacts?populate=*`);
  }, []);

  return (
    <div className={styles.logisticRatesAndTariffsCon}>
      <section className={styles.logisticHeroRatesTariffC}>
        {width ? (
          <img
            className={styles.bgIcon}
            alt="bus-pass-main-section"
            src={UPLOADS_BASE_URL + data?.heroWebImage?.data?.attributes?.url}
            loading="lazy"
          />
        ) : (
          <img
            className={styles.bgIconMobile}
            alt="mobile-image"
            src={
              UPLOADS_BASE_URL + data?.heroMobileImage?.data?.attributes?.url
            }
            loading="lazy"
          />
        )}
        <div className={styles.logisticsContentWrapper}>
          <h1 className={styles.heroTitleStyles}>{data?.heroTitle}</h1>
          <p className={styles.heroSubTitleStyles}>{data?.heroSubTitle}</p>
        </div>
      </section>
      <AnimationBus/>
      <AnimationBusMobile/>
      <LogisticBookYourCargoSectionCard
        cards={data?.bookYourCargoCards || []}
      />
    </div>
  );
};

export default LogisticRatesAndTariffsContacts;
