import type { NextPage } from "next";
import Cards4 from "./cards4";
import styles from "./content-right.module.css";

export type ContentRightType = {
  className?: string;
};

const ContentRight: NextPage<ContentRightType> = ({ className = "" }) => {
  return (
    <section className={[styles.contentRight, className].join(" ")}>
      <div className={styles.logisticAboutSection}>
        <div className={styles.logisticAboutTexts}>
          <h1 className={styles.aboutLogistics}>About Logistics</h1>
          <p
            className={styles.telanganaStateRoad}
          >{`Telangana State Road Transport Corporation (TGSRTC) is a State Transport Undertaking which provides Public Transport. It has a fleet of about 9,700 buses. TGSRTC launched Cargo and Parcel Services in June, 2020 for transporting Cargo and Parcels in its buses. The services are provided at all TGSRTC Bus Stations located across the State and to neighbouring States at identified important locations where counters are provided. Parcel & Cargo Agents have been identified for this purpose and they provide services from their counters.`}</p>
          <p className={styles.theConsignorsCanContainer}>
            The consignors can approach the nearest bus station or counter and
            book their consignment for delivery at their desired location. The
            consignment will be transported through TGSRTC buses and delivered
            to the Bus Station/Counter at the destination as desired by the
            customer. The consignee has to collect the consignment from the Bus
            Station/Counter. Please visit 
            <a
              className={styles.wwwtgsrtctelanganagovin}
              href="https://www.tsrtc.telangana.gov.in/"
              target="_blank"
            >
              <span className={styles.wwwtgsrtctelanganagovin1}>
                www.TGSRTC.telangana.gov.in
              </span>
            </a>
             for contact details of Counters/Agents. Home delivery facility is
            available in Hyderabad City.
          </p>
        </div>
        <div className={styles.logisticsInfographicCardCon}>
          <Cards4
            group1000013498="/group-1000013498.svg"
            busPasses="Safe and Reliable"
          />
          <Cards4
            group1000013498="/group-1000013527.svg"
            busPasses="Safe and Reliable"
            applyNowPadding="var(--padding-7xs-5) 0px"
          />
          <Cards4
            group1000013498="/group-1000013496.svg"
            busPasses="On Time Delivery"
            applyNowPadding="var(--padding-5xs-5) 0px"
          />
        </div>
      </div>
    </section>
  );
};

export default ContentRight;
