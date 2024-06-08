import React, { useEffect } from 'react'
import styles from "./index.module.css"
import AboutItIntiativeContent from '../../components/aboutItInitiativeContent';
import BulletPoints from '../../components/bullet-points';
import useFetch, { UPLOADS_BASE_URL } from '../../services/service';
import AboutInitiativeHero from '../../components/aboutIntiativeHero';
import AboutInitiativeIntroduction from '../../components/aboutInitiativeIntroduction';
import AboutInitiativeProjectProposed from '../../components/aboutInitiativeProjectProposed';
import AnimationBus from '../../components/animation-bus';
import AnimationBusMobile from '../../components/animation-bus-mobile';
const AboutItInitiative = () => {
  const { data, doFetch } = useFetch();
  useEffect(() => {
    doFetch("/about-it-initiatives?populate=*")
  }, [])

  return (<>
    <div className={styles.aboutInitiative}>
      {data && <AboutInitiativeHero data={data} />}
      <AnimationBus/>
      <AnimationBusMobile/>
      {data && <AboutInitiativeIntroduction data={data} />}
      {data && <AboutItIntiativeContent data={data} />}
      {data && <AboutInitiativeProjectProposed data={data} />}
    </div>
  </>)
}
export default AboutItInitiative;
