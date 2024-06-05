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
      <Tables rowClassName={styles.rowClass} rows={outSourcingData} containerClassName={styles.tableContainer} />
    </div>
  );
};
export default OutSoursingControls;
