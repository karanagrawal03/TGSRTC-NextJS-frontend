import type { NextPage } from "next";
import styles from "./index.module.css";
import Tables from "../tables";
import BulletPoints from "../bullet-points";
import CommonLabel from "../label";
import { LABEL2 } from "../../constants";
import { TABLE4 as Jsondata, RATES_BULLET_POINTS1 as arr} from "../../constants/contract-rates";

export type ContractRatesTable4Type = {
  className?: string;
};

const ContractRatesTable4: NextPage<ContractRatesTable4Type> = ({ className = "" }) => {
  return (
    <div className={[styles.itemCellParent, className].join(" ")}>
      <CommonLabel text={LABEL2} />
      <div className={styles.tableTitle}>
        <Tables rows={Jsondata} containerClassName={styles.ratesTable4}/>
      </div>
      <div className={styles.bulletPointContainer}>
        <BulletPoints items={arr} containerClassName={styles.bulletPoints}/>
      </div>
    </div>
  );
};

export default ContractRatesTable4;
