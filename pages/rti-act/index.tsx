import type { NextPage } from "next";
import styles from "./index.module.css";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";
import { useEffect } from "react";

const RTIACT: NextPageRTIACTType = () => {
  const { data, doFetch } = useFetch();

  useEffect(() => {
    doFetch(`/rti-acts?populate=*`);
  }, []);

  return (
    <div className={styles.rtiAct}>
      <main className={styles.rtiActContainer}>
        <h1 className={styles.rightToInformation}>{data?.rtiActTitle}</h1>
        <section className={styles.rtiLists}>
          {data?.rtiActData?.map((item: any) => (
            <>
              <div className={styles.textLinks}>
                <div className={styles.indexNumber}>{item.index}.</div>
                <h2 className={styles.introduction}>{item.title}</h2>
                <div className={styles.iconHolder}>
                  <img
                    className={styles.iconBlack}
                    loading="lazy"
                    alt="gotoIcon"
                    src="/goToIcon.svg"
                  />
                  <img
                    className={styles.iconGreen}
                    loading="lazy"
                    alt="gotoIcon"
                    src="/goToIconGreen.svg"
                  />
                </div>
              </div>
              <div className={styles.lineSeparater}></div>
            </>
          ))}
        </section>
      </main>
    </div>
  );
};

export default RTIACT;
