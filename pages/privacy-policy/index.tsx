import type { NextPage } from "next";
import styles from "./index.module.css";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";
import { useEffect } from "react";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

const AboutThisSite: NextPageAboutThisSiteType = () => {
  const { data, doFetch } = useFetch();

  useEffect(() => {
    doFetch(`/about-this-sites?populate=*`);
  }, []);

  return (
    <>
      <AnimationBus />
      <AnimationBusMobile />
      <div className={styles.container}>
      <div className={styles.aboutThisSite}>
        <div className={styles.aboutContainer}>
          <h1 className={styles.aboutThisSiteTitle}>{data?.title}</h1>
          <div className={styles.aboutContent}>
            <div className={styles.disclaimer}>
              <h2 className={styles.disclaimerTitle}>
                {data?.disclaimerTitle}
              </h2>
              <div className={styles.disclaimerContent}>
                {data?.disclaimerData?.map((item: any) => (
                  <div className={styles.content}>{item}</div>
                ))}
              </div>
            </div>
            <div className={styles.separatorLine}></div>
            <div className={styles.privacyPolicy}>
              <h2 className={styles.privacyPolicyTitle}>
                {data?.privacyPolicyTitle}
              </h2>
              <div className={styles.privacyPolicyContent}>
                {data?.privacyPolicyData?.map((item: any) => (
                  <div className={styles.content}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AboutThisSite;
