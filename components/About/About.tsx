import React from "react";
import styles from "./About.module.css";
import { ABOUT_TGSRTC_PARAGRAPH, ABOUT_TGSRTC_TITLE } from "../../constants";

const About = () => {
  return (
    <section className={styles.homeAboutTsrtc}>
      <div className={styles.contentSection}>
        <div className={styles.logo}>
          <img
            className={styles.tsrtcLogoIcon1}
            alt="TSRCT Logo"
            src="/tsrtc-logo@2x.png"
            loading="lazy"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.aboutTgsrtc}>{ABOUT_TGSRTC_TITLE}</div>
          <div className={styles.sinceItsInception}>
          {ABOUT_TGSRTC_PARAGRAPH}
          </div>
        </div>
      </div>
      <div className={styles.wrapperAboutTsrtcImage}>
        <picture className={styles.aboutPicture}>
          <source media="(max-width: 450px)" srcSet="/tgrtc-mobile.png" />
          <img
            className={styles.aboutTsrtcImage}
            alt="about tgsrtc"
            src="/about-tgsrtc-image.png"
            loading="lazy"
          />
        </picture>
      </div>
    </section>
  );
};

export default About;
