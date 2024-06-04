import type { NextPage } from "next";
import styles from "./index.module.css";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";
import { useEffect, useState } from "react";
import AccordionItem from "../../components/accordians";

const RTIACT: NextPageRTIACTType = () => {
  const { data, doFetch } = useFetch();

  useEffect(() => {
    doFetch(`/rti-acts?populate=*`);
  }, []);

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleChange = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className={styles.rtiAct}>
      <main className={styles.rtiActContainer}>
        <h1 className={styles.rightToInformation}>{data?.rtiActTitle}</h1>
        <div className={styles.rtiActContent}>
          <ol className={styles.rtiList}>
            {data?.rtiActData?.map((item: any, index: number) => (
              <AccordionItem
                key={index}
                name={item.name}
                info={item.info}
                expanded={expandedIndex === index}
                onChange={() => handleChange(index)}
              />
            ))}
          </ol>
        </div>
      </main>
    </div>
  );
};

export default RTIACT;
