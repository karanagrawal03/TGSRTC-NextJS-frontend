import type { NextPage } from "next";
import Header1 from "../components/header1";
import FrameComponent from "../components/frame-component";
import styles from "./bus-pass-student-passes.module.css";

const BusPassStudentPasses: NextPageBusPassStudentPassesType = () => {
  return (
    <div className={styles.busPassStudentPasses}>
      <Header1
        prop="/---2.svg"
        tELANGANASTATEROADTRANSPO="/telangana-state-road-transport-corporation2.svg"
      />
      <section className={styles.busPassesHeroStudentPasses}>
        <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
        <h1 className={styles.studentPasses}>Student Passes</h1>
        <div className={styles.applyRenewTravelEffortleWrapper}>
          <h2
            className={styles.applyRenew}
          >{`Apply, Renew & Travel effortlessly with TSRTC`}</h2>
        </div>
      </section>
      <section className={styles.busPassStudentPasses1}>
        <div className={styles.knowMoreAboutStudentPassesWrapper}>
          <h2 className={styles.knowMoreAbout}>
            Know more about student passes
          </h2>
        </div>
        <div className={styles.accordianParent}>
          <div className={styles.accordian}>
            <div className={styles.bg} />
            <div className={styles.before6AmContainer}>
              <ol className={styles.studentFreeBusPasses}>
                <li>Student Free Bus Passes</li>
              </ol>
            </div>
            <img
              className={styles.accordianDropdowntrueIcon}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian1}>
            <div className={styles.bg1} />
            <div className={styles.before6AmContainer1}>
              <ol className={styles.studentConcessionalRoutePas}>
                <li>Student Concessional Route Passes in Cities / Towns:</li>
              </ol>
            </div>
            <img
              className={styles.accordianDropdownIcon}
              alt=""
              src="/accordian-dropdown.svg"
            />
          </div>
        </div>
        <div className={styles.itemCellWrapper}>
          <div className={styles.itemCell}>
            <div className={styles.httpsonlinetsrtcpassinco}>
              https://online.tsrtcpass.in/counterstupass.do?prm=hyd
            </div>
          </div>
        </div>
        <FrameComponent />
        <div className={styles.accordianGroup}>
          <div className={styles.accordian2}>
            <div className={styles.bg2} />
            <div className={styles.before6Am}>
              Districts - High School / College Student Bus Pass
            </div>
            <img
              className={styles.accordianDropdowntrueIcon1}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
          <div className={styles.accordian3}>
            <div className={styles.bg3} />
            <div className={styles.before6Am1}>
              Exclusive trips to special schools / colleges
            </div>
            <img
              className={styles.accordianDropdowntrueIcon2}
              alt=""
              src="/accordian-dropdowntrue.svg"
            />
          </div>
        </div>
      </section>
      <section className={styles.footer}>
        <div className={styles.footerSection}>
          <div className={styles.logo}>
            <img
              className={styles.logo51Icon}
              loading="lazy"
              alt=""
              src="/logo5-1@2x.png"
            />
            <div className={styles.logoTextGroup}>
              <img className={styles.icon} alt="" src="/----11.svg" />
              <img
                className={styles.telanganaStateRoadTransport}
                alt=""
                src="/telangana-state-road-transport-corporation-11.svg"
              />
            </div>
          </div>
          <div className={styles.linksContainer}>
            <div className={styles.footerLinks1}>
              <b className={styles.quicklinks}>Quicklinks</b>
              <div className={styles.careers}>{`Careers `}</div>
              <div className={styles.siteMap}>Site Map</div>
              <div className={styles.aboutUs}>About Us</div>
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
              <div className={styles.reservations}>Reservations</div>
              <div className={styles.busPasses}>Bus Passes</div>
            </div>
          </div>
        </div>
        <div className={styles.lineSeparater}>
          <img
            className={styles.lineSeparatorIcon}
            alt=""
            src="/line-separator.svg"
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
              <div className={styles.followUsOn}>
                Follow us on @TSRTCMDOFFICE
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
        </footer>
        <div className={styles.copyright2021TsrtcAllRiWrapper}>
          <div className={styles.copyright2021Tsrtc}>
            Copyright © 2021 TSRTC, All Rights Reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusPassStudentPasses;
