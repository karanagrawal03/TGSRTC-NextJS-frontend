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
      <Tables rowClassName={styles.rowClass} rows={stallsAndShopsData} containerClassName={styles.tableContainer} />
    </div>
  );
};
export default StallsAndShops;
