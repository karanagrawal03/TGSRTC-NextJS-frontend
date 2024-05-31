import {
    DETAILS_OF_HYDERABAD_BUSES,
  DETAILS_OF_MUNCHINTALA_BUSES,
  HYDERABAD_FIRST_PARAGRAPH,
  HYDERABAD_SECOND_PARAGRAPH,
  HYDERABAD_THIRD_PARAGRAPH,
  MUNCHINTALA_FIRST_PARAGRAPH,
  MUNCHINTALA_SECOND_PARAGRAPH,
} from "../../constants";
import { hyderabadTableData } from "../../constants/HyderabadTableData";
import Tables from "../tables";
import styles from "./index.module.css";
const HyderabadTab = () => {
  return (
    <div className={styles.container}>
      <div className={styles.paragraphTexts}>
        <p className={styles.paragraph}>{HYDERABAD_FIRST_PARAGRAPH}</p>
        <p className={styles.paragraph}>{HYDERABAD_SECOND_PARAGRAPH}</p>
        <p className={styles.paragraph}>{HYDERABAD_THIRD_PARAGRAPH}</p>
      </div>
      <div>
        <p className={styles.tableHeading}>{DETAILS_OF_HYDERABAD_BUSES}</p>
        <Tables rows={hyderabadTableData} containerClassName={styles.table} />
      </div>
    </div>
  );
};
export default HyderabadTab;
