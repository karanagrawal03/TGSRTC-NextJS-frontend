import type { NextPage } from "next";
import styles from "./index.module.css";
import Tables from "../tables";
import BulletPoints from "../bullet-points";
import CommonLabel from "../label";

export type ContractRatesTable4Type = {
  data :any;
  className?: string;
};

const ContractRatesTable4: NextPage<ContractRatesTable4Type> = ({ data, className = "" }) => {
  return (
    <div className={[styles.itemCellParent, className].join(" ")}>
      <CommonLabel text={data?.cityServicesLabel} />
      <div className={styles.tableTitle}>
        <Tables rows={data?.cityServices2} containerClassName={styles.ratesTable4}/>
      </div>
      <div className={styles.bulletPointContainer}>
        <BulletPoints items={data?.cityServicesInstructions} containerClassName={styles.bulletPoints}/>
      </div>
    </div>
  );
};

export default ContractRatesTable4;