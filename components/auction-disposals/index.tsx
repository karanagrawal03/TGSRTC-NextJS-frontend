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
      <Tables
        rows={auctionsData}
        rowClassName={styles.rowClass}
        containerClassName={styles.tableContainer}
      />
    </div>
  );
};
export default AuctionDisposals;
