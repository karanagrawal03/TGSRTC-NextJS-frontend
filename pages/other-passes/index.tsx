import { useState } from "react";
import AccordionItem from "../../components/accordians";
import Header from "../../components/header";
import {
  APPLY_AND_RENEW,
  KNOW_MORE,
  OTHER_PASSES
} from "../../constants";

import { otherPasses } from "../../constants/other-passes";
import styles from "./index.module.css";
const OtherPasses: NextPageBusPassGeneralCommuterPassType = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleChange = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className={styles.busPassGeneralCommuterPass}>
      <Header />
      <section className={styles.busPassesHeroGeneralCommut}>
        <img className={styles.bgIcon} alt="" src="/other-pass-web.png" />
        <img
          className={styles.bgIconMobile}
          alt=""
          src="/other-passes-mobil.png"
        />
        <div className={styles.generalCommuterPassContainer}>
          <p className={styles.general}>{OTHER_PASSES}</p>
          <p className={styles.applyRenew}>{APPLY_AND_RENEW}</p>
        </div>
      </section>
      <section className={styles.busPassGeneralCommuterPass2}>
        <h2 className={styles.knowMoreAboutContainer}>
          <span className={styles.knowMoreAbout}>{KNOW_MORE}</span>
          <b>{OTHER_PASSES}</b>
        </h2>
        <div className={styles.eachAccordian}>
          <ol className={styles.orderedList}>
            {otherPasses.map((e, index) => (
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

export default OtherPasses;
