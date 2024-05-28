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
        style={{ width: "100%" }}
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
        <AccordionDetails
          style={{ padding: "0px", width: "calc( 100% + 24px )" }}
        >
          <div
            style={{
              marginTop: "-20px",
              width: "auto",
              backgroundColor: "#FFFFFF",
              padding:"0px 56px 0px 60px"
            }}
          >
            <AccordianTab array={info} />
          </div>
        </AccordionDetails>
      )}
    </div>
  );
};

export default AccordionItem;
