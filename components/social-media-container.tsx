import type { NextPage } from "next";
import styles from "./social-media-container.module.css";

export type SocialMediaContainerType = {
  className?: string;
};

const SocialMediaContainer: NextPage<SocialMediaContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.socialMediaContainer, className].join(" ")}>
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
  );
};

export default SocialMediaContainer;
