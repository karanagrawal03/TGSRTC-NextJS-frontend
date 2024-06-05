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
      <Tables rowClassName={styles.rowClass} rows={civilWorksData} containerClassName={styles.tableContainer}/>
    </div>
  );
};
export default CivilWorks;
