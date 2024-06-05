import CustomTable from "../table-view-details";
import Tables from "../tables";
import styles from "./index.module.css";
interface data {
  outSourcingContractText: string;
  outSourcingData: any;
}
const OutSoursingControls: React.FC<data> = ({
  outSourcingContractText,
  outSourcingData,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{outSourcingContractText}</p>
      <CustomTable
        // columnWidths={[
        //   { "S.No": 500 },
        //   { Notification: 800 },
        //   { "Last Date": 100 },
        //   {
        //     Action: 100,
        //   },
        // ]}
        columnWidths={[500, 800, 100, 100]}
        containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass}
        rows={outSourcingData}
      />
    </div>
  );
};
export default OutSoursingControls;
