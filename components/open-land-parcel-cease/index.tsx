import Tables from "../tables";
import styles from "./index.module.css";
interface OpenParcelData {
  openLandParcelOnLeaseText: string;
  openLandParcelOnLeaseData: any;
}
const OpenLandParcelCease: React.FC<OpenParcelData> = ({
  openLandParcelOnLeaseData,
  openLandParcelOnLeaseText,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{openLandParcelOnLeaseText}</p>
      <Tables rowClassName={styles.rowClass} rows={openLandParcelOnLeaseData} containerClassName={styles.tableContainer}/>
    </div>
  );
};
export default OpenLandParcelCease;
