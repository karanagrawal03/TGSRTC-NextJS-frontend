import CustomTable from "../custom-table";
import Tables from "../tables";
import styles from "./index.module.css";
interface ProcrumentAndSuppliesData {
  procruementAndSuppliesData: any;
  procruementAndSuppliesText: string;
}
const ProcrumentAndSupplies: React.FC<ProcrumentAndSuppliesData> = ({
  procruementAndSuppliesData,
  procruementAndSuppliesText,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{procruementAndSuppliesText}</p>
      <CustomTable
        containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass}
        rows={procruementAndSuppliesData}
      />
    </div>
  );
};
export default ProcrumentAndSupplies;
