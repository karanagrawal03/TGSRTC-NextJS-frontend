import type { NextPage } from "next";
import FooterSection from "./footer-section";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <FooterSection siteMapTextDecoration="unset" />
      <div className={styles.lineSeparater}>
        <img
          className={styles.lineSeparatorIcon}
          alt=""
          src="/line-separator-2.svg"
        />
      </div>
      <footer className={styles.recognitionAndSocialMediaC}>
        <div className={styles.recognitionContainerWrapper}>
          <div className={styles.recognitionContainer}>
            <div className={styles.recognition1}>
              <img
                className={styles.image462Icon}
                alt=""
                src="/image-462@2x.png"
              />
              <img
                className={styles.image474Icon}
                alt=""
                src="/image-474@2x.png"
              />
            </div>
            <img
              className={styles.recognition2Icon}
              loading="lazy"
              alt=""
              src="/recognition-2@2x.png"
            />
          </div>
        </div>
        <div className={styles.socialMediaContainer}>
          <div className={styles.socialMedia}>
            <div className={styles.followUsOn}>
              Follow us on @TGSRTCMDOFFICE
            </div>
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
                src="/social-media-icon-21@2x.png"
              />
              <img
                className={styles.socialMediaIcon3}
                loading="lazy"
                alt=""
                src="/social-media-icon-31@2x.png"
              />
              <img
                className={styles.socialMediaIcon4}
                loading="lazy"
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
      <div className={styles.copyright2021TgsrtcAllRWrapper}>
        <div className={styles.copyright2021Tgsrtc}>
          Copyright © 2021 TGSRTC, All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
