import { useState } from "react";
import AccordionItem from "../../components/accordians";
import Header from "../../components/header";
import {
  APPLY_AND_RENEW,
  GENERAL_COMMUTER_PASS,
  KNOW_MORE_ABOUT_GENERAL_PASSES,
} from "../../constants";
import { generalBuspasses } from "../../constants/general-commuter-passes";
import styles from "./index.module.css";
const BusPassGeneralCommuterPass = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleChange = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className={styles.busPassGeneralCommuterPass}>
      <section className={styles.busPassesHeroGeneralCommut}>
        <img
          className={styles.bgIcon}
          alt=""
          src="/bus-pass-general-webp.png"
        />
        <img
          className={styles.bgIconMobile}
          alt=""
          src="/mobile-banner-general-passes.png"
        />
        <div className={styles.generalCommuterPassContainer}>
          <p className={styles.general}>{GENERAL_COMMUTER_PASS}</p>
          <p className={styles.applyRenew}>{APPLY_AND_RENEW}</p>
        </div>
      </section>
      <section className={styles.busPassGeneralCommuterPass2}>
        <div className={styles.knowMoreAboutStudentPassesWrapper}>
          <h2 className={styles.knowMoreAbout}>
            {KNOW_MORE_ABOUT_GENERAL_PASSES}
          </h2>
        </div>
        <div className={styles.eachAccordian}>
          <ol className={styles.orderedList}>
            {generalBuspasses.map((e: any, index: number) => (
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

export default BusPassGeneralCommuterPass;
