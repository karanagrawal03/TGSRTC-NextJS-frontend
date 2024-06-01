import type { NextPage } from "next";
import styles from "./index.module.css";
import Tables from "../tables";
import CommonLabel from "../label";

export type ContractRatesTable2Type = {
  data :any;
  className?: string;
};

const ContractRatesTable2: NextPage<ContractRatesTable2Type> = ({data, className = "" }) => {
  return (
    <section className={[styles.tableTitleParent, className].join(" ")}>
      <div className={styles.tableTitle}>
        <h2 className={styles.title}>{data?.districtServicesTitle}</h2>
        <Tables rows={data?.districtServices} containerClassName={styles.ratesTable2}/>
      </div>
      <CommonLabel text={data?.districtServicesLabel} />
    </section>
  );
};

export default ContractRatesTable2;
