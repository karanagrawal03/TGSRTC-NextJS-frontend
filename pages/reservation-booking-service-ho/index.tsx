import type { NextPage } from "next";
import Header1 from "../../components/header";
import BookYourTicket from "../../components/book-your-ticket";
import ReservationKPIs from "../../components/reservation-k-p-is";
import styles from "./index.module.css";
import Carousel from "../../components/carousel";
import SpecialBusesOffersCard from "../../components/specialBusesOffersCard";
import Tables from "../../components/tables";
import { ADVANCE_FACILITY, COMMITTED_TO, CONNECTIVITY, ISpecialBusesOffers, MAIL_SUPPORT, NEED_HELP, SETTING, SUPPORT, SUPPORT_PHN0, TGSRTC, TITLE1, TITLE2, TITLE3, TITLE4, TYPES_OF_SERVICE, connectivityList, specialBuses, typesOfServices } from "../../constants/reservation-booking-service-ho";
const ReservationBookingServiceHo: NextPageReservationBookingServiceHoType =
  () => {
    const customWidths = {
      column1: "50px",
      column2: "329px",
      column3: "787px",
    }
    const customHeaderStyles = {
      paddingTop: "10px",
      paddingBottom: "10px",
      paddingLeft: "20px",
    };
    const customRowCellStyles = {
      paddingTop: "15.5px",
      paddingBottom: "15.5px",
      paddingLeft: "20px",
    };
    return (
      <div className={styles.reservationBookingServiceHo}>
        <Header1 />
        <section className={styles.reservationHeroLanding}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/busMobileReservation.png"
          />
          <img
            className={styles.maskGroupIconMobile}
            alt=""
            src="/bus-mobile.png"
          />
          <div className={styles.bgImgTexts}>
          <div className={styles.tgsrtcOnlineBusContainer}>
            <p className={styles.tgsrtcOnlineBus}>{TITLE1}</p>
            <p className={styles.bookingService}>{TITLE2}</p>
            <div className={styles.applyRenew}>
              {TITLE3}
            </div>
          </div>
          <div className={styles.bookYourTickets}>
            {TITLE4}
          </div>
          </div>
        </section>
        <BookYourTicket />
        <ReservationKPIs />
        <section className={styles.busDustParent}>
          <img className={styles.busDust} alt="" src="/bus--dust7.svg" />
          <div className={styles.reservationSpecialBusesOf}>
            <div className={styles.specialBusesOfferWrapper}>
              <h1 className={styles.specialBuses}>{`Special Buses & Offer`}</h1>
            </div>
            <Carousel>
              {specialBuses?.map((each: ISpecialBusesOffers, index: number) => (
                <SpecialBusesOffersCard item={each} key={index} />
              ))}
            </Carousel>
          </div>
        </section>
        <div className={`${styles.csImgContainer}`}>
            <img src={"/customerSupport1.png"} className={styles.cSImg} />
            <img src={"/customerSupportImageMobile.png"} className={styles.cSImgMobile} />
            <div className={styles.customerSupportTexts}>
              <div className={styles.texts}>
                <h1 className={styles.customerSupport}>
                  {SUPPORT}
                </h1>
                <div className={styles.needHelpWith}>
                  {NEED_HELP}
                </div>
              </div>
              <div className={styles.emailPhone}>
                <div className={styles.email}>
                  <img className={styles.icons2} alt="" src="/icons-12.svg" />
                  <h2 className={styles.onlinesupporttgsrtcbusin}>
                    {MAIL_SUPPORT}
                  </h2>
                </div>
                <div className={styles.phone}>
                  <img className={styles.icons3} alt="" src="/icons-13.svg" />
                  <div className={styles.div}>{SUPPORT_PHN0}</div>
                </div>
              </div>
            </div>
        </div>
        <section className={styles.reservationBookingServiceHoInner}>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameDiv}>
                <div className={styles.frameWrapper1}>
                  <div className={styles.frameParent1}>
                    <div className={styles.tgsrtcWrapper}>
                      <h1 className={styles.tgsrtc}>{TGSRTC}</h1>
                    </div>
                    <h1 className={styles.settingStandardsDelivering}>
                      {SETTING}
                    </h1>
                  </div>
                </div>
                <p className={styles.tgsrtcIsCommittedTo}>
                 {COMMITTED_TO}
                </p>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.typesOfServicesParent}>
                <h3 className={styles.typesOfServices}>{TYPES_OF_SERVICE}</h3>
                <p className={styles.advanceReservationFacility}>
                  {ADVANCE_FACILITY}
                </p>

                <Tables
                  rows={typesOfServices}
                  containerClassName={styles.tableStyles}
                  customHeaderCellStyles={customHeaderStyles}
                  customRowCellStyles={customRowCellStyles}
                  columnWidths={customWidths}
                />
              </div>
            </div>
            <div className={styles.bulletPointContainer1}>
              <div className={styles.title2}>
                <h2 className={styles.guidingPrinciplesOf1}>{CONNECTIVITY}</h2>
              </div>
              <div className={styles.list}>
                {connectivityList?.map((each: any, index: number) => (
                  <div className={styles.row}>
                    <div className={styles.dot}></div>
                    <div className={styles.listItem} key={index}>
                      {each}
                    </div>
                  </div>
                ))}
              </div>
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
                <img className={styles.icon} alt="" src="/----1.svg" />
                <img
                  className={styles.telanganaStateRoadTransport}
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
                <div className={styles.reservations}>Reservations</div>
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
          <div className={styles.copyright2021TgsrtcAllRWrapper}>
            <div className={styles.copyright2021Tgsrtc}>
              Copyright © 2021 TGSRTC, All Rights Reserved.
            </div>
          </div>
        </section>
      </div>
    );
  };

export default ReservationBookingServiceHo;
