import type { NextPage } from "next";
import Header1 from "../../components/header";
import BookYourTicket from "../../components/BookYourTicket/BookYourTicket";
import ReservationKPIs from "../../components/reservation-k-p-is";
import styles from "./index.module.css";
import Carousel from "../../components/carousel";
import SpecialBusesOffersCard from "../../components/specialBusesOffersCard";
import Tables from "../../components/tables";
import { ADVANCE_FACILITY, COMMITTED_TO, CONNECTIVITY, ISpecialBusesOffers, MAIL_SUPPORT, NEED_HELP, SETTING, SUPPORT, SUPPORT_PHN0, TGSRTC, TITLE1, TITLE2, TITLE3, TITLE4, TYPES_OF_SERVICE, connectivityList, specialBuses, typesOfServices } from "../../constants/reservation-booking-service-ho";
import HomeBookYourServices from "../../components/home-book-your-services";
import { HYDERABAD, BANGALORE, CHENNAI, VIJAYAWADA, SRISAILAM, TIRUPATI } from "../../constants";

const routes = [
  { from: HYDERABAD, to: BANGALORE },
  { from: HYDERABAD, to: CHENNAI },
  { from: HYDERABAD, to: VIJAYAWADA },
  { from: HYDERABAD, to: SRISAILAM },
  { from: HYDERABAD, to: TIRUPATI },
];

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
        <section className={styles.reservationHeroLanding}>
          <img
            className={styles.maskGroupIcon}
            alt="bus mobile reservations image"
            src="/busMobileReservation.png"
            loading="lazy"
          />
          <img
            className={styles.maskGroupIconMobile}
            alt="bus mobile image"
            src="/bus-mobile.png"
            loading="lazy"
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
        <BookYourTicket routes={routes} />
        <ReservationKPIs />
        <section className={styles.busDustParent}>
          <img className={styles.busDust} alt="bus image" src="/bus--dust7.svg" loading="lazy"/>
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
            <img src={"/customerSupport1.png"} className={styles.cSImg} alt="customer suppport image" loading="lazy"/>
            <img src={"/customerSupportImageMobile.png"} className={styles.cSImgMobile} alt="customer suppport mobile image" loading="lazy"/>
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
                  <img className={styles.icons2} alt="icons image" src="/icons-12.svg" loading="lazy"/>
                  <h2 className={styles.onlinesupporttgsrtcbusin}>
                    {MAIL_SUPPORT}
                  </h2>
                </div>
                <div className={styles.phone}>
                  <img className={styles.icons3} alt="icons" src="/icons-13.svg" loading="lazy"/>
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
      </div>
    );
  };

export default ReservationBookingServiceHo;
