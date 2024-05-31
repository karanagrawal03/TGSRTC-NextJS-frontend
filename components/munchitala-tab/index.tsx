import {
  DETAILS_OF_MUNCHINTALA_BUSES,
  MUNCHINTALA_FIRST_PARAGRAPH,
  MUNCHINTALA_SECOND_PARAGRAPH,
} from "../../constants";
import { munchintalaTableData } from "../../constants/munchintalaTableData";
import Tables from "../tables";
import styles from "./index.module.css";

const MunchintalaTab = () => {
  return (
    <div className={styles.container}>
      <div className={styles.paragraphTexts}>
        <p className={styles.paragraph}>{MUNCHINTALA_FIRST_PARAGRAPH}</p>
        <p className={styles.paragraph}>{MUNCHINTALA_SECOND_PARAGRAPH}</p>
      </div>
      <div className={styles.lowerContainer}>
        <p className={styles.tableHeading}>{DETAILS_OF_MUNCHINTALA_BUSES}</p>
        <Tables rows={munchintalaTableData} containerClassName={styles.table} />
      </div>
    </div>
  );
};
export default MunchintalaTab;
