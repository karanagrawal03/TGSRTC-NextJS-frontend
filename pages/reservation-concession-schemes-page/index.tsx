import MonthlySeasonTicketsTexts from "../../components/monthly-season-tickets-texts";
import styles from "./index.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Tables from "../../components/tables/index";
import { APPLY_AND_RENEW, CONCESSION_SCHEMES, FACILITY, T20_TICKET, TARIFFS, TO_ATTRACT_MORE, TRAVEL, TRAVEL_24HOURS } from "../../constants";
import { columnWidths, monthlySeasonTicketsTable } from "../../constants/reservation-concession-schemes";

const ReservationConcessionSchemes: any =
  () => {
  
    return (
      <div className={styles.reservationConcessionSchemes}>
        <Header />
          <section className={styles.reservationConcessionSchemesHeroContainer}>
            <img className={styles.reservationConcessionHeroImage} alt="" src="/reservation-concession-schemes-hero-website.png"/>
            <img className={styles.reservationConcessionHeroImageMobile} alt="" src="/reservation-concession-schemes-hero-mobile.png" />
            <div className={styles.concessionSchemesTitle}>
                <div className={styles.title}>{CONCESSION_SCHEMES}</div>
                <div className={styles.applyRenew}
                >{APPLY_AND_RENEW}</div>
              </div>
          </section>
        <section className={styles.reservationConcessionSchemes1}>
          <img className={styles.busDustMobile} alt="reservation-concession-bus-image" src="/bus-image-mobile.png" loading="lazy" />
          <img className={styles.busDustWebsite} alt="reservation-concession-bus-image" src="/reservation-concession-bus-website.png" loading="lazy" />
          <MonthlySeasonTicketsTexts />
          <div className={styles.teriffsOfMonthlySeasonTickets}>
            <div className={styles.monthlySeasonTicketstableTitle}>{TARIFFS}</div>
            <Tables rows={monthlySeasonTicketsTable} containerClassName={styles.tableContainer} columnWidths={columnWidths} tableHeadCellStyles={styles.tableHeadCell} tableCellStyles={styles.tableCell} />
          </div>
          <div className={styles.frameParent}>
            <div className={styles.travel24t24TicketsParent}>
              <b className={styles.travel24t24Tickets}>
                {TRAVEL}
              </b>
              <p className={styles.travel24t24TicketsWereContainer}>
                <span className={styles.travel24t24TicketsWere}>
                  {TRAVEL_24HOURS}
                </span>
                <span className={styles.blankLine}>&nbsp;</span>
                <span className={styles.t24TicketCan}>
                  {T20_TICKET}
                </span>
              </p>
            </div>
            <div className={styles.facilityForLongDistancePasParent}>
              <h2 className={styles.facilityForLong}>
                {FACILITY}
              </h2>
              <p className={styles.toAttractMore}>
                {TO_ATTRACT_MORE}
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  };

export default ReservationConcessionSchemes;
