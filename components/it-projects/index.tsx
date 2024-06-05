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
      <Tables rowClassName={styles.rowClass} rows={ITProductsData} containerClassName={styles.tableContainer}/>
    </div>
  );
};
export default ITPrjects;
