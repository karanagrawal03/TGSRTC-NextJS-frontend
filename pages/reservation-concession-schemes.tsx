import type { NextPage } from "next";
import ReservationHeroConcessionSc from "../components/reservation-points-banner";
import MonthlySeasonTicketsTexts from "../components/monthly-season-tickets-texts";
import FrameComponent2 from "../components/frame-component2";
import styles from "./reservation-concession-schemes.module.css";

const ReservationConcessionSchemes: NextPageReservationConcessionSchemesType =
  () => {
    return (
      <div className={styles.reservationConcessionSchemes}>
        <img className={styles.busDust} alt="" src="/bus--dust@2x.png" />
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
                src="/---1.svg"
              />
              <img
                className={styles.telanganaStateRoadTransport}
                loading="lazy"
                alt=""
                src="/telangana-state-road-transport-corporation1.svg"
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
        <ReservationHeroConcessionSc
          maskGroup="/mask-group@2x.png"
          concessionSchemes="Concession Schemes"
        />
        <section className={styles.reservationConcessionSchemes1}>
          <MonthlySeasonTicketsTexts />
          <FrameComponent2 />
          <div className={styles.frameParent}>
            <div className={styles.travel24t24TicketsParent}>
              <b className={styles.travel24t24Tickets}>
                Travel-24(T-24) Tickets
              </b>
              <p className={styles.travel24t24TicketsWereContainer}>
                <span className={styles.travel24t24TicketsWere}>
                  “Travel-24(T-24)” tickets were introduced from 15.09.2016 with
                  unlimited travel within the twin cities of
                  Hyderabad/Secunderabad for 24 hrs. Tariff of Non AC ticket is
                  priced at Rs.100/- by which passenger can travel in all types
                  of city buses (except AC) within city limits and AC Travel-24
                  is priced at Rs.160/- to travel in all types of city buses
                  including AC buses within city limits.
                </span>
                <span className={styles.blankLine}>&nbsp;</span>
                <span className={styles.t24TicketCan}>
                  T-24 ticket can be purchased at any time from any city bus
                  conductor and is valid for next 24 hrs from the date and time
                  of purchase of the ticket
                </span>
              </p>
            </div>
            <div className={styles.facilityForLongDistancePasParent}>
              <h2 className={styles.facilityForLong}>
                Facility for Long Distance Passengers
              </h2>
              <p
                className={styles.toAttractMore}
              >{`To attract more long distance (250 Kms and more) passengers, free journey facility is extended on the strength of advance reservation ticket by city and district buses to the bus station (Journey origin point) and from bus station to in the peripheral areas. This facility is valid 2 Hrs before commencement of journey (to reach Bus Station) and 2 Hrs after arriving at the destination (to reach their dwelling place) where City Buses are under operation. i.e., Hyderabad & Warangal.`}</p>
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
                <img className={styles.icon1} alt="" src="/----11.svg" />
                <img
                  className={styles.telanganaStateRoadTransport1}
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

export default ReservationConcessionSchemes;
