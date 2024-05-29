import { useState } from "react";
import AccordionItem from "../../components/accordians";
import Header from "../../components/header";
import {
  APPLY_AND_RENEW,
  FAQS,
  GENERAL_COMMUTER_PASS,
  KNOW_MORE,
} from "../../constants";

// import { generalCommuterPassData } from "../../constants/bus-pass-general-commuter-pass";
import styles from "./index.module.css";
import { busPassStudentPasses } from "../../constants/bus-pass-student-passes";
const BusPassesFaq: NextPageBusPassGeneralCommuterPassType = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleChange = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className={styles.busPassGeneralCommuterPass}>
      <Header />
      <section className={styles.busPassesHeroGeneralCommut}>
        <img className={styles.bgIcon} alt="" src="/faq-bg.png" />
        <img className={styles.bgIconMobile} alt="" src="/faq-mobile-bg.png" />
        <div className={styles.generalCommuterPassContainer}>
          <p className={styles.general}>{FAQS}</p>
          <p className={styles.applyRenew}>{APPLY_AND_RENEW}</p>
        </div>
      </section>
      <section className={styles.busPassGeneralCommuterPass2}>
        <h2 className={styles.knowMoreAboutContainer}>
          <span className={styles.knowMoreAbout}>{KNOW_MORE}</span>
          <b>{FAQS}</b>
        </h2>
        <div className={styles.eachAccordian}>
          <ol className={styles.orderedList}>
            {busPassStudentPasses.map((e, index) => (
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
