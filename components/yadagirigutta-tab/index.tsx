import {
  DETAILS_OF_HYDERABAD_BUSES
} from "../../constants";
import { yadagiriguttaTableData } from "../../constants/YadagiriguttaTableData";
import Tables from "../tables";
import styles from "./index.module.css";

const YadagiriguttaTab = () => {
  return (
    <div className={styles.container}>
      <p className={styles.tableHeading}>{DETAILS_OF_HYDERABAD_BUSES}</p>
      <div style={{ width: "100%" }}>
        <Tables
          rows={yadagiriguttaTableData}
          containerClassName={styles.table}
        />
      </div>
    </div>
  );
};
export default YadagiriguttaTab;
