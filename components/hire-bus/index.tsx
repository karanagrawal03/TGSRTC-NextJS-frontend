import Tables from "../tables";
import styles from "./index.module.css";
interface hireABusData {
  hireBusText: string;
  hireBusData: any;
}
const HireBus: React.FC<hireABusData> = ({ hireBusText, hireBusData }) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{hireBusText}</p>
      <Tables rowClassName={styles.rowClass} rows={hireBusData} containerClassName={styles.tableContainer}/>
    </div>
  );
};
export default HireBus;
