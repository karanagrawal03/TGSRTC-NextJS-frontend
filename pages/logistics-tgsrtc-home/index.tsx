import type { NextPage } from "next";
import FrameComponent7 from "../../components/logistics-home-banner";
import MainContent from "../../components/logistics-home-book-your-cargo";
import ContentRight from "../../components/logistics-home-about-logistics";
import FrameComponent6 from "../../components/logistics-home-business";
import styles from "./index.module.css";

const LogisticsTSRTCHome: NextPageLogisticsTSRTCHomeType = () => {
  return (
    <div className={styles.logisticsTsrtcHome}>
      <header className={styles.header}>
        <div className={styles.tsrtcLogo}>
          <img
            className={styles.tsrtcLogoIcon}
            loading="lazy"
            alt=""
            src="/tsrtc-logo@2x.png"
          />
          <div className={styles.tsrtcLogo1}>
            <img className={styles.icon} loading="lazy" alt="" src="/---.svg" />
            <img
              className={styles.telanganaStateRoadTransport}
              loading="lazy"
              alt=""
              src="/telangana-state-road-transport-corporation.svg"
            />
          </div>
        </div>
        <div className={styles.tabContainer}>
          <div className={styles.navTabs}>
            <a className={styles.reservations}>Home</a>
          </div>
          <div className={styles.navTabs1}>
            <a className={styles.reservations1}>Reservations</a>
          </div>
          <div className={styles.navTabs2}>
            <a className={styles.reservations2}>Logistics</a>
          </div>
          <div className={styles.navTabs3}>
            <a className={styles.reservations3}>Bus Passes</a>
          </div>
          <div className={styles.navTabs4}>
            <a className={styles.reservations4}>About</a>
          </div>
          <div className={styles.navTabs5}>
            <a className={styles.reservations5}>Tenders</a>
          </div>
          <div className={styles.navTabs6}>
            <a className={styles.reservations6}>TGSRTC Hospital</a>
          </div>
          <div className={styles.navTabs7}>
            <a className={styles.reservations7}>Contact us</a>
          </div>
        </div>
      </header>
      <FrameComponent7 />
      <MainContent />
      <ContentRight />
      <FrameComponent6 />
      <footer className={styles.footer}>
        <div className={styles.footerSection}>
          <div className={styles.logo}>
            <img
              className={styles.logo51Icon}
              loading="lazy"
              alt=""
              src="/logo5-1@2x.png"
            />
            <div className={styles.logoTextGroup}>
              <img className={styles.icon1} alt="" src="/----1.svg" />
              <img
                className={styles.telanganaStateRoadTransport1}
                alt=""
                src="/telangana-state-road-transport-corporation-1.svg"
              />
            </div>
          </div>
          <div className={styles.linksContainer}>
            <div className={styles.footerLinks1}>
              <b className={styles.quicklinks}>Quicklinks</b>
              <div className={styles.careers}>{`Careers `}</div>
              <a className={styles.siteMap}>Site Map</a>
              <a className={styles.aboutUs}>About Us</a>
              <div className={styles.contactUs}>Contact us</div>
            </div>
            <div className={styles.footerLinks2}>
              <b className={styles.information}>Information</b>
              <div className={styles.rtiAct2005}>RTI Act, 2005</div>
              <div className={styles.roadSafety}>Road Safety</div>
              <div
                className={styles.privacyPolicies}
              >{`Privacy Policies `}</div>
              <div className={styles.feedback}>Feedback</div>
            </div>
            <div className={styles.footerLinks3}>
              <b className={styles.faqs}>FAQs</b>
              <div className={styles.reservations8}>Reservations</div>
              <div className={styles.busPasses}>Bus Passes</div>
            </div>
          </div>
        </div>
        <div className={styles.lineSeparater}>
          <img
            className={styles.lineSeparatorIcon}
            alt=""
            src="/line-separator-2.svg"
          />
        </div>
        <div className={styles.recognitionAndSocialMediaC}>
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
              <div className={styles.recognitionShape}>
                <img
                  className={styles.recognition2Icon}
                  loading="lazy"
                  alt=""
                  src="/recognition-2@2x.png"
                />
              </div>
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
        </div>
        <div className={styles.rights}>
          <div className={styles.copyright2021Tgsrtc}>
            Copyright © 2021 TGSRTC, All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LogisticsTSRTCHome;
