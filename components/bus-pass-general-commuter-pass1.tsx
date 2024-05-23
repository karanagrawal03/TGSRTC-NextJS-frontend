import type { NextPage } from "next";
import styles from "./bus-pass-general-commuter-pass1.module.css";

export type BusPassGeneralCommuterPass1Type = {
  className?: string;
};

const BusPassGeneralCommuterPass1: NextPage<
  BusPassGeneralCommuterPass1Type
> = ({ className = "" }) => {
  return (
    <section
      className={[styles.busPassGeneralCommuterPass, className].join(" ")}
    >
      <h2 className={styles.knowMoreAboutContainer}>
        <span className={styles.knowMoreAbout}>{`Know more about `}</span>
        <b>General Commuter Pass</b>
      </h2>
      <div className={styles.reservationAccordians}>
        <div className={styles.accordian}>
          <div className={styles.bg} />
          <div className={styles.before6AmContainer}>
            <ol className={styles.generalBusTicketGbtOrdin}>
              <li>General Bus Ticket (GBT) Ordinary</li>
            </ol>
          </div>
          <img
            className={styles.accordianDropdowntrueIcon}
            alt=""
            src="/accordian-dropdowntrue.svg"
          />
        </div>
        <div className={styles.accordian1}>
          <div className={styles.bg1} />
          <div className={styles.before6AmContainer1}>
            <ol className={styles.generalBusTicketGbtMetro}>
              <li>General Bus Ticket (GBT) Metro Express</li>
            </ol>
          </div>
          <img
            className={styles.accordianDropdowntrueIcon1}
            alt=""
            src="/accordian-dropdowntrue.svg"
          />
        </div>
        <div className={styles.accordian2}>
          <div className={styles.bg2} />
          <div className={styles.before6AmContainer2}>
            <ol className={styles.generalBusTicketGbtMetro1}>
              <li>General Bus Ticket (GBT) Metro Deluxe</li>
            </ol>
          </div>
          <img
            className={styles.accordianDropdowntrueIcon2}
            alt=""
            src="/accordian-dropdowntrue.svg"
          />
        </div>
        <div className={styles.accordian3}>
          <div className={styles.bg3} />
          <div className={styles.before6AmContainer3}>
            <ol className={styles.generalBusTicketGbtMetro2}>
              <li>General Bus Ticket (GBT) Metro Luxury Bus Pass</li>
            </ol>
          </div>
          <img
            className={styles.accordianDropdowntrueIcon3}
            alt=""
            src="/accordian-dropdowntrue.svg"
          />
        </div>
        <div className={styles.accordian4}>
          <div className={styles.bg4} />
          <div className={styles.before6AmContainer4}>
            <ol className={styles.generalBusTicketGbtPushp}>
              <li>General Bus Ticket (GBT) Pushpak AC Bus Pass</li>
            </ol>
          </div>
          <img
            className={styles.accordianDropdowntrueIcon4}
            alt=""
            src="/accordian-dropdowntrue.svg"
          />
        </div>
        <div className={styles.accordian5}>
          <div className={styles.bg5} />
          <div className={styles.before6AmContainer5}>
            <ol className={styles.mmtsRtcCombiTicket}>
              <li>MMTS RTC Combi Ticket</li>
            </ol>
          </div>
          <img
            className={styles.accordianDropdowntrueIcon5}
            alt=""
            src="/accordian-dropdowntrue.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default BusPassGeneralCommuterPass1;
