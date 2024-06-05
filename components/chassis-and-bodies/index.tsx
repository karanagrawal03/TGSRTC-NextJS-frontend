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
  console.log(chassisBodiesText);
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{chassisBodiesText}</p>
      <Tables rowClassName={styles.rowClass} rows={chassisBodiesData} containerClassName={styles.tableContainer} />
    </div>
  );
};
export default ChassisAndBodies;
