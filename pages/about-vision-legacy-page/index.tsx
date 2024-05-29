import Header from "../../components/header";
import FooterSection from "../../components/footer-section";
import RecognitionAndSocialMediaC from "../../components/recognition-and-social-media-c";
import styles from "./index.module.css"
import { APPLY_RENEW, CORPORATE_HEADING, EFFORTLESS, GUIDELINES_HEADING, GUIDELINES_ITEMS, LEGACY, PHILOSOPHY_ITEMS, TSRTC_VISION1, TSRTC_VISION2, VISION, VISION_AND } from "../../constants/AboutVisionLegacy";

const AboutVisionLegacy: any = () => {
  return (
    <div className={styles.aboutVisionLegacy}>
      <Header />
      <div className={styles.aboutHero}>
        <img className={styles.aboutHeroWebsite} alt="about-hero-image" src="/about-hero-website.png" />
        <img className={styles.aboutHeroMobile} alt="about-hero-image" src="/about-hero-mobile.png" />

        <div className={styles.visionLegacyContainer}>
          <div className={styles.vision}>{VISION_AND}</div>
          <div className={styles.legacy}>{LEGACY}</div>
          <div className={styles.mobileDescription}>
            <div>{APPLY_RENEW}</div>
            <div>{EFFORTLESS}</div>
          </div>
        </div>
      </div>
      <div className={styles.aboutVision}>
        <img className={styles.busDustMobile} alt="bus" src="/bus-image-mobile.png" />
        <img className={styles.busDustWebsite} alt="bus" src="/bus-image-website.png" />
        <section className={styles.visionConatiner}>
          <div className={styles.texts}>
            <div className={styles.titleAndLine}>
              <div className={styles.vision1}>{VISION}</div>
              <div className={styles.headingUnderline}></div>
            </div>
            <div className={styles.tgsrtcIsCommittedContainer}>
              <div
                className={styles.tgsrtcIsCommitted}
              >{TSRTC_VISION1}</div>
            </div>
          </div>
        </section>
        <section className={styles.philosophyAndGuidelines}>
          <div className={styles.philosophy}>
            <div className={styles.philosophyHeading}>
              {CORPORATE_HEADING}
            </div>
            <div className={styles.phylosophyList}>
              {PHILOSOPHY_ITEMS.map((item: any, index: any) => (
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
              {GUIDELINES_HEADING}
            </div>
            <div className={styles.guidelinesList}>
              {GUIDELINES_ITEMS.map((item: any, index: any) => (
                <div className={styles.listItem}>
                  <div className={styles.dots}></div>
                  <div key={index} className={styles.listItem}>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className={styles.legacyLetterContainer}>
          <img className={styles.legacyLetter} alt="legacy-letter" src="/legacy-letter-website.png" />
          <img className={styles.legacyLetterMobile} alt="legacy-letter-mobile" src="/legacy-letter-mobile.png" />
        </div>
      </div>
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
