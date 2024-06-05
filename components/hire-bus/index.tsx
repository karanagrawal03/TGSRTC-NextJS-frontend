import CustomTable from "../custom-table";
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
      <CustomTable containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass} rows={hireBusData} />
    </div>
  );
};
export default HireBus;
