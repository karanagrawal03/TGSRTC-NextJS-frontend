import type { NextPage } from "next";
import styles from "./index.module.css";
import Tables from "../tables";
import CommonLabel from "../label";
import { LABEL1, RATES_TABLE2_TITLE } from "../../constants";
import { TABLE2 as Jsondata} from "../../constants/contract-rates";

export type ContractRatesTable2Type = {
  className?: string;
};

const ContractRatesTable2: NextPage<ContractRatesTable2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.tableTitleParent, className].join(" ")}>
      <div className={styles.tableTitle}>
        <h2 className={styles.title}>
          {RATES_TABLE2_TITLE}
        </h2>
        <Tables rows={Jsondata} containerClassName={styles.ratesTable2}/>
      </div>
      <CommonLabel text={LABEL1} />
    </section>
  );
};

export default ContractRatesTable2;
