import React, { useEffect } from 'react'
import styles from "./index.module.css"
import AboutItIntiativeContent from '../../components/aboutItInitiativeContent';
import BulletPoints from '../../components/bullet-points';
import useFetch, { UPLOADS_BASE_URL } from '../../services/service';
const AboutItInitiative = () => {
  const { data, doFetch } = useFetch();
  useEffect(() => {
    doFetch("/about-it-initiatives?populate=*")
  }, [])
  return (<>
    <div className={styles.aboutInitiative}>

      <section className={styles.heroSection}>
        <img className={styles.heroBackgroundImageWeb} alt="hero background image website" src={UPLOADS_BASE_URL + data?.heroBackgroundImageWeb?.data?.attributes?.url} loading='lazy' />
        <img className={styles.heroBackgroundImageMobile} alt="hero background image mobile" src={UPLOADS_BASE_URL + data?.heroBackgroundImageMobile?.data?.attributes?.url} loading='lazy' />
        <div className={styles.heroSectionContent}>
          <div className={styles.heroTitle}>{data?.heroTitle}</div>
          <div className={styles.heroSubtitle}>{data?.heroSubtitle}</div>
        </div>
      </section>
      <section className={styles.introduction}>
        <div className={styles.introHeading}>{data?.introTitle}</div>
        <div className={styles.introContent}>{data?.introContent}</div>
      </section>
      <section className={styles.tsrtcInfoList}>
        {data && <AboutItIntiativeContent data={data} />}

      </section>
      <section className={styles.projectProposed}>
        <div className={styles.projectProposedHeading}>{data?.projectProposedTitle}</div>
        <div className={styles.heading}>{data?.intelligentTitle}</div>
        <div className={styles.content}>
          {data?.intelligentContent.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <div className={styles.lineSeperator}></div>
        <div className={styles.heading}>{data?.vehicleTrackingTitle}</div>
        <div className={styles.content}>A{data?.vehicleTrackingContent}</div>
        <div className={styles.listContainer}>
          <div>
            <div className={styles.listHeading}>{data?.implementationTitle}</div>
            <div className={styles.list}>
              <BulletPoints items={data?.implementationList} containerClassName={styles.listStyles} />
            </div>
          </div>
          <div>
            <div className={styles.listHeading}>{data?.computerisationTitle}</div>
            <div className={styles.list}>
              <BulletPoints items={data?.computerizationAchievementsList} containerClassName={styles.listStyles} />
            </div>
          </div>
        </div>
      </section>

    </div>
  </>)
}
export default AboutItInitiative;
