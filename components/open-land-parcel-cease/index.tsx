import CustomTable from "../table-view-details";
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
      <CustomTable
        containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass}
        rows={openLandParcelOnLeaseData}
      />
    </div>
  );
};
export default OpenLandParcelCease;
