import type { NextPage } from "next";
import styles from "./index.module.css";
import Tables from "../tables";

export type ContractRatesTable1Type = {
  data :any;
  className?: string;
};

const ContractRatesTable1: NextPage<ContractRatesTable1Type> = ({ data,className = "" }) => {
  return (
    <section className={[styles.tableTitle, className].join(" ")}>
      <h2 className={styles.title}>{data?.oneWayServicesTitle}</h2>
      <Tables rows={data?.oneWayServices} containerClassName={styles.ratesTable1}/>
    </section>
  );
};

export default ContractRatesTable1;
