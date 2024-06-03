import { useEffect } from "react";
import AboutCoperationProfile from "../../components/about-coperation-profile";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";
import styles from "./index.module.css";
import Infrastructure from "../../components/about-the-coperation-infrastructure";

const AboutTheCoperation = () => {
  const { data, doFetch } = useFetch();

  useEffect(() => {
    doFetch(`/about-the-coperations?populate=*`);
  }, []);
  console.log(data);
  return (
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
      <AboutCoperationProfile profileData={data} />
      <Infrastructure
        infrastructureText={data?.infrastructureText}
        infrastructureOfTGSRTC={data?.infrastructureOfTGSRTC}
        infrastructureCards={data?.infrastructureCards}
      />
    </section>
  );
};
export default AboutTheCoperation;
