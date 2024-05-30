import Footer from "../../components/footer";
import styles from "./index.module.css";
import Header from "../../components/header";
import Tables from "../../components/tables";
import { columnWidths, reservationPointsList } from "../../constants/reservation-points";
import { APPLY_AND_RENEW, DETAILS_RESERVATION_POINTS, RESERVATION_POINTS1 } from "../../constants";

const ReservationPoints: any = () => {

  return (
    <div className={styles.reservationPointsPage}>
      <Header />
      <section className={styles.reservationHeroConcessionContainer}>
        <img className={styles.reservationConcessionSchemesHeroImage} alt="" src="/reservation-points-hero-website.png" />
        <img className={styles.reservationConcessionSchemesHeroImageMobile} alt="" src="/reservation-points-hero-mobile.png" />
        <div className={styles.reservationConcessionSchemesHeroHeading}>
          <div className={styles.reservationPoints}>{RESERVATION_POINTS1}</div>
          <div className={styles.applyRenewText}>{APPLY_AND_RENEW}</div>
        </div>
      </section>
      <section className={styles.reservationDetailsOfReservaParent}>
     <img className={styles.busDustMobile} alt="bus" src="/bus-image-mobile.png" loading="lazy" />
        <img className={styles.busDustWebsite} alt="bus" src="/reservation-points-bus-website.png" loading="lazy" /> 
        <div className={styles.reservationDetailsOfReserva}>
          <div className={styles.tableTitle}>
            <h2 className={styles.title}>{DETAILS_RESERVATION_POINTS}</h2>
            <div className={styles.table}>
            <Tables rows={reservationPointsList} containerClassName={styles.tableContainer} columnWidths={columnWidths} tableHeadCellStyles={styles.tableHeadCell} tableCellStyles={styles.tableCell}/>

            </div>
          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
};

export default ReservationPoints;
