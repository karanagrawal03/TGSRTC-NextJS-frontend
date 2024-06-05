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
      <Tables rowClassName={styles.rowClass} rows={electricBusesData} containerClassName={styles.tableContainer}/>
    </div>
  );
};
export default ElectricBuses;
