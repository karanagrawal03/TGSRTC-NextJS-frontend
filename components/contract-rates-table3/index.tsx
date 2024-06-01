import type { NextPage } from "next";
import styles from "./index.module.css";
import Tables from "../tables";

export type ContractRatesTable3Type = {
  data: any;
  className?: string;
};

const ContractRatesTable3: NextPage<ContractRatesTable3Type> = ({data, className = "" }) => {
  return (
    <div className={[styles.tableTitle, className].join(" ")}>
      <h2 className={styles.title}>{data?.cityServicesTitle}</h2>
      <Tables rows={data?.cityServices1} containerClassName={styles.ratesTable3} />
    </div>
  );
};

export default ContractRatesTable3;
