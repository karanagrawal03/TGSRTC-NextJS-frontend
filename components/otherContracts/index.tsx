import CustomTable from "../custom-table";
import Tables from "../tables";
import styles from "./index.module.css";
interface otherContracts {
  otherContractsText: string;
  otherContractsData: any;
}
const OtherContracts: React.FC<otherContracts> = ({
  otherContractsText,
  otherContractsData,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{otherContractsText}</p>
      <CustomTable containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass} rows={otherContractsData} />
    </div>
  );
};
export default OtherContracts;
