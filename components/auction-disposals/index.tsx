import CustomTable from "../table-view-details";
import Tables from "../tables";
import styles from "./index.module.css";
interface AuctionDisposalData {
  auctionsData: any;
  auctionsText: String;
}
const AuctionDisposals: React.FC<AuctionDisposalData> = ({
  auctionsData,
  auctionsText,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{auctionsText}</p>
      <CustomTable
        containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass}
        rows={auctionsData}
      />
    </div>
  );
};
export default AuctionDisposals;
