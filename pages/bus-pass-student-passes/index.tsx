import { useEffect, useState } from "react";
import AccordionItem from "../../components/accordians";
import Header from "../../components/header";
import {
  APPLY_AND_RENEW,
  KNOW_MORE_ABOUT_STUDENT_PASSES,
  STUDENT_PASSES,
} from "../../constants";
import { busPassStudentPasses } from "../../constants/bus-pass-student-passes";
import styles from "./index.module.css";
const BusPassStudentPasses = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [width, setWidth] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth > 750);
      console.log(width);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleChange = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.busPassStudentPasses}>
      <section className={styles.busPassesHeroStudentPasses}>
        {width ? (
          <img
            className={styles.bgIcon}
            alt="bus-pass-main-section"
            src="/bus-pass-main-section@2x.png"
            loading="lazy"
          />
        ) : (
          <img
            className={styles.bgIconmobile}
            alt="mobile-image"
            src="/mobile-bus-pass-bg.png"
            loading="lazy"
          />
        )}
        <div className={styles.contentWrapper}>
          <h1 className={styles.studentPasses}>{STUDENT_PASSES}</h1>
          <h2 className={styles.applyRenew}>{APPLY_AND_RENEW}</h2>
        </div>
      </section>
      <section className={styles.busPassStudentPasses1}>
        <div className={styles.knowMoreAboutStudentPassesWrapper}>
          <h2 className={styles.knowMoreAbout}>
            {KNOW_MORE_ABOUT_STUDENT_PASSES}
          </h2>
        </div>
        <div className={styles.eachAccordian}>
          <ol className={styles.studentConcessionalRoutePas}>
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

export default BusPassStudentPasses;
