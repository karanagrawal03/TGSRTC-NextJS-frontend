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
  customHeaderCellStyles?: Object;
  customRowCellStyles?: Object;
  columnWidths?: any;
}

const Tables: React.FC<TableProps> = ({
  rows,
  containerClassName,
  customHeaderCellStyles,
  customRowCellStyles,
  columnWidths,
}) => {
  const headers = rows[0];
  const bodyRows = rows.slice(1);

  return (
    <TableContainer
      className={`${styles.tableContainer} ${containerClassName}`}
      component={Paper}
      // sx={{
      //   boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.1)",
      // }}
    >
      <Table
        sx={{
          minWidth: 700,
        }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow className={styles.tableHead}>
            {Object.keys(headers).map((key) => (
              <TableCell
                className={styles.tableHeadCell}
                key={key}
                sx={customHeaderCellStyles}
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
              className={index % 2 === 0 ? styles.evenRow : styles.oddRow}
            >
              {Object.keys(row).map((key) => (
                <TableCell
                  className={styles.tableCell}
                  key={key}
                  align="left"
                  sx={customRowCellStyles}
                >
                  {row[key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
