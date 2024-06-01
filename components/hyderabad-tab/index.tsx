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
interface yadagiriguttaData {
  yadagiriguttaFirstParagraph: string;
  yadagiriguttaSecondParagraph: string;
  yadagiriguttaThirdParagraph: string;
  yadagiriguttaTableHeading:string;
  yadagiriguttaData:any
}
const HyderabadTab: React.FC<yadagiriguttaData> = ({
  yadagiriguttaFirstParagraph,
  yadagiriguttaSecondParagraph,
  yadagiriguttaThirdParagraph,
  yadagiriguttaTableHeading,
  yadagiriguttaData
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.paragraphTexts}>
        <p className={styles.paragraph}>{yadagiriguttaFirstParagraph}</p>
        <p className={styles.paragraph}>{yadagiriguttaSecondParagraph}</p>
        <p className={styles.paragraph}>{yadagiriguttaThirdParagraph}</p>
      </div>
      <div>
        <p className={styles.tableHeading}>{yadagiriguttaTableHeading}</p>
        <Tables rows={yadagiriguttaData} containerClassName={styles.table} />
      </div>
    </div>
  );
};
export default HyderabadTab;
