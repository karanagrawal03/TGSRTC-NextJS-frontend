import styles from "./index.module.css";
import { monthlySeasonTicketsList, valueAdditionList } from "../../constants/reservation-concession-schemes";
import { MONTHLY_SEASON_TCIKETS_HEADING, VALUE_ADDITION } from "../../constants";


const MonthlySeasonTicketsTexts = () => {
  return (
    <div className={styles.monthlySeasonTicketsTexts}>
      <div className={styles.monthlySeasonTickets}>
        {MONTHLY_SEASON_TCIKETS_HEADING}
      </div>
      <div className={styles.monthlySeasonTicketsSubCon}>
        <div className={styles.bulletPointContainer}>
         
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
