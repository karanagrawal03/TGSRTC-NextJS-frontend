import type { NextPage } from "next";
import styles from "./index.module.css";
import Tables from "../tables";
import BulletPoints from "../bullet-points";

export type ContractRatesTable5Type = {
  data: any;
};

const ContractRatesTable5:NextPage<ContractRatesTable5Type> = ({data}) => {
 return(
  <>
    <Tables rows={data?.cityServices3} containerClassName={styles.ratesTable5} />
    <section className={styles.annexureContainer}>
      <h1 className={styles.annexureA}>{data?.annexureTitle}</h1>
      <div className={styles.bulletPointContainer}>
        <div className={styles.title}>
          <h2 className={styles.guidingPrinciplesOf}>{data?.termsAndConditionsTitle}</h2>
        </div>
        <BulletPoints items={data?.termsAndConditions} containerClassName={styles.bulletPoints}/>
      </div>
    </section>
  </>
 )
};

export default ContractRatesTable5;