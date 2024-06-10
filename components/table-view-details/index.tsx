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
}

const CustomTable: React.FC<TableProps> = ({
  rows = [],
  containerClassName,
  columnWidths,
  tableHeadCellStyles,
  tableCellStyles,
  rowsClassName,
}) => {
  if (rows?.length === 0) {
    return <div>No data available</div>;
  }
  const headers = rows[0];
  const bodyRows = rows.slice(1);
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
                  width: columnWidths ? columnWidths[idx] : "auto",
                  color: "#FFFFFF",
                  border: "0px solid",

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
                }  ${rowsClassName}`}
            >
              {Object.keys(row).map((key) => (
                <TableCell
                  className={`${styles.tableCell} ${tableCellStyles ? tableCellStyles : ""
                    }`}
                  key={key}
                  align="left"
                  sx={{
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "20px !important",
                    width: columnWidths ? columnWidths[key] : "auto",
                    border: "0px solid"
                  }}
                >
                  {key === "Action" ? (
                    <a
                      className={styles.actionButton}
                      href="https://tgsrtc.telangana.gov.in/pdf/Logistics%20Web%20page.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
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
