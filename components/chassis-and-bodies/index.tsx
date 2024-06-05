import CustomTable from "../custom-table";
import Tables from "../tables";
import styles from "./index.module.css";
interface chassisData {
  chassisBodiesText: string;
  chassisBodiesData: any;
}
const ChassisAndBodies: React.FC<chassisData> = ({
  chassisBodiesData,
  chassisBodiesText,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{chassisBodiesText}</p>
      <CustomTable
        containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass}
        rows={chassisBodiesData}
      />
    </div>
  );
};
export default ChassisAndBodies;
