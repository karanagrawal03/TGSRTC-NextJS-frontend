import {
    DETAILS_OF_HYDERABAD_BUSES,
  DETAILS_OF_MUNCHINTALA_BUSES,
  HYDERABAD_FIRST_PARAGRAPH,
  HYDERABAD_SECOND_PARAGRAPH,
  HYDERABAD_THIRD_PARAGRAPH,
  MUNCHINTALA_FIRST_PARAGRAPH,
  MUNCHINTALA_SECOND_PARAGRAPH,
} from "../../constants";
import Tables from "../tables";
import styles from "./index.module.css";
const HyderabadTab = () => {
  const data = [
    {
      sNo: "#",
      serviceType:"Service Type",
      fromStage: "Hyderabad",
      fromTime:"From Time",
      toStage: "Yadagirigutta",
      toTime:"To Time"
    },
    {
      sNo: 1,
      serviceType:"Pallevelugu",
      fromStage:"Hyderabad",
      fromTime: "07:20",
      toStage:"Yadagirigutta",
      toTime: "07:00",
    },
    {
      sNo: 2,
      serviceType:"Pallevelugu",
      fromStage:"Hyderabad",
      fromTime: "07:20",
      toStage:"Yadagirigutta",
      toTime: "07:00",
    },
    {
      sNo: 3,
      serviceType:"Pallevelugu",
      fromStage:"Hyderabad",
      fromTime: "07:20",
      toStage:"Yadagirigutta",
      toTime: "07:00",
    },
    {
      sNo: 4,
      serviceType:"Pallevelugu",
      fromStage:"Hyderabad",
      fromTime: "07:20",
      toStage:"Yadagirigutta",
      toTime: "07:00",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.paragraphTexts}>
        <p className={styles.paragraph}>{HYDERABAD_FIRST_PARAGRAPH}</p>
        <p className={styles.paragraph}>{HYDERABAD_SECOND_PARAGRAPH}</p>
        <p className={styles.paragraph}>{HYDERABAD_THIRD_PARAGRAPH}</p>
      </div>
      <div>
        <p className={styles.tableHeading}>{DETAILS_OF_HYDERABAD_BUSES}</p>
        <Tables rows={data} containerClassName={styles.table} />
      </div>
    </div>
  );
};
export default HyderabadTab;
