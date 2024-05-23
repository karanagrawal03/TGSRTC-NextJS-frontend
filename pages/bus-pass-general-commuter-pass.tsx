import type { NextPage } from "next";
import Header1 from "../components/header1";
import BusPassGeneralCommuterPass1 from "../components/bus-pass-general-commuter-pass1";
import Footer1 from "../components/footer1";
import styles from "./bus-pass-general-commuter-pass.module.css";

const BusPassGeneralCommuterPass: NextPageBusPassGeneralCommuterPassType =
  () => {
    return (
      <div className={styles.busPassGeneralCommuterPass}>
        <Header1
          prop="/---3.svg"
          tELANGANASTATEROADTRANSPO="/telangana-state-road-transport-corporation3.svg"
        />
        <section className={styles.busPassesHeroGeneralCommut}>
          <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
          <h1 className={styles.generalCommuterPassContainer}>
            <p className={styles.general}>General</p>
            <p className={styles.commuterPass}>Commuter Pass</p>
          </h1>
          <div className={styles.applyRenewTravelEffortleWrapper}>
            <h2
              className={styles.applyRenew}
            >{`Apply, Renew & Travel effortlessly with TSRTC`}</h2>
          </div>
        </section>
        <BusPassGeneralCommuterPass1 />
        <Footer1 />
      </div>
    );
  };

export default BusPassGeneralCommuterPass;
