import styles from "./index.module.css"
import { useEffect } from "react";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";
const AboutVisionLegacy: any = () => {
  const { data, doFetch, loading, error } = useFetch();

  useEffect(() => {
    doFetch("/about-vision-and-legacys?populate=*");
  }, []);
  const heroTitle = data != null && data != undefined ? data?.heroTitle : "";
  const part1 = heroTitle != null && heroTitle != undefined ? heroTitle?.toString().substring(0, 9).trim() : ""; // "Vision &"
  const part2 = heroTitle != null && heroTitle != undefined ? heroTitle?.toString().substring(10, 16).trim() : ""; // "Legacy"

  return (
    <div className={styles.aboutVisionLegacy}>
      <div className={styles.aboutHero}>
        <img className={styles.aboutHeroWebsite} alt="about-hero-image" src={UPLOADS_BASE_URL + data?.heroBackgroundImageWeb?.data?.attributes?.url} loading="lazy" />
        <img className={styles.aboutHeroMobile} alt="about-hero-image" src={UPLOADS_BASE_URL + data?.heroBackgroundImageMobile?.data?.attributes?.url} loading="lazy" />

        <div className={styles.visionLegacyContainer}>
          <div>
            <div className={styles.vision}>{part1}</div>
            <div className={styles.legacy}>{part2}</div>
          </div>
          <div className={styles.mobileDescription}>
            <div>{data?.heroSubtitle}</div>
          </div>
        </div>
      </div>
      <div className={styles.aboutVision}>
        <img className={styles.busDustMobile} alt="bus" src={UPLOADS_BASE_URL + data?.busDustImageMobile?.data?.attributes?.url} loading="lazy" />
        <img className={styles.busDustWebsite} alt="bus" src={UPLOADS_BASE_URL + data?.busDustImageWeb?.data?.attributes?.url} loading="lazy" />
        <section className={styles.visionConatiner}>
          <div className={styles.texts}>
            <div className={styles.titleAndLine}>
              <div className={styles.vision1}>{data?.visionTitle}</div>
              <div className={styles.headingUnderline}></div>
            </div>
            <div className={styles.tgsrtcIsCommittedContainer}>
              <div
                className={styles.tgsrtcIsCommitted}
              >{data?.visionContnet}</div>
            </div>
          </div>
        </section>
        <section className={styles.philosophyAndGuidelines}>
          <div className={styles.philosophy}>
            <div className={styles.philosophyHeading}>
              {data?.corporatePhilosophyTitle}
            </div>
            <div className={styles.phylosophyList}>
              {data?.corporatePhilosophyList?.map((item: any, index: any) => (
                <div className={styles.listItem}>
                  <div className={styles.dots}></div>
                  <div key={index} className={styles.listItemContent}>{item}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.horzontalDivider}></div>
          <div className={styles.guidelines}>
            <div className={styles.guidelinesHeading}>
              {data?.guidingPrincipleTitle}
            </div>
            <div className={styles.guidelinesList}>
              {data?.guidingPrincipleList?.map((item: any, index: any) => (
                <div className={styles.listItem}>
                  <div className={styles.dots}></div>
                  <div key={index} className={styles.listItem}>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className={styles.legacyLetterContainer}>
          <img className={styles.legacyLetter} alt="legacy-letter" src={UPLOADS_BASE_URL + data?.legacyImageWeb?.data?.attributes?.url} loading="lazy" />
          <img className={styles.legacyLetterMobile} alt="legacy-letter-mobile" src={UPLOADS_BASE_URL + data?.legacyImageMobile?.data?.attributes?.url} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default AboutVisionLegacy;
