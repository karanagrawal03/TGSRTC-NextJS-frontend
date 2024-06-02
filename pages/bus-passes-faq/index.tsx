import { useEffect, useState } from "react";
import AccordionItem from "../../components/accordians";
import Header from "../../components/header";
import {
  APPLY_AND_RENEW,
  FAQS,
  GENERAL_COMMUTER_PASS,
  KNOW_MORE,
  KNOW_MORE_ABOUT_FAQ,
  KNOW_MORE_ABOUT_STUDENT_PASSES,
} from "../../constants";

// import { generalCommuterPassData } from "../../constants/bus-pass-general-commuter-pass";
import styles from "./index.module.css";
import { busPassStudentPasses } from "../../constants/bus-pass-student-passes";
import useFetch, { BASE_URL, UPLOADS_BASE_URL } from "../../services/service";
const BusPassesFaq = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { data, doFetch } = useFetch();
  useEffect(() => {
    doFetch(`/bus-passes-faqs?populate=*`);
  }, []);
  const handleChange = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className={styles.busPassGeneralCommuterPass}>
      <section className={styles.busPassesHeroGeneralCommut}>
        <img
          className={styles.bgIcon}
          alt="banner-web-image"
          loading="lazy"
          src={UPLOADS_BASE_URL + data?.heroSection[0].heroSectionWebImage}
        />
        <img
          className={styles.bgIconMobile}
          alt="banner-mobile-image"
          loading="lazy"
          src={UPLOADS_BASE_URL + data?.heroSection[0].heroSectionMobileImage}
        />
        <div className={styles.generalCommuterPassContainer}>
          <p className={styles.general}>
            {data?.heroSection[0].heroSectionHeading}
          </p>
          <p className={styles.applyRenew}>
            {data?.heroSection[0].heroSectionSubHeading}
          </p>
        </div>
      </section>
      <section className={styles.busPassGeneralCommuterPass2}>
        <h2 className={styles.knowMoreAboutContainer}>
          {data?.faqsAccordiansHeading}
        </h2>
        <div className={styles.eachAccordian}>
          <ol className={styles.orderedList}>
            {data?.busPassesFaqData.map((e: any, index: number) => (
              <AccordionItem
                key={index}
                name={e.name}
                info={e.info}
                expanded={expandedIndex === index}
                onChange={() => handleChange(index)}
              />
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
};

export default BusPassesFaq;
