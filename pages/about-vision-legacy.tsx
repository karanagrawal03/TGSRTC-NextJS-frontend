import type { NextPage } from "next";
import Header from "../components/header";
import BodyTexts from "../components/body-texts";
import FrameComponent from "../components/contract-rates-table4";
import FooterSection from "../components/footer-section";
import RecognitionAndSocialMediaC from "../components/recognition-and-social-media-c";
import styles from "./about-vision-legacy.module.css";

const AboutVisionLegacy: NextPageAboutVisionLegacyType = () => {
  return (
    <div className={styles.aboutVisionLegacy}>
      <img className={styles.busDust} alt="" src="/bus--dust@2x.png" />
      <div className={styles.aboutHero}>
        <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
        <h1 className={styles.visionLegacyContainer}>
          <p className={styles.vision}>{`Vision & `}</p>
          <p className={styles.legacy}>Legacy</p>
        </h1>
      </div>
      <main className={styles.aboutVision}>
        <section className={styles.visionConatiner}>
          <div className={styles.texts}>
            <div className={styles.titleAndLine}>
              <h1 className={styles.vision1}>Vision</h1>
              <img className={styles.redLineIcon} alt="" src="/red-line.svg" />
            </div>
            <p className={styles.tgsrtcIsCommittedContainer}>
              <span
                className={styles.tgsrtcIsCommitted}
              >{`TGSRTC is committed to provide consistently high quality of services and to continuously improve the services through a process of teamwork for the utmost satisfaction of the passengers and to attain a position of `}</span>
              <span className={styles.preEminenceInThe}>
                pre-eminence in the Bus Transport sector.
              </span>
            </p>
          </div>
        </section>
        <BodyTexts />
        <FrameComponent />
      </main>
      <footer className={styles.footer}>
        <FooterSection />
        <div className={styles.lineSeparater}>
          <img
            className={styles.lineSeparatorIcon}
            alt=""
            src="/line-separator-1.svg"
          />
        </div>
        <RecognitionAndSocialMediaC />
        <div className={styles.copyright2021TgsrtcAllRWrapper}>
          <div className={styles.copyright2021Tgsrtc}>
            Copyright © 2021 TGSRTC, All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutVisionLegacy;
