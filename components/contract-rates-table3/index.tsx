import type { NextPage } from "next";
import styles from "./index.module.css";
import Tables from "../tables";
import { RATES_TABLE3_TITLE } from "../../constants";
import { TABLE3 as Jsondata} from "../../constants/contract-rates";

export type ContractRatesTable3Type = {
  className?: string;
};

const ContractRatesTable3: NextPage<ContractRatesTable3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.tableTitle, className].join(" ")}>
      <h2 className={styles.title}>
        {RATES_TABLE3_TITLE} 
      </h2>
      <Tables rows={Jsondata} containerClassName={styles.ratesTable3} />
    </div>
  );
};

export default ContractRatesTable3;
