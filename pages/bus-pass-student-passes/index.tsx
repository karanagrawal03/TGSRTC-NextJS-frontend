import { useEffect, useState } from "react";
import AccordionItem from "../../components/accordians";
import styles from "./index.module.css";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";

const BusPassStudentPasses = () => {
    
  const { data, doFetch } = useFetch();

  useEffect(() => {
    doFetch(`/bus-pass-student-passess?populate=*`);
  }, []);

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
            src={UPLOADS_BASE_URL + data?.heroWebImage?.data?.attributes?.url}
            loading="lazy"
          />
        ) : (
          <img
            className={styles.bgIconmobile}
            alt="mobile-image"
            src={UPLOADS_BASE_URL + data?.heroMobileImage?.data?.attributes?.url}
            loading="lazy"
          />
        )}
        <div className={styles.contentWrapper}>
          <h1 className={styles.studentPasses}>{data?.heroTitle}</h1>
          <h2 className={styles.applyRenew}>{data?.heroSubTitle}</h2>
        </div>
      </section>
      <section className={styles.busPassStudentPasses1}>
        <div className={styles.knowMoreAboutStudentPassesWrapper}>
          <h2 className={styles.knowMoreAbout}>
            {data?.knowMoreTitle}
          </h2>
        </div>
        <div className={styles.eachAccordian}>
          <ol className={styles.studentConcessionalRoutePas}>
            {data?.studentFreeBusPasses?.map((e:any, index:number) => (
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
