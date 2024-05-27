import type { NextPage } from "next";
import styles from "./bus-other-passes-section.module.css";

export type BusOtherPassesSectionType = {
  className?: string;
};

const BusOtherPassesSection: NextPage<BusOtherPassesSectionType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.busOtherPassesSection, className].join(" ")}>
      <h2 className={styles.knowMoreAbout}>Know more about other passes</h2>
      <div className={styles.otherPassesAccordions}>
        <div className={styles.accordion}>
          <div className={styles.bg} />
          <h3 className={styles.before6AmContainer}>
            <ol className={styles.monthlySeasonTicket}>
              <li>Monthly season ticket</li>
            </ol>
          </h3>
          <img
            className={styles.accordianDropdowntrueIcon}
            loading="lazy"
            alt=""
            src="/accordian-dropdowntrue.svg"
          />
        </div>
        <div className={styles.accordion1}>
          <div className={styles.bg1} />
          <h3 className={styles.before6AmContainer1}>
            <ol className={styles.physicallyChallenged}>
              <li>Physically Challenged</li>
            </ol>
          </h3>
          <img
            className={styles.accordianDropdowntrueIcon1}
            alt=""
            src="/accordian-dropdowntrue.svg"
          />
        </div>
        <div className={styles.accordion2}>
          <div className={styles.bg2} />
          <h3 className={styles.before6AmContainer2}>
            <ol className={styles.ngosBusPass}>
              <li>NGO's Bus Pass</li>
            </ol>
          </h3>
          <img
            className={styles.accordianDropdowntrueIcon2}
            alt=""
            src="/accordian-dropdowntrue.svg"
          />
        </div>
        <div className={styles.accordion3}>
          <div className={styles.bg3} />
          <h3 className={styles.before6AmContainer3}>
            <ol className={styles.unemployedYouth}>
              <li> Unemployed Youth</li>
            </ol>
          </h3>
          <img
            className={styles.accordianDropdowntrueIcon3}
            alt=""
            src="/accordian-dropdowntrue.svg"
          />
        </div>
        <div className={styles.accordion4}>
          <div className={styles.bg4} />
          <h3 className={styles.before6AmContainer4}>
            <ol className={styles.journalists}>
              <li>Journalists</li>
            </ol>
          </h3>
          <img
            className={styles.accordianDropdowntrueIcon4}
            alt=""
            src="/accordian-dropdowntrue.svg"
          />
        </div>
        <div className={styles.accordion5}>
          <div className={styles.bg5} />
          <h3 className={styles.before6AmContainer5}>
            <ol className={styles.freedomFighters}>
              <li>Freedom Fighters</li>
            </ol>
          </h3>
          <img
            className={styles.accordianDropdowntrueIcon5}
            alt=""
            src="/accordian-dropdowntrue.svg"
          />
        </div>
        <div className={styles.accordion6}>
          <div className={styles.bg6} />
          <h3 className={styles.before6AmContainer6}>
            <ol className={styles.dialysisPatients}>
              <li>Dialysis Patients</li>
            </ol>
          </h3>
          <img
            className={styles.accordianDropdowntrueIcon6}
            alt=""
            src="/accordian-dropdowntrue.svg"
          />
        </div>
        <div className={styles.accordion7}>
          <div className={styles.bg7} />
          <h3 className={styles.before6AmContainer7}>
            <ol className={styles.spousesMartyrs}>
              <li>Spouses Martyrs</li>
            </ol>
          </h3>
          <img
            className={styles.accordianDropdowntrueIcon7}
            alt=""
            src="/accordian-dropdowntrue.svg"
          />
        </div>
        <div className={styles.accordion8}>
          <div className={styles.bg8} />
          <input
            className={styles.before6Am}
            placeholder="MLAs, MPs, MLCs and Spouses"
            type="text"
          />
          <img
            className={styles.accordianDropdowntrueIcon8}
            alt=""
            src="/accordian-dropdowntrue.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default BusOtherPassesSection;
