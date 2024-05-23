import type { NextPage } from "next";
import styles from "./home-about-t-s-r-t-c.module.css";

export type HomeAboutTSRTCType = {
  className?: string;
};

const HomeAboutTSRTC: NextPage<HomeAboutTSRTCType> = ({ className = "" }) => {
  return (
    <section className={[styles.homeAboutTsrtc, className].join(" ")}>
      <div className={styles.contentSection}>
        <div className={styles.logo}>
          <img
            className={styles.tsrtcLogoIcon}
            alt=""
            src="/tsrtc-logo-1@2x.png"
          />
        </div>
        <div className={styles.texts}>
          <h1 className={styles.aboutTsrtc}>About TSRTC</h1>
          <div className={styles.sinceItsInception}>
            Since its inception in 2014, Telangana State Road Transport
            Corporation (TSRTC) TSRTC has remained committed to excellence in
            bus transport. Our focus on safety, environmental sustainability,
            and top-notch service ensures passenger satisfaction and industry
            leadership.
          </div>
        </div>
      </div>
      <img
        className={styles.aboutTsrtcImage}
        loading="lazy"
        alt=""
        src="/about-tsrtc-image@2x.png"
      />
    </section>
  );
};

export default HomeAboutTSRTC;
