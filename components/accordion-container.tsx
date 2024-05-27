import type { NextPage } from "next";
import styles from "./accordion-container.module.css";

export type AccordionContainerType = {
  className?: string;
};

const AccordionContainer: NextPage<AccordionContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.accordionContainer, className].join(" ")}>
      <div className={styles.accordion}>
        <div className={styles.bg} />
        <h3 className={styles.before6AmContainer}>
          <ol className={styles.studentFreeBusPasses}>
            <li>Student Free Bus Passes</li>
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
        <div className={styles.before6AmContainer1}>
          <ol className={styles.studentConcessionalRoutePas}>
            <li>Student Concessional Route Passes in Cities / Towns:</li>
          </ol>
        </div>
        <img
          className={styles.accordianDropdownIcon}
          alt=""
          src="/accordian-dropdown.svg"
        />
      </div>
    </div>
  );
};

export default AccordionContainer;
