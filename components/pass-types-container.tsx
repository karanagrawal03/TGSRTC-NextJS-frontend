import type { NextPage } from "next";
import styles from "./pass-types-container.module.css";

export type PassTypesContainerType = {
  className?: string;
};

const PassTypesContainer: NextPage<PassTypesContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.passTypesContainer, className].join(" ")}>
      <div className={styles.typesOfBus}>Types of Bus Passes</div>
      <div className={styles.faqsAccordion}>
        <div className={styles.accordion}>
          <div className={styles.bg} />
          <h3 className={styles.before6AmContainer}>
            <ol className={styles.studentPasses}>
              <li>Student Passes</li>
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
            <ol className={styles.generalCommuters}>
              <li>General Commuters</li>
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
            <ol className={styles.journalists}>
              <li>Journalists</li>
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
            <ol className={styles.dialysisPatients}>
              <li>Dialysis Patients</li>
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
          <div className={styles.before6AmContainer4}>
            <ol className={styles.physicallyChallengedAndMont}>
              <li>Physically Challenged and Monthly Season Tickets</li>
            </ol>
          </div>
          <img
            className={styles.accordianDropdowntrueIcon4}
            alt=""
            src="/accordian-dropdowntrue.svg"
          />
        </div>
        <div className={styles.accordion5}>
          <div className={styles.bg5} />
          <h3 className={styles.before6AmContainer5}>
            <ol className={styles.spousesOfMartyrsPasses}>
              <li>Spouses of Martyrs passes</li>
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
            <ol className={styles.freedomFighters}>
              <li>Freedom Fighters</li>
            </ol>
          </h3>
          <img
            className={styles.accordianDropdowntrueIcon6}
            alt=""
            src="/accordian-dropdowntrue.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default PassTypesContainer;
