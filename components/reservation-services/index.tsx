import { NextPage } from "next";
import Tables from "../tables";
import styles from "./index.module.css";

export type ReservationServicesType={
  typesOfServiceTitle:string;
  typesOfServiceContent:string;
  TGSRTCDeliveringExcellenceTableData:any;
}

const ReservationServices:NextPage<ReservationServicesType> = ({typesOfServiceTitle,typesOfServiceContent,TGSRTCDeliveringExcellenceTableData}) => {
  return (
    <div className={styles.frameParent2}>
      <div className={styles.typesOfServicesParent}>
        <h3 className={styles.typesOfServices}>{typesOfServiceTitle}</h3>
        <p className={styles.advanceReservationFacility}>{typesOfServiceContent}</p>

        <Tables
          rows={TGSRTCDeliveringExcellenceTableData}
        />
      </div>
    </div>
  );
};

export default ReservationServices;
