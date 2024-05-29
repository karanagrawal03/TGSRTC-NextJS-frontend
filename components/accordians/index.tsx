import React from "react";
import styles from "./index.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AccordianTab from "../accordian-tab";

const AccordionItem: React.FC<AccordionItemProps> = ({
  name,
  info,
  expanded,
  onChange,
}) => {
  return (
    <div className={styles.accordian}>
      <Accordion
        className={styles.dropdown}
        expanded={expanded}
        onChange={onChange}
      >
        <AccordionSummary
          expandIcon={expanded ? <HorizontalRuleIcon /> : <AddIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className={styles.before6AmContainer1}
        >
          <li>{name}</li>
        </AccordionSummary>
      </Accordion>
      {expanded && (
        <AccordionDetails className={styles.accordianDetails}>
          <div className={styles.accordianTab}>
            <AccordianTab array={info} />
          </div>
        </AccordionDetails>
      )}
    </div>
  );
};

export default AccordionItem;
