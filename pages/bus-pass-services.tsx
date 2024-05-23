import type { NextPage } from "next";
import Header1 from "../components/header1";
import BusPassOptions from "../components/bus-pass-options";
import BusPassOtherBusPasses from "../components/bus-pass-other-bus-passes";
import Footer from "../components/footer";
import styles from "./bus-pass-services.module.css";

const BusPassServices: NextPageBusPassServicesType = () => {
  return (
    <div className={styles.busPassServices}>
      <Header1
        prop="/---2.svg"
        tELANGANASTATEROADTRANSPO="/telangana-state-road-transport-corporation2.svg"
      />
      <section className={styles.busPassHeroBusPassService}>
        <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
        <h1 className={styles.busPassServices1}>Bus Pass Services</h1>
        <h2
          className={styles.applyRenew}
        >{`Apply, Renew & Travel effortlessly with TSRTC`}</h2>
      </section>
      <BusPassOptions />
      <BusPassOtherBusPasses />
      <Footer />
    </div>
  );
};

export default BusPassServices;
