import React from "react";
import styles from "./index.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AccordianTab from "../accordian-tab";

export interface DataItem {
  type: string;
  text?: string;
  data?: string[] | { [key: string]: string | number }[];
}
interface AccordionItemProps {
  name: string;
  info: DataItem[];
  expanded: boolean;
  onChange: () => void;
  containerClassName?: string;
}
const AccordionItem: React.FC<AccordionItemProps> = ({
  name,
  info,
  expanded,
  onChange,
  containerClassName,
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
          <li className={styles.accordianHeading}>{name}</li>
        </AccordionSummary>
      </Accordion>
      {expanded && (
        <AccordionDetails className={styles.accordianDetails}>
          <div className={`${styles.accordianTab} ${containerClassName}`}>
            <AccordianTab array={info} />
          </div>
        </AccordionDetails>
      )}
    </div>
  );
};

export default AccordionItem;
