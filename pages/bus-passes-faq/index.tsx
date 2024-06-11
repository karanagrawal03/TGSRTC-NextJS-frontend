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
import styles from "./index.module.css";
import { UPLOADS_BASE_URL, doFetch } from "../../services/service";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

export async function getStaticProps() {

  const data = await doFetch("/bus-passes-faqs?populate=*");

  return {
    props: {
      data,
    },
  };
}

const BusPassesFaq = ({data}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
      <AnimationBus />
      <AnimationBusMobile />
      <section className={styles.busPassGeneralCommuterPass2}>
        <div className={styles.tableContainer}>
        <h2 className={styles.knowMoreAboutContainer}>{data?.faqsHeading}</h2>
        <div className={styles.eachAccordian}>
          <p className={styles.typesOfPassesText}>{data?.typesOfPasses}</p>
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
        <div className={styles.eachAccordian}>
          <p className={styles.typesOfPassesText}>
            {data?.onConsessionalPassesHeading}
          </p>
          <ol className={styles.orderedList}>
            {data?.onConcessionalPasses.map((e: any, index: number) => (
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
        </div>
      </section>
    </div>
  );
};

export default BusPassesFaq;
