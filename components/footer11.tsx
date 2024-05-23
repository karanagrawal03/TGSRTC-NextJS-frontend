import type { NextPage } from "next";
import FooterSection from "./footer-section";
import styles from "./footer11.module.css";

export type Footer1Type = {
  className?: string;
};

const Footer1: NextPage<Footer1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <FooterSection />
      <div className={styles.lineSeparater}>
        <img
          className={styles.lineSeparatorIcon}
          alt=""
          src="/line-separator.svg"
        />
      </div>
      <footer className={styles.recognitionAndSocialMediaC}>
        <div className={styles.recognitionContainer}>
          <div className={styles.recognitionContainer1}>
            <div className={styles.recognition1}>
              <img
                className={styles.image462Icon}
                alt=""
                src="/image-462@2x.png"
              />
              <img
                className={styles.image474Icon}
                loading="lazy"
                alt=""
                src="/image-474@2x.png"
              />
            </div>
            <button className={styles.recognition2Wrapper}>
              <img
                className={styles.recognition2Icon}
                alt=""
                src="/recognition-2@2x.png"
              />
            </button>
          </div>
        </div>
        <div className={styles.socialMediaContainer}>
          <div className={styles.socialMedia}>
            <div className={styles.followUsOn}>Follow us on @TSRTCMDOFFICE</div>
            <div className={styles.socialMediaHandles}>
              <img
                className={styles.socialMediaIcon1}
                loading="lazy"
                alt=""
                src="/social-media-icon-1@2x.png"
              />
              <img
                className={styles.socialMediaIcon2}
                loading="lazy"
                alt=""
                src="/social-media-icon-2@2x.png"
              />
              <img
                className={styles.socialMediaIcon3}
                loading="lazy"
                alt=""
                src="/social-media-icon-3@2x.png"
              />
              <img
                className={styles.socialMediaIcon4}
                alt=""
                src="/social-media-icon-4@2x.png"
              />
            </div>
          </div>
          <div className={styles.downloadPlartformContainer}>
            <div className={styles.downloadOurApp}>Download our app</div>
            <div className={styles.downloadPlatform}>
              <img
                className={styles.googlePlayIcon}
                loading="lazy"
                alt=""
                src="/google-play@2x.png"
              />
              <img
                className={styles.appStoreIcon}
                loading="lazy"
                alt=""
                src="/app-store@2x.png"
              />
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.copyright2021TsrtcAllRiWrapper}>
        <div className={styles.copyright2021Tsrtc}>
          Copyright © 2021 TSRTC, All Rights Reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer1;
