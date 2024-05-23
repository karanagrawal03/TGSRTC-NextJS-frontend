import type { NextPage } from "next";
import Cards from "./cards";
import styles from "./frame-component11.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.logisticAboutWrapper, className].join(" ")}>
      <div className={styles.logisticAbout}>
        <div className={styles.aboutLogisticsTexts}>
          <h1 className={styles.aboutLogistics}>About Logistics</h1>
          <div className={styles.telanganaStateRoadContainer}>
            <p
              className={styles.telanganaStateRoad}
            >{`Telangana State Road Transport Corporation (TSRTC) is a State Transport Undertaking which provides Public Transport. It has a fleet of about 9,700 buses. TSRTC launched Cargo and Parcel Services in June, 2020 for transporting Cargo and Parcels in its buses. The services are provided at all TSRTC Bus Stations located across the State and to neighbouring States at identified important locations where counters are provided. Parcel & Cargo Agents have been identified for this purpose and they provide services from their counters.`}</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.theConsignorsCan}>
              The consignors can approach the nearest bus station or counter and
              book their consignment for delivery at their desired location. The
              consignment will be transported through TSRTC buses and delivered
              to the Bus Station/Counter at the destination as desired by the
              customer. The consignee has to collect the consignment from the
              Bus Station/Counter. Please visit www.tsrtc.telangana.gov.in for
              contact details of Counters/Agents. Home delivery facility is
              available in Hyderabad City.
            </p>
          </div>
        </div>
        <div className={styles.aboutLogisticsCards}>
          <Cards
            group1000013498="/group-1000013498.svg"
            busPasses="Safe and Reliable"
            lineSeparator="pending_I1:6881;717:27579;717:25512"
          />
          <Cards
            group1000013498="/group-1000013527.svg"
            busPasses="Safe and Reliable"
            lineSeparator="pending_I1:6882;717:27579;717:25512"
            propPadding="var(--padding-7xs-5) 0px"
          />
          <Cards
            group1000013498="/group-1000013496.svg"
            busPasses="On Time Delivery"
            lineSeparator="pending_I1:6883;717:27579;717:25512"
            propPadding="var(--padding-5xs-5) 0px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
