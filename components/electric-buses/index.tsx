import CustomTable from "../table-view-details";
import Tables from "../tables";
import styles from "./index.module.css";
interface electricData {
  electricBusesData: any;
  electricBusesText: string;
}
const ElectricBuses: React.FC<electricData> = ({
  electricBusesData,
  electricBusesText,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{electricBusesText}</p>
      <CustomTable
        containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass}
        rows={electricBusesData}
      />
    </div>
  );
};
export default ElectricBuses;
