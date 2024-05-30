import { useState } from "react";
import AccordionItem from "../../components/accordians";
import Header from "../../components/header";
import {
  APPLY_AND_RENEW,
  GENERAL_COMMUTER_PASS,
  KNOW_MORE,
} from "../../constants";
import { generalCommuterPassData } from "../../constants/bus-pass-general-commuter-pass";
import styles from "./index.module.css";
const BusPassGeneralCommuterPass =
  () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleChange = (index: number) => {
      setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
      <div className={styles.busPassGeneralCommuterPass}>
        <Header />
        <section className={styles.busPassesHeroGeneralCommut}>
          <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
          <div className={styles.generalCommuterPassContainer}>
            <p className={styles.general}>{GENERAL_COMMUTER_PASS}</p>
            <p className={styles.applyRenew}>{APPLY_AND_RENEW}</p>
          </div>
        </section>
        <section className={styles.busPassGeneralCommuterPass2}>
          <h2 className={styles.knowMoreAboutContainer}>
            <span className={styles.knowMoreAbout}>{KNOW_MORE}</span>
            <b>{GENERAL_COMMUTER_PASS}</b>
          </h2>
          <div className={styles.eachAccordian}>
            <ol className={styles.orderedList}>
              {generalCommuterPassData.map((e, index) => (
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
