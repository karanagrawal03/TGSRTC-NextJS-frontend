import CustomTable from "../custom-table";
import Tables from "../tables";
import styles from "./index.module.css";
interface civilData {
  civilWorksData: any;
  civilWorksText: string;
}
const CivilWorks: React.FC<civilData> = ({
  civilWorksData,
  civilWorksText,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{civilWorksText}</p>
      <CustomTable containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass} rows={civilWorksData} />
    </div>
  );
};
export default CivilWorks;
