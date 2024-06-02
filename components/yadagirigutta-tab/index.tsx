import { DETAILS_OF_HYDERABAD_BUSES } from "../../constants";
import { yadagiriguttaTableData } from "../../constants/YadagiriguttaTableData";
import Tables from "../tables";
import styles from "./index.module.css";

interface HyderabadData {
  hyderabadTableHeading: string;
  hyderabadData:any;
}
const YadagiriguttaTab: React.FC<HyderabadData> = ({
  hyderabadTableHeading,
  hyderabadData
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.tableHeading}>{hyderabadTableHeading}</p>
      <div style={{ width: "100%" }}>
        <Tables
          rows={hyderabadData}
          containerClassName={styles.table}
        />
      </div>
    </div>
  );
};
export default YadagiriguttaTab;
