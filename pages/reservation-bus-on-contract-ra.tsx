import type { NextPage } from "next";
import ReservationHeroTourism from "../components/reservation-hero-tourism";
import TableTitle2 from "../components/table-title2";
import FrameComponent1 from "../components/frame-component1";
import TableTitle1 from "../components/table-title1";
import FrameComponent from "../components/frame-component";
import TableTitle from "../components/table-title";
import styles from "./reservation-bus-on-contract-ra.module.css";

const ReservationBusOnContractRa: NextPageReservationBusOnContractRaType =
  () => {
    return (
      <div className={styles.reservationBusOnContractRa}>
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
        <ReservationHeroTourism
          bG="/mask-group@2x.png"
          tourism="Bus on Contract Rates"
          propHeight="754px"
          propBottom="-52px"
          propDisplay="inline-block"
        />
        <main className={styles.reservationContractRatesTab}>
          <TableTitle2 />
          <FrameComponent1 />
          <form className={styles.tableTitleParent}>
            <TableTitle1 />
            <FrameComponent />
            <TableTitle />
          </form>
          <section className={styles.annexureContainer}>
            <h1 className={styles.annexureA}>ANNEXURE: A</h1>
            <div className={styles.bulletPointContainer}>
              <div className={styles.title}>
                <h2
                  className={styles.guidingPrinciplesOf}
                >{`Terms & Condition`}</h2>
              </div>
              <div className={styles.bulletPoints}>
                <div className={styles.bulletPoint}>
                  <img
                    className={styles.bulltetPointPlaceholder}
                    alt=""
                    src="/bulltet-point-placeholder.svg"
                  />
                  <p className={styles.monthlySeasonTickets}>
                    TGSRTC does not take responsibility for any delay/damages
                    caused due to break downs, accidents, mechanical failures
                    etc., when a bus is given for Contract.
                  </p>
                </div>
                <div className={styles.bulletPoint1}>
                  <img
                    className={styles.bulltetPointPlaceholder1}
                    alt=""
                    src="/bulltet-point-placeholder.svg"
                  />
                  <p
                    className={styles.monthlySeasonTickets1}
                  >{`No over load shall be allowed on the bus given for hire. In case of any over loading, fare shall be charged additionally by issuing ticket for each additional passenger separately for both UP & DOWN journeys`}</p>
                </div>
                <div className={styles.bulletPoint2}>
                  <img
                    className={styles.bulltetPointPlaceholder2}
                    alt=""
                    src="/bulltet-point-placeholder.svg"
                  />
                  <p className={styles.monthlySeasonTickets2}>
                    Inter-State Border Tax and Parking fee (if any) shall be
                    borne by the party.
                  </p>
                </div>
                <div className={styles.bulletPoint3}>
                  <img
                    className={styles.bulltetPointPlaceholder3}
                    alt=""
                    src="/bulltet-point-placeholder.svg"
                  />
                  <p className={styles.monthlySeasonTickets3}>
                    The party shall be responsible in guiding the driver on the
                    route.
                  </p>
                </div>
                <div className={styles.bulletPoint4}>
                  <img
                    className={styles.bulltetPointPlaceholder4}
                    alt=""
                    src="/bulltet-point-placeholder.svg"
                  />
                  <p className={styles.monthlySeasonTickets4}>
                    The party shall not in turn hire out the bus to others.
                  </p>
                </div>
                <div className={styles.bulletPoint5}>
                  <img
                    className={styles.bulltetPointPlaceholder5}
                    alt=""
                    src="/bulltet-point-placeholder.svg"
                  />
                  <p className={styles.monthlySeasonTickets5}>
                    The KMs operated by the hire bus will be taken into account
                    from the Depot and back to the Depot.
                  </p>
                </div>
                <div className={styles.bulletPoint6}>
                  <img
                    className={styles.bulltetPointPlaceholder6}
                    alt=""
                    src="/bulltet-point-placeholder.svg"
                  />
                  <p className={styles.monthlySeasonTickets6}>
                    The timing shall be reckoned from the time the vehicle goes
                    out of the Depot till it reaches back to the depot.
                  </p>
                </div>
                <div className={styles.bulletPoint7}>
                  <img
                    className={styles.bulltetPointPlaceholder7}
                    alt=""
                    src="/bulltet-point-placeholder.svg"
                  />
                  <p className={styles.monthlySeasonTickets7}>
                    There will be no peak and slack season tariffs
                  </p>
                </div>
                <div className={styles.bulletPoint8}>
                  <img
                    className={styles.bulltetPointPlaceholder8}
                    alt=""
                    src="/bulltet-point-placeholder.svg"
                  />
                  <p className={styles.monthlySeasonTickets8}>
                    A fraction of hour shall be treated as next half hour for
                    the purpose of calculation of time/charges.
                  </p>
                </div>
                <div className={styles.bulletPoint9}>
                  <img
                    className={styles.bulltetPointPlaceholder9}
                    alt=""
                    src="/bulltet-point-placeholder.svg"
                  />
                  <p className={styles.monthlySeasonTickets9}>
                    A concession of 10 % in total hire charges be allowed for
                    the educational tours of the students studying in
                    Government, Government recognised institutions (In this case
                    BOC online booking facility is not available). They have to
                    contact nearest Depot Manager with required certificates for
                    availing the concession.
                  </p>
                </div>
                <div className={styles.bulletPoint10}>
                  <img
                    className={styles.bulltetPointPlaceholder10}
                    alt=""
                    src="/bulltet-point-placeholder.svg"
                  />
                  <p className={styles.monthlySeasonTickets10}>
                    No Reservation Fee will be charged.
                  </p>
                </div>
                <div className={styles.bulletPoint11}>
                  <img
                    className={styles.bulltetPointPlaceholder11}
                    alt=""
                    src="/bulltet-point-placeholder.svg"
                  />
                  <p className={styles.monthlySeasonTickets11}>
                    Postponement of journey is allowed only for one time i.e.,
                    prior intimation of the same one day (i.e., 24 Hrs before
                    Journey time) in advance.
                  </p>
                </div>
                <div className={styles.bulletPoint12}>
                  <img
                    className={styles.bulltetPointPlaceholder12}
                    alt=""
                    src="/bulltet-point-placeholder.svg"
                  />
                  <p className={styles.monthlySeasonTickets12}>
                    The upgradation or down gradation of type of service booked
                    for BoC is allowed only once upon payment of applicable
                    charges.
                  </p>
                </div>
                <div className={styles.bulletPoint13}>
                  <img className={styles.bulltetPointPlaceholder13} alt="" />
                  <div className={styles.monthlySeasonTickets13}>
                    To reach a position of pre-eminence in bus transport
                    business.
                  </div>
                </div>
                <div className={styles.bulletPoint14}>
                  <img className={styles.bulltetPointPlaceholder14} alt="" />
                  <div className={styles.monthlySeasonTickets14}>
                    To reach a position of pre-eminence in bus transport
                    business.
                  </div>
                </div>
                <div className={styles.bulletPoint15}>
                  <img className={styles.bulltetPointPlaceholder15} alt="" />
                  <div className={styles.monthlySeasonTickets15}>
                    To reach a position of pre-eminence in bus transport
                    business.
                  </div>
                </div>
                <div className={styles.bulletPoint16}>
                  <img className={styles.bulltetPointPlaceholder16} alt="" />
                  <div className={styles.monthlySeasonTickets16}>
                    To reach a position of pre-eminence in bus transport
                    business.
                  </div>
                </div>
                <div className={styles.bulletPoint17}>
                  <img className={styles.bulltetPointPlaceholder17} alt="" />
                  <div className={styles.monthlySeasonTickets17}>
                    To reach a position of pre-eminence in bus transport
                    business.
                  </div>
                </div>
                <div className={styles.bulletPoint18}>
                  <img className={styles.bulltetPointPlaceholder18} alt="" />
                  <div className={styles.monthlySeasonTickets18}>
                    To reach a position of pre-eminence in bus transport
                    business.
                  </div>
                </div>
                <div className={styles.bulletPoint19}>
                  <img className={styles.bulltetPointPlaceholder19} alt="" />
                  <div className={styles.monthlySeasonTickets19}>
                    To reach a position of pre-eminence in bus transport
                    business.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className={styles.footer}>
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
        </div>
      </div>
    );
  };

export default ReservationBusOnContractRa;
