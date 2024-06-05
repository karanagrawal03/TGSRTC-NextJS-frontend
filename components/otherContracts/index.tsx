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
      <Tables
        rows={otherContractsData}
        rowClassName={styles.rowClass}
        containerClassName={styles.tableContainer}
      />
    </div>
  );
};
export default OtherContracts;
