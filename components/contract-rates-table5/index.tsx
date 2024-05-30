import type { NextPage } from "next";
import styles from "./index.module.css";
import Tables from "../tables";
import BulletPoints from "../bullet-points";
import { ANNEXURE, TERMS_AND_CONDITIONS } from "../../constants";
import { TABLE5 as Jsondata, RATES_BULLET_POINTS2 as arr} from "../../constants/contract-rates";

const ContractRatesTable5 = ( ) => {
 return(
  <>
  <Tables rows={Jsondata} containerClassName={styles.ratesTable5} />
  <section className={styles.annexureContainer}>
    <h1 className={styles.annexureA}>{ANNEXURE}</h1>
    <div className={styles.bulletPointContainer}>
      <div className={styles.title}>
        <h2 className={styles.guidingPrinciplesOf}>{TERMS_AND_CONDITIONS}</h2>
      </div>
      <BulletPoints items={arr} containerClassName={styles.bulletPoints}/>
    </div>
  </section>
  </>
 )
};

export default ContractRatesTable5;
