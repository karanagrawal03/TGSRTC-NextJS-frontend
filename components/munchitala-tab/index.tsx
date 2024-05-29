import {
  DETAILS_OF_MUNCHINTALA_BUSES,
  MUNCHINTALA_FIRST_PARAGRAPH,
  MUNCHINTALA_SECOND_PARAGRAPH,
} from "../../constants";
import BulletPoints from "../bullet-points";
import Tables from "../tables";
import styles from './index.module.css'
const MunchintalaTab = () => {
  const data = [
    {
      sNo: "#",
      afzalgunjTime: "Afzal Gunj to Muchintala Time",
      munchintalaTime: "Muchintala to Afzal Gunj Time",
    },
    {
      sNo: 1,
      afzalgunjTime: "07:20",
      munchintalaTime: "07:00",
    },
    {
      sNo: 2,
      afzalgunjTime: "08:20",
      munchintalaTime: "08:50",
    },
    {
      sNo: 3,
      afzalgunjTime: "11:10",
      munchintalaTime: "09:50",
    },
    {
      sNo: 4,
      afzalgunjTime: "13:50",
      munchintalaTime: "12:30",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.paragraphTexts}> 
        <p className={styles.paragraph}>{MUNCHINTALA_FIRST_PARAGRAPH}</p>
        <p className={styles.paragraph}>{MUNCHINTALA_SECOND_PARAGRAPH}</p>
      </div>
      <div>
        <p className={styles.tableHeading}>{DETAILS_OF_MUNCHINTALA_BUSES}</p>
        <Tables rows={data} containerClassName={styles.table} />
      </div>
      <BulletPoints items={["ravi","karan"]} />
    </div>
  );
};
export default MunchintalaTab;
