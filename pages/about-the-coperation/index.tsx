import { useEffect } from "react";
import AboutCoperationProfile from "../../components/about-coperation-profile";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";
import styles from "./index.module.css";
import Infrastructure from "../../components/about-the-coperation-infrastructure";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

const AboutTheCoperation = () => {
  const { data, doFetch } = useFetch();

  useEffect(() => {
    doFetch(`/about-the-coperations?populate=*`);
  }, []);
  return (
    <>
    <section className={styles.reservationHeroTourism}>
      <img
        className={styles.bgIcon}
        loading="lazy"
        alt="contract-rates-banner"
        src={UPLOADS_BASE_URL + data?.heroSection.webImage}
      />
      <img
        className={styles.bgIconMobile}
        loading="lazy"
        alt="contract-rates-banner"
        src={UPLOADS_BASE_URL + data?.heroSection.mobileImage}
      />
      <div className={styles.contentWrapper}>
        <h1 className={styles.tourism}>
          {data?.heroSection.heroSectionHeading}
        </h1>
        <p className={styles.tgsrtcIsHappy}>
          {data?.heroSection.heroSectionSubHeading}
        </p>
      </div>
    </section>
    <AnimationBus />
    <AnimationBusMobile />
      <div className={styles.innerContainer}>
        <AboutCoperationProfile profileData={data} />
        <Infrastructure
          infrastructureText={data?.infrastructureText}
          infrastructureOfTGSRTC={data?.infrastructureOfTGSRTC}
          infrastructureCards={data?.infrastructureCards}
        />
      </div>
   </>
  );
};
export default AboutTheCoperation;
