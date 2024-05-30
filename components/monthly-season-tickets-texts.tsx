import styles from "./monthly-season-tickets-texts.module.css";
import { monthlySeasonTicketsList, valueAdditionList } from "../constants/reservation-concession-schemes";
import { GUIDING_PRINCIPLE, MONTHLY_SEASON_TCIKETS_HEADING, VALUE_ADDITION } from "../constants";


const MonthlySeasonTicketsTexts = ({
  className = "",
}) => {
  return (
    <div className={[styles.monthlySeasonTicketsTexts, className].join(" ")}>
      <h2 className={styles.monthlySeasonTickets}>
        {MONTHLY_SEASON_TCIKETS_HEADING}
      </h2>
      <div className={styles.monthlySeasonTicketsSubCon}>
        <div className={styles.bulletPointContainer}>
          <div className={styles.title}>
            <div className={styles.guidingPrinciplesOf}>
              {GUIDING_PRINCIPLE}
            </div>
          </div>
           <div className={styles.phylosophyList}>
              {monthlySeasonTicketsList.map((item: any, index: any) => (
                <div className={styles.listItem}>
                  <div className={styles.dots}></div>
                  <div key={index} className={styles.listItemContent}>{item}</div>
                </div>
              ))}
            </div>
        </div>
        <div className={styles.valueAdditionGivenToMstHo}>
          <div className={styles.valueAdditionGiven}>
           {VALUE_ADDITION}
          </div>
          <div className={styles.bulletPointContainer1}>
            <div className={styles.title1}>
              <div className={styles.guidingPrinciplesOf1}>
                {GUIDING_PRINCIPLE}
              </div>
            </div>
            <div className={styles.phylosophyList}>
              {valueAdditionList.map((item: any, index: any) => (
                <div className={styles.listItem}>
                  <div className={styles.dots}></div>
                  <div key={index} className={styles.listItemContent}>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlySeasonTicketsTexts;
