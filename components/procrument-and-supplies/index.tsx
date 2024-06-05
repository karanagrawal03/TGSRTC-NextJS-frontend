import Tables from "../tables";
import styles from "./index.module.css";
interface ProcrumentAndSuppliesData {
  procruementAndSuppliesData: any;
  procruementAndSuppliesText: string;
}
const ProcrumentAndSupplies:React.FC<ProcrumentAndSuppliesData> = ({
  procruementAndSuppliesData,
  procruementAndSuppliesText,
}) => {

  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{procruementAndSuppliesText}</p>
      <Tables rowClassName={styles.rowClass} rows={procruementAndSuppliesData} containerClassName={styles.tableContainer}/>
    </div>
  );
};
export default ProcrumentAndSupplies;
