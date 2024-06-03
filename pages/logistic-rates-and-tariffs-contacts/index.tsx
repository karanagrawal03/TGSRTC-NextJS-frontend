import LogisticBookYourCargoSectionCard from "../../components/logistic-book-your-cargo-section-card";
import styles from "./index.module.css";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";
import { useEffect, useState } from "react";

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
      <img className={styles.busDust} alt="" src="/bus--dust@2x.png" />
      <section className={styles.logisticHeroRatesTariffC}>
        {width ? (
          <img
            className={styles.bgIcon}
            alt="bus-pass-main-section"
            src={
              UPLOADS_BASE_URL +
              data?.heroSectionImageWeb?.data?.attributes?.url
            }
            loading="lazy"
          />
        ) : (
          <img
            className={styles.bgIconmobile}
            alt="mobile-image"
            src={
              UPLOADS_BASE_URL +
              data?.heroSectionImageMobile?.data?.attributes?.url
            }
            loading="lazy"
          />
        )}
        <h1 className={styles.logisticRatesAndContainer}>
          <p className={styles.logisticRatesAnd}>{data?.heroTitle}</p>
        </h1>
        <div className={styles.tgsrtcIsHappyToAnnounceThWrapper}>
          <p className={styles.tgsrtcIsHappy}>{data?.heroSubTitle}</p>
        </div>
      </section>
      <div className={styles.bookingTitleContainer}>
        <h1 className={styles.bookYourCargo}>{data?.bookYourCargoTitle}</h1>
      </div>
      <LogisticBookYourCargoSectionCard
        cards={data?.bookYourCargoCards || []}
      />
    </div>
  );
};

export default LogisticRatesAndTariffsContacts;
