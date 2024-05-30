import type { NextPage } from "next";
import Header1 from "../components/header";
import ReservationHeroLanding from "../components/reservation-hero-landing";
import BookYourTicket from "../components/book-your-ticket";
import ReservationKPIs from "../components/reservation-k-p-is";
import Coulmn from "../components/coulmn";
import styles from "./reservation-booking-service-ho.module.css";
import Carousel from "../components/carousel/carousel";
import SpecialBusesOffersCard from "../components/specialBusesOffersCard/SpecialBusesOffersCard";
import Tables from "../components/tables";
import BulletPoints from "../components/bullet-points";
export interface ISpecialBusesOffers {
  image: string;
  from: string;
  to: string;
  title: string;
  list: Array<{ title: string }>;
}
const ReservationBookingServiceHo: NextPageReservationBookingServiceHoType =
  () => {
    const specialBuses: ISpecialBusesOffers[] = [
      {
        image: "/pictures@2x.png",
        from: "Hyderabad",
        to: "Badrachalam",
        title: "Special Buses for Rama Navami Festival",
        list: [
          { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
          { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
          { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
          { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
          { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
        ],
      },
      {
        image: "/pictures@2x.png",
        from: "Badrachalam",
        to: "Hyderabad",
        title: "Special Buses for Rama Navami Festival",
        list: [
          { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
          { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
          { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
          { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
          { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
        ],
      },
      {
        image: "/pictures@2x.png",
        from: "Hyderabad",
        to: "Yadadri",
        title: "Special Buses for Rama Navami Festival",
        list: [
          { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
          { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
          { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
          { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
          { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
        ],
      },
      {
        image: "/pictures@2x.png",
        from: "Yadadri",
        to: "Hyderabad",
        title: "Special Buses for Rama Navami Festival",
        list: [
          { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
          { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
          { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
          { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
          { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
        ],
      },
    ];
    const typesOfServices = [
      {
        column1: "#",
        column2: "Type of bus",
        column3: "Number of services",
      },
      {
        column1: "1",
        column2: "Garuda Plus (AC Semi-Sleeper Multi Axle)",
        column3: "101",
      },
      {
        column1: "2",
        column2: "Rajdhani (2 + 2 AC Semi-Sleeper)",
        column3: "290",
      },
      {
        column1: "3",
        column2: "Type of bus",
        column3: "Number of services",
      },
      {
        column1: "4",
        column2: "Type of bus",
        column3: "Number of services",
      },
      {
        column1: "5",
        column2: "Type of bus",
        column3: "Number of services",
      },
    ];
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
    const connectivityList = [
      "Andhra Pradesh (Visakhapatnam, Vijayawada, Kakinada, Rajahmundry, Guntur, Eluru, Ongole, Nellore, Chittoor, Tirupathi, Anantapur, Kadapa, Kurnool etc.)",
      "Telangana (Hyderabad, Sangareddy, Mahabubnagar, Nalgonda, Miryalaguda, Warangal, Karimnagar, Nizamabad, Bodhan, Adilabad, Nirmal, Khammam, Bhadrachalam etc.) and",
      "Surrounding States (Mumbai, Pune, Shirdi, Nagpur, Bengaluru, Chennai etc.)",
    ];
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
          <h1 className={styles.tgsrtcOnlineBusContainer}>
            <p className={styles.tgsrtcOnlineBus}>TGSRTC Online Bus ticket</p>
            <p className={styles.bookingService}>Booking Service</p>
            <div className={styles.applyRenew}>
              Apply, Renew & Travel effortlessly with TGSRTC
            </div>
          </h1>
          <h2 className={styles.bookYourTickets}>
            Book your tickets hassle free !
          </h2>
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
        {/* <section className={styles.customerSupportImageWrapper}> */}
          {/* <div className={styles.customerSupportImage}>
            <img
              className={styles.charanjeetDhimanMhusybu4bxmIcon}
              alt=""
              src="/charanjeetdhimanmhusybu4bxmunsplash-1-1@2x.png"
            />
            <div className={styles.customerSupportTexts}>
              <div className={styles.texts}>
                <h1 className={styles.customerSupport}>
                  24/7 Customer Support
                </h1>
                <h2 className={styles.needHelpWith}>
                  Need help with e-Ticketing Refund related queries?
                </h2>
              </div>
              <div className={styles.emailPhone}>
                <div className={styles.email}>
                  <img className={styles.icons2} alt="" src="/icons-12.svg" />
                  <h2 className={styles.onlinesupporttgsrtcbusin}>
                    online.support@TGSRTCbus.in
                  </h2>
                </div>
                <div className={styles.phone}>
                  <img className={styles.icons3} alt="" src="/icons-13.svg" />
                  <div className={styles.div}>040 69440000 / 040 23450033</div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className={styles.csImgWrapper}>
            <img src={"/customerSupportImage.svg"} className={styles.csImg} />
            <div className={styles.customerSupportTexts}>
              <div className={styles.texts}>
                <h1 className={styles.customerSupport}>
                  24/7 Customer Support
                </h1>
                <h2 className={styles.needHelpWith}>
                  Need help with e-Ticketing Refund related queries?
                </h2>
              </div>
              <div className={styles.emailPhone}>
                <div className={styles.email}>
                  <img className={styles.icons2} alt="" src="/icons-12.svg" />
                  <h2 className={styles.onlinesupporttgsrtcbusin}>
                    online.support@TGSRTCbus.in
                  </h2>
                </div>
                <div className={styles.phone}>
                  <img className={styles.icons3} alt="" src="/icons-13.svg" />
                  <div className={styles.div}>040 69440000 / 040 23450033</div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <div className={`${styles.csImgContainer}`}>
            <img src={"/customerSupportImage.svg"} className={styles.cSImg} />
            <img src={"/customerSupportImageMobile.png"} className={styles.cSImgMobile} />
            <div className={styles.customerSupportTexts}>
              <div className={styles.texts}>
                <h1 className={styles.customerSupport}>
                  24/7 Customer Support
                </h1>
                <div className={styles.needHelpWith}>
                  Need help with e-Ticketing Refund related queries?
                </div>
              </div>
              <div className={styles.emailPhone}>
                <div className={styles.email}>
                  <img className={styles.icons2} alt="" src="/icons-12.svg" />
                  <h2 className={styles.onlinesupporttgsrtcbusin}>
                    online.support@TGSRTCbus.in
                  </h2>
                </div>
                <div className={styles.phone}>
                  <img className={styles.icons3} alt="" src="/icons-13.svg" />
                  <div className={styles.div}>040 69440000 / 040 23450033</div>
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
                      <h1 className={styles.tgsrtc}>TGSRTC</h1>
                    </div>
                    <h1 className={styles.settingStandardsDelivering}>
                      Setting Standards, Delivering Excellence
                    </h1>
                  </div>
                </div>
                <p className={styles.tgsrtcIsCommittedTo}>
                  TGSRTC is committed to provide consistently high quality of
                  services and to continuously improve the services through a
                  process of teamwork for the utmost satisfaction of the
                  passengers and to attain a position of pre-eminence in the Bus
                  Transport sector.
                </p>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.typesOfServicesParent}>
                <h3 className={styles.typesOfServices}>Types of Services</h3>
                <p className={styles.advanceReservationFacility}>
                  Advance reservation facility is provided through Online
                  Passenger Reservation System (OPRS) for the different types of
                  services mentioned hereunder:
                </p>

                <Tables
                  rows={typesOfServices}
                  containerClassName={styles.tableStyles}
                  customHeaderCellStyles={customHeaderStyles}
                  customRowCellStyles={customRowCellStyles}
                  customWidths={customWidths}
                />
              </div>
            </div>
            <div className={styles.bulletPointContainer1}>
              <div className={styles.title2}>
                <h2 className={styles.guidingPrinciplesOf1}>Connectivity</h2>
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
        {/* <img className={styles.busDust1} alt="" src="/bus--dust-1@2x.png" /> */}
      </div>
    );
  };

export default ReservationBookingServiceHo;
