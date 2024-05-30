import type { NextPage } from "next";
import styles from "./index.module.css";
import Tables from "../tables";
import { RATES_TABLE1_TITLE } from "../../constants";
import { TABLE1 as jsonData} from "../../constants/contract-rates";

export type ContractRatesTable1Type = {
  className?: string;
};

const ContractRatesTable1: NextPage<ContractRatesTable1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.tableTitle, className].join(" ")}>
      <h2 className={styles.title}>
        {RATES_TABLE1_TITLE} 
      </h2>
      <Tables rows={jsonData} containerClassName={styles.ratesTable1}/>
    </section>
  );
};

export default ContractRatesTable1;
