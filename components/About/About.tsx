import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.homeAboutTsrtc}>
      <div className={styles.contentSection}>
        <div className={styles.logo}>
          <img
            className={styles.tsrtcLogoIcon1}
            alt="TSRCT Logo"
            src="/tsrtc-logo@2x.png"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.aboutTgsrtc}>{"About TGSRTC"}</div>
          <div className={styles.sinceItsInception}>
            Since its inception in 2014, Telangana State Road Transport
            Corporation (TGSRTC) TGSRTC has remained committed to excellence in
            bus transport. Our focus on safety, environmental sustainability,
            and top-notch service ensures passenger satisfaction and industry
            leadership.
          </div>
        </div>
      </div>
      <div className={styles.wrapperAboutTsrtcImage}>
        <picture className={styles.aboutPicture}>
          <source media="(max-width: 450px)" srcSet="/tgrtc-mobile.png" />
          <img
            className={styles.aboutTsrtcImage}
            alt=""
            src="/about-tgsrtc-image.png"
          />
        </picture>
      </div>
    </section>
  );
};

export default About;
