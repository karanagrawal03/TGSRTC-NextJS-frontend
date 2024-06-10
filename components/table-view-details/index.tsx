import React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import styles from "./index.module.css";

interface TableProps {
  rows: Array<{ [key: string]: any }>;
  containerClassName?: string;
  columnWidths?: any;
  tableHeadCellStyles?: any;
  tableCellStyles?: any;
  rowsClassName?: any;
  Links: string[];
}

const CustomTable: React.FC<TableProps> = ({
  rows = [],
  containerClassName,
  columnWidths,
  tableHeadCellStyles,
  tableCellStyles,
  rowsClassName,
  Links,
}) => {
  if (rows?.length === 0) {
    return <div>No data available</div>;
  }

  const updatedRows = rows.map((row, index) => {
    if (index === 0) {
      return { ...row, Action: row.Action || "Action" };
    }
    return { ...row, Action: "View Details" };
  });

  const headers: { [key: string]: any } = updatedRows[0];
  const bodyRows = updatedRows.slice(1);

  return (
    <TableContainer
      className={`${styles.tableContainer} ${containerClassName}`}
      component={Paper}
    >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow className={styles.tableHead}>
            {Object.keys(headers).map((key, idx) => (
              <TableCell
                className={`${styles.tableHeadCell} ${tableHeadCellStyles ? tableHeadCellStyles : ""
                  } ${key === "Action" ? styles.centerAlign : ""}`}
                key={key}
                sx={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "20px !important",
                  width: "0px",
                  color: "#FFFFFF",

                }}
              >
                {headers[key]}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {bodyRows.map((row, index) => (
            <TableRow
              key={index}
              className={`${index % 2 === 0 ? styles.evenRow : styles.oddRow} ${styles.additionalClassName
                } ${rowsClassName}`}
            >
              {Object.keys(row).map((key: string) => (
                <TableCell
                  className={`${styles.tableCell} ${tableCellStyles ? tableCellStyles : ""
                    }`}
                  key={key}
                  align="left"
                  sx={{
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "20px !important",
                    width: columnWidths ? columnWidths[key] : "0px",
                  }}
                >
                  {key === "Action" ? (
                    <a
                      className={styles.actionButton}
                      href={Links[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ width: "100px !important" }}
                    >
                      {row[key]}
                    </a>
                  ) : (
                    row[key]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
