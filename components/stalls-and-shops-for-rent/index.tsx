import CustomTable from "../table-view-details";
import Tables from "../tables";
import styles from "./index.module.css";
interface StallsData {
  stallsAndShopsText: string;
  stallsAndShopsData: any;
}
const StallsAndShops: React.FC<StallsData> = ({
  stallsAndShopsText,
  stallsAndShopsData,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{stallsAndShopsText}</p>
      <CustomTable
        containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass}
        rows={stallsAndShopsData}
      />
    </div>
  );
};
export default StallsAndShops;
