import CustomTable from "../custom-table";
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
      <CustomTable containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass} rows={outSourcingData} />
    </div>
  );
};
export default OutSoursingControls;
