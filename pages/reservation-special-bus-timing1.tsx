import type { NextPage } from "next";
import Header2 from "../components/header2";
import TableTitle1 from "../components/table-title1";
import TableTitle from "../components/table-title";
import FrameComponent from "../components/frame-component";
import Footer1 from "../components/footer1";
import styles from "./reservation-special-bus-timing1.module.css";

const ReservationSpecialBusTiming1: NextPageReservationSpecialBusTiming1Type =
  () => {
    return (
      <div className={styles.reservationSpecialBusTiming}>
        <Header2
          tSRTCLogo="/tsrtc-logo@2x.png"
          prop="/---3.svg"
          tELANGANASTATEROADTRANSPO="/telangana-state-road-transport-corporation3.svg"
          tSRTCLogoIconPadding="0px 0px 0px 0px"
          iconPadding="0px 0px var(--padding-12xs-9)"
          reservationsPadding="var(--padding-6xs) 0px"
          reservationsPadding1="var(--padding-6xs) 0px var(--padding-11xs)"
          reservationsPadding2="var(--padding-6xs) 0px"
          reservationsPadding3="var(--padding-6xs) 0px"
          reservationsPadding4="var(--padding-6xs) 0px"
          reservationsPadding5="var(--padding-6xs) 0px"
          reservationsPadding6="var(--padding-6xs) 0px"
          reservationsPadding7="var(--padding-6xs) 0px"
        />
        <img
          className={styles.reservationHeroSpeacialBus}
          alt=""
          src="/reservation-hero-speacial-bus-timings@2x.png"
        />
        <section className={styles.reservationAirportPushpak}>
          <div className={styles.tabsAboutMuchintala}>
            <div className={styles.tabs}>
              <h2 className={styles.whichBusTimings}>
                Which bus timings do you want to view?
              </h2>
              <div className={styles.topTabs}>
                <div className={styles.tabs1}>
                  <div className={styles.text}>Muchintala</div>
                </div>
                <div className={styles.tabs2}>
                  <b className={styles.text1}>Airport Pushpak</b>
                </div>
                <div className={styles.tabs3}>
                  <div className={styles.text2}>Hyderabad to Yadagirigutta</div>
                </div>
                <div className={styles.tabs4}>
                  <div className={styles.text3}>Yadagirigutta to Hyderabad</div>
                </div>
              </div>
            </div>
            <div className={styles.pushpakIsAContainer}>
              <p className={styles.pushpakIsA}>
                Pushpak is a special AC service provided by TSRTC. Until now it
                is known as a special service only to the airport, but Pushpak
                airport liner buses are not exclusive buses to the airport -
                they pick up and drop commuters at many locations in the city.
                If you search for ‘Pushpak airport liner near me’ in a search
                engine, you may find a few stops near you where you can board
                Pushpak buses and get down at any Pushpak bus stop or even go to
                the airport. Because it goes till the airport it is called the
                airport bus shuttle. So, if you search ‘airport bus stop near
                me’, you will get the details of Pushpak bus stops near your
                location.
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.pushpakBusTimings}>
                Pushpak bus timings are very convenient as it is a
                round-the-clock-service. If you cannot find the schedule or the
                details online, you can dial the Pushpak airport bus contact
                number and seek information regarding Pushpak bus booking and
                timings. You can avail the tickets directly in the bus. Pushpak
                is the only AC service in Hyderabad and it is safe, secure and
                fast. Pushpak not only goes to the airport, but to many other
                destinations in Hyderabad.
              </p>
            </div>
          </div>
          <form className={styles.tableTitleParent}>
            <TableTitle1 />
            <TableTitle />
          </form>
          <FrameComponent />
        </section>
        <Footer1 />
      </div>
    );
  };

export default ReservationSpecialBusTiming1;
