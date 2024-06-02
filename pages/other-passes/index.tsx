import { useEffect, useState } from "react";
import AccordionItem from "../../components/accordians";
import styles from "./index.module.css";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";

const OtherPasses = () => {

  const { data, doFetch } = useFetch();

  useEffect(() => {
    doFetch(`/other-passess?populate=*`);
  }, []);

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleChange = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className={styles.busPassGeneralCommuterPass}>
      <section className={styles.busPassesHeroGeneralCommut}>
          <img 
            className={styles.bgIcon} 
            alt="hero-web-image"
            src={UPLOADS_BASE_URL + data?.heroWebImage?.data?.attributes?.url}
            loading="lazy"
          />
        <img
          className={styles.bgIconMobile}
          alt="hero-web-image"
          src={UPLOADS_BASE_URL + data?.heroMobileImage?.data?.attributes?.url}
          loading="lazy"
        />
        <div className={styles.generalCommuterPassContainer}>
          <p className={styles.general}>{data?.heroTitle}</p>
          <p className={styles.applyRenew}>{data?.heroSubTitle}</p>
        </div>
      </section>
      <section className={styles.busPassGeneralCommuterPass2}>
        <h2 className={styles.knowMoreAboutContainer}>
          {data?.knowMoreTitle}
        </h2>
        <div className={styles.eachAccordian}>
          <ol className={styles.orderedList}>
            {data?.otherBussPassAccordiansData?.map((e, index) => (
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
