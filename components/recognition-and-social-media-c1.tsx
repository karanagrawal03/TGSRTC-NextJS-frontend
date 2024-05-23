import type { NextPage } from "next";
import styles from "./recognition-and-social-media-c1.module.css";

export type RecognitionAndSocialMediaCType = {
  className?: string;
};

const RecognitionAndSocialMediaC: NextPage<RecognitionAndSocialMediaCType> = ({
  className = "",
}) => {
  return (
    <footer
      className={[styles.recognitionAndSocialMediaC, className].join(" ")}
    >
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
              src="/social-media-icon-11@2x.png"
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
  );
};

export default RecognitionAndSocialMediaC;
