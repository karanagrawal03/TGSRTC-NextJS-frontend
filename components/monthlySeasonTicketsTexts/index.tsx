import styles from "./index.module.css";

interface MonthlySeasonTicketsProps {
  monthlySeasonTicketsTitle: string;
  monthlySeasonTicketsList: string[];
  valueAdditionTitle: string;
  valueAdditionList: string[];
}

const MonthlySeasonTicketsTexts = ({monthlySeasonTicketsTitle,monthlySeasonTicketsList,valueAdditionTitle,valueAdditionList}:MonthlySeasonTicketsProps) => {
  return (
    <div className={styles.monthlySeasonTicketsTexts}>
      <div className={styles.monthlySeasonTickets}>
        {monthlySeasonTicketsTitle}
      </div>
      <div className={styles.monthlySeasonTicketsSubCon}>
        <div className={styles.bulletPointContainer}>
         
           <div className={styles.phylosophyList}>
              {monthlySeasonTicketsList?.map((item: any, index: any) => (
                <div className={styles.listItem}>
                  <div className={styles.dots}></div>
                  <div key={index} className={styles.listItemContent}>{item}</div>
                </div>
              ))}
            </div>
        </div>
        <div className={styles.valueAdditionGivenToMstHo}>
          <div className={styles.valueAdditionGiven}>
           {valueAdditionTitle}
          </div>
          <div className={styles.bulletPointContainer1}>
            <div className={styles.phylosophyList}>
              {valueAdditionList?.map((item: any, index: any) => (
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
