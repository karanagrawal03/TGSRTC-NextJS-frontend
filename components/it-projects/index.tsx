import CustomTable from "../custom-table";
import Tables from "../tables";
import styles from "./index.module.css";
interface ITProductsData {
  ITProductsData: any;
  ITProductsText: string;
}
const ITPrjects: React.FC<ITProductsData> = ({
  ITProductsText,
  ITProductsData,
}) => {

  return (
    <div className={styles.container}>
      <p className={styles.headingText}>{ITProductsText}</p>
      <CustomTable containerClassName={styles.tableContainer}
        rowsClassName={styles.rowClass} rows={ITProductsData} />
    </div>
  );
};
export default ITPrjects;
