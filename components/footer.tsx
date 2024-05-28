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
          src="/lineSeparater.svg"
        />
      </div>
      <footer className={styles.recognitionAndSocialMediaC}>
        <div className={styles.recognitionContainerWrapper}>
          <div className={styles.recognitionContainer}>
            <div className={styles.recognition1}>
              <a href="https://www.asrtu.org/" target="_blank">
                <img
                  className={styles.image462Icon}
                  alt=""
                  src="/image-462@2x.png"
                />
                <div className={styles.image474IconSection}>
                  <img
                    className={styles.image474Icon}
                    alt=""
                    src="/image-474@2x.png"
                  />
                </div>
              </a>
            </div>
            <a href="https://www.india.gov.in/" target="_blank">
              <img
                className={styles.recognition2Icon}
                loading="lazy"
                alt=""
                src="/recognition-2@2x.png"
              />
            </a>
          </div>
        </div>
        <div className={styles.socialMediaContainer}>
          <div className={styles.socialMedia}>
            <div className={styles.followUsOn}>
              Follow us on @TGSRTCMDOFFICE
            </div>
            <div className={styles.socialMediaHandles}>
              <a href="https://www.facebook.com/search/top?q=tsrtcmdoffice" target="_blank">
                <img
                  className={styles.socialMediaIcon1}
                  loading="lazy"
                  alt=""
                  src="/social-media-icon-1@2x.png"
                />
              </a>
              <a href="https://www.instagram.com/tsrtcmdoffice/?utm_medium=copy_link" target="_blank">
                <img
                  className={styles.socialMediaIcon2}
                  loading="lazy"
                  alt=""
                  src="/social-media-icon-21@2x.png"
                />
              </a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2Fsearch%3Fq%3Dtsrtcmdoffice" target="_blank">
                <img
                  className={styles.socialMediaIcon3}
                  loading="lazy"
                  alt=""
                  src="/social-media-icon-31@2x.png"
                />
              </a>
              <a href="https://t.me/tsrtcmdoffice" target="_blank">
                <img
                  className={styles.socialMediaIcon4}
                  loading="lazy"
                  alt=""
                  src="/social-media-icon-4@2x.png"
                />
              </a>
            </div>
          </div>
          <div className={styles.downloadPlartformContainer}>
            <div className={styles.downloadOurApp}>Download our app</div>
            <div className={styles.downloadPlatform}>
              <a href="https://play.google.com/store/apps/details?id=com.app.tsrtc" target="_blank">
                <img
                  className={styles.googlePlayIcon}
                  loading="lazy"
                  alt=""
                  src="/google-play@2x.png"
                />
              </a>
              <a href="https://apps.apple.com/us/app/tsrtc/id1201934852?ls=1" target="_blank">
                <img
                  className={styles.appStoreIcon}
                  loading="lazy"
                  alt=""
                  src="/app-store@2x.png"
                />
              </a>
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
