import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import AccordionItem from "../../components/accordians";
import styles from "./index.module.css";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";

const OtherPasses = () => {
  const { data, doFetch } = useFetch();
  const router = useRouter();
  let { index } = router.query as any;
  index = parseInt(index as string, 10);

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isImageLoaded, setImageLoad] = useState(false);
  const divRefs = useRef<Array<HTMLDivElement>>([]);

  useEffect(() => {
    doFetch(`/other-passess?populate=*`);
  }, []);

  useEffect(() => {
    // if (index) {
    // const indexInt = parseInt(index as string, 10);
    if (index !== null && divRefs.current[index]) {
      divRefs.current[index].scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [index, isImageLoaded]);

  const handleChange = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const handleImageLoad = () => {
    setImageLoad(true);
  };
  return (
    <div className={styles.busPassGeneralCommuterPass}>
      <section className={styles.busPassesHeroGeneralCommut}>
        <img
          className={styles.bgIcon}
          alt="hero-web-image"
          src={UPLOADS_BASE_URL + data?.heroWebImage?.data?.attributes?.url}
          loading="lazy"
          onLoad={handleImageLoad}
        />
        <img
          className={styles.bgIconMobile}
          alt="hero-web-image"
          src={UPLOADS_BASE_URL + data?.heroMobileImage?.data?.attributes?.url}
          loading="lazy"
          onLoad={handleImageLoad}
        />
        <div className={styles.generalCommuterPassContainer}>
          <p className={styles.general}>{data?.heroTitle}</p>
          <p className={styles.applyRenew}>{data?.heroSubTitle}</p>
        </div>
      </section>
      <section className={styles.busPassGeneralCommuterPass2}>
        <h2 className={styles.knowMoreAboutContainer}>{data?.knowMoreTitle}</h2>
        <div className={styles.eachAccordian}>
          <ol className={styles.orderedList}>
            {data?.otherBussPassAccordiansData?.map((e: any, idx: number) => (
              <div
                ref={(element) => {
                  divRefs.current[idx] = element as HTMLDivElement;
                }}
              >
                <AccordionItem
                  key={idx}
                  name={e.name}
                  info={e.info}
                  expanded={expandedIndex === idx || index === idx}
                  onChange={() => handleChange(idx)}
                />
              </div>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
};

export default OtherPasses;
