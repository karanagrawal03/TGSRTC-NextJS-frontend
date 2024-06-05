import CustomTable from "../table-view-details";
import Tables from "../tables";
import styles from "./index.module.css";
interface AdvertisementsData {
  advertisementsAndFuelsText: string;
  advertisementsAndFuelsData: any;
}
const Adversiments: React.FC<AdvertisementsData> = ({
  advertisementsAndFuelsData,
  advertisementsAndFuelsText,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{advertisementsAndFuelsText}</p>
      <CustomTable
        containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass}
        rows={advertisementsAndFuelsData}
      />
    </div>
  );
};
export default Adversiments;
