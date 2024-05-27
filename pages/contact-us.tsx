import type { NextPage } from "next";
import styles from "./contact-us.module.css";

const ContactUs: NextPageContactUsType = () => {
  return (
    <div className={styles.contactUs}>
      <header className={styles.header}>
        <div className={styles.tsrtcLogo}>
          <img
            className={styles.tsrtcLogoIcon}
            loading="lazy"
            alt=""
            src="/tsrtc-logo@2x.png"
          />
          <div className={styles.tsrtcLogo1}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/---6.svg"
            />
            <img
              className={styles.telanganaStateRoadTransport}
              loading="lazy"
              alt=""
              src="/telangana-state-road-transport-corporation5.svg"
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
      <section className={styles.contactUsHero}>
        <img
          className={styles.contactUsBgImage}
          alt=""
          src="/contact-us-bg-image@2x.png"
        />
        <div className={styles.contactUsHeroForms}>
          <div className={styles.contactUsTextFields}>
            <h1 className={styles.contactUs1}>Contact Us!</h1>
            <div className={styles.contactUsAddress}>
              <p className={styles.telanganaStateRoadContainer}>
                <span className={styles.telanganaStateRoad}>
                  Telangana State Road Transport Corporation,
                </span>
                <span className={styles.thFloorBBlock}>
                  4th Floor, B-Block, Bus Bhavan,
                </span>
                <span className={styles.rtcXRoads}>
                  RTC ‘X’ Roads, Mushirabad, Hyderabad – 500020
                </span>
              </p>
              <div className={styles.contactUsMailPhone}>
                <div className={styles.mailGeneralEnquiry}>
                  <img
                    className={styles.mailIcons}
                    loading="lazy"
                    alt=""
                    src="/mail-icons.svg"
                  />
                  <h3 className={styles.onlinesupporttgsrtcbusin}>
                    online.support@TGSRTCbus.in - For General Enquiry
                  </h3>
                </div>
                <div className={styles.mailLogistics}>
                  <img
                    className={styles.mailIcons1}
                    alt=""
                    src="/mail-icons.svg"
                  />
                  <h3
                    className={styles.tscargocomplaintsgmailcom}
                  >{`ts.cargocomplaints@gmail.com - For Logistics `}</h3>
                </div>
                <div className={styles.phone}>
                  <img
                    className={styles.phoneIcons}
                    loading="lazy"
                    alt=""
                    src="/phone-icons.svg"
                  />
                  <div className={styles.div}>040 69440000 / 040 23450033</div>
                </div>
                <div className={styles.helpline}>
                  <img
                    className={styles.iconHolder}
                    loading="lazy"
                    alt=""
                    src="/icon-holder.svg"
                  />
                  <p className={styles.helplineNoHyderabadContainer}>
                    <span className={styles.helplineNoHyderabadCityBu}>
                      <span className={styles.helplineNoHyderabad}>
                        Helpline No: Hyderabad City Bus Pass: 8008204216
                      </span>
                    </span>
                    <span className={styles.to2000OnAllWorkingDays}>
                      <i className={styles.to2000On}>
                        (08:00 to 20:00 on all working days)
                      </i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactUsCard}>
            <h2 className={styles.pleaseGiveYour}>
              Please Give your Feedback/Suggestions
            </h2>
            <div className={styles.formField}>
              <div className={styles.forms}>
                <div className={styles.name}>Name</div>
                <div className={styles.formInputContainer}>
                  <input
                    className={styles.enterYourName}
                    placeholder="Enter your name here..."
                    type="text"
                  />
                  <img className={styles.icons} alt="" />
                </div>
              </div>
              <div className={styles.forms1}>
                <div className={styles.name1}>Email</div>
                <div className={styles.formInputContainer1}>
                  <input
                    className={styles.enterYourName1}
                    placeholder="Enter your email here..."
                    type="text"
                  />
                  <img className={styles.icons1} alt="" />
                </div>
              </div>
              <div className={styles.forms2}>
                <div className={styles.name2}>Phone No.</div>
                <div className={styles.formInputContainer2}>
                  <input
                    className={styles.enterYourName2}
                    placeholder="Enter your phone number here..."
                    type="text"
                  />
                  <img className={styles.icons2} alt="" />
                </div>
              </div>
              <div className={styles.forms3}>
                <div className={styles.name3}>Feedback / Suggestion</div>
                <textarea
                  className={styles.formInputContainer3}
                  placeholder={`Enter your Feedback/Suggestions here...


`}
                  rows={4}
                  cols={21}
                />
              </div>
            </div>
            <button className={styles.button}>
              <b className={styles.applyNow}>Send</b>
            </button>
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <img
          className={styles.busDust}
          loading="lazy"
          alt=""
          src="/bus--dust5@2x.png"
        />
        <div className={styles.contactUsAccordions}>
          <h2 className={styles.contactDetailsOf}>
            Contact Details of Other Services
          </h2>
          <div className={styles.contactUsAccordions1}>
            <div className={styles.accordion}>
              <div className={styles.bg} />
              <h3 className={styles.before6Am}>Management Team</h3>
              <img
                className={styles.accordianDropdowntrueIcon}
                loading="lazy"
                alt=""
                src="/accordian-dropdowntrue.svg"
              />
            </div>
            <div className={styles.accordion1}>
              <div className={styles.bg1} />
              <h3 className={styles.before6Am1}>Corporate Office</h3>
              <img
                className={styles.accordianDropdowntrueIcon1}
                alt=""
                src="/accordian-dropdowntrue.svg"
              />
            </div>
            <div className={styles.accordion2}>
              <div className={styles.bg2} />
              <h3 className={styles.before6Am2}> Zones</h3>
              <img
                className={styles.accordianDropdowntrueIcon2}
                alt=""
                src="/accordian-dropdowntrue.svg"
              />
            </div>
            <div className={styles.accordion3}>
              <div className={styles.bg3} />
              <h3 className={styles.before6Am3}>Regions</h3>
              <img
                className={styles.accordianDropdowntrueIcon3}
                alt=""
                src="/accordian-dropdowntrue.svg"
              />
            </div>
            <div className={styles.accordion4}>
              <div className={styles.bg4} />
              <h3 className={styles.before6Am4}>DY.RM'S</h3>
              <img
                className={styles.accordianDropdowntrueIcon4}
                alt=""
                src="/accordian-dropdowntrue.svg"
              />
            </div>
            <div className={styles.accordion5}>
              <div className={styles.bg5} />
              <h3 className={styles.before6Am5}>Divisions</h3>
              <img
                className={styles.accordianDropdowntrueIcon5}
                alt=""
                src="/accordian-dropdowntrue.svg"
              />
            </div>
            <div className={styles.accordion6}>
              <div className={styles.bg6} />
              <h3 className={styles.before6Am6}>Depots</h3>
              <img
                className={styles.accordianDropdowntrueIcon6}
                alt=""
                src="/accordian-dropdowntrue.svg"
              />
            </div>
            <div className={styles.accordion7}>
              <div className={styles.bg7} />
              <h3 className={styles.before6Am7}>Bus Stations</h3>
              <img
                className={styles.accordianDropdowntrueIcon7}
                alt=""
                src="/accordian-dropdowntrue.svg"
              />
            </div>
            <div className={styles.accordion8}>
              <div className={styles.bg8} />
              <h3 className={styles.before6Am8}>PF-SBT-SRBS</h3>
              <img
                className={styles.accordianDropdowntrueIcon8}
                alt=""
                src="/accordian-dropdowntrue.svg"
              />
            </div>
          </div>
        </div>
      </section>
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
              <img className={styles.icon1} alt="" src="/----18.svg" />
              <img
                className={styles.telanganaStateRoadTransport1}
                alt=""
                src="/telangana-state-road-transport-corporation-18.svg"
              />
            </div>
          </div>
          <div className={styles.linksContainer}>
            <div className={styles.footerLinks1}>
              <b className={styles.quicklinks}>Quicklinks</b>
              <div className={styles.careers}>{`Careers `}</div>
              <a className={styles.siteMap}>Site Map</a>
              <a className={styles.aboutUs}>About Us</a>
              <div className={styles.contactUs2}>Contact us</div>
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
          <div className={styles.recognitionSocialContainer}>
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
              <div className={styles.recognitionBackground}>
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
        <div className={styles.copyright2021TgsrtcAllRWrapper}>
          <div className={styles.copyright2021Tgsrtc}>
            Copyright © 2021 TGSRTC, All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
