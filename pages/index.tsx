import type { NextPage } from "next";
import HomeHero from "../components/home-hero";
import BookYourTicket1 from "../components/book-your-ticket1";
import HomeBookYourServices from "../components/home-book-your-services";
import HomeGamyamApp from "../components/home-gamyam-app";
import HomeNewsUpdates from "../components/home-news-updates";
import styles from "./index.module.css";

const Homepage: NextPageHomepageType = () => {
  return (
    <div className={styles.homepage}>
      <header className={styles.header}>
        <div className={styles.tsrtcLogo}>
          <img
            className={styles.tsrtcLogoIcon}
            alt=""
            src="/tsrtc-logo@2x.png"
          />
          <div className={styles.tsrtcLogo1}>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
          </div>
        </div>
        <div className={styles.tabContainer}>
          <div className={styles.navTabs}>
            <b className={styles.reservations}>Home</b>
          </div>
          <div className={styles.navTabs1}>
            <div className={styles.reservations1}>Reservations</div>
          </div>
          <div className={styles.navTabs2}>
            <div className={styles.reservations2}>Logistics</div>
          </div>
          <div className={styles.navTabs3}>
            <div className={styles.reservations3}>Bus Passes</div>
          </div>
          <div className={styles.navTabs4}>
            <div className={styles.reservations4}>About</div>
          </div>
          <div className={styles.navTabs5}>
            <div className={styles.reservations5}>Tenders</div>
          </div>
          <div className={styles.navTabs6}>
            <div className={styles.reservations6}>TGSRTC Hospital</div>
          </div>
          <div className={styles.navTabs7}>
            <div className={styles.reservations7}>Contact us</div>
          </div>
        </div>
      </header>
      <HomeHero />
      <img className={styles.busDust} alt="" src="/bus--dust-1@2x.png" />
      <BookYourTicket1 />
      <HomeBookYourServices />
      <HomeGamyamApp />
      <section className={styles.homeAboutTsrtc}>
        <div className={styles.contentSection}>
          <div className={styles.logo}>
            <img
              className={styles.tsrtcLogoIcon1}
              alt=""
              src="/tsrtc-logo@2x.png"
            />
          </div>
          <div className={styles.texts}>
            <div className={styles.aboutTgsrtc}>About TGSRTC</div>
            <div className={styles.sinceItsInception}>
              Since its inception in 2014, Telangana State Road Transport
              Corporation (TGSRTC) TGSRTC has remained committed to excellence
              in bus transport. Our focus on safety, environmental
              sustainability, and top-notch service ensures passenger
              satisfaction and industry leadership.
            </div>
          </div>
        </div>
        <div className={styles.wrapperAboutTsrtcImage}>
          <img
            className={styles.aboutTsrtcImage}
            alt=""
            src="/about-tsrtc-image@2x.png"
          />
        </div>
      </section>
      <HomeNewsUpdates />
      <section className={styles.footer}>
        <div className={styles.footerSection}>
          <div className={styles.logo1}>
            <img
              className={styles.logo51Icon}
              loading="lazy"
              alt=""
              src="/logo5-1@2x.png"
            />
            <div className={styles.logoTextGroup}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/----1.svg"
              />
              <img
                className={styles.telanganaStateRoadTransport}
                loading="lazy"
                alt=""
                src="/telangana-state-road-transport-corporation-1.svg"
              />
            </div>
          </div>
          <div className={styles.linksContainer}>
            <div className={styles.footerLinks1}>
              <b className={styles.quicklinks}>Quicklinks</b>
              <div className={styles.careers}>{`Careers `}</div>
              <div className={styles.siteMap}>Site Map</div>
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
                  loading="lazy"
                  alt=""
                  src="/image-474@2x.png"
                />
              </div>
              <div className={styles.recognition2Wrapper}>
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
                  alt=""
                  src="/social-media-icon-1@2x.png"
                />
                <img
                  className={styles.socialMediaIcon2}
                  alt=""
                  src="/social-media-icon-2@2x.png"
                />
                <img
                  className={styles.socialMediaIcon3}
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
        <div className={styles.copyright2021TgsrtcAllRWrapper}>
          <div className={styles.copyright2021Tgsrtc}>
            Copyright © 2021 TGSRTC, All Rights Reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
