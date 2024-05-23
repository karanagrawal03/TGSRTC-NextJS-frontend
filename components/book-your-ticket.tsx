import type { NextPage } from "next";
import { useState } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./book-your-ticket.module.css";

export type BookYourTicketType = {
  className?: string;
};

const BookYourTicket: NextPage<BookYourTicketType> = ({ className = "" }) => {
  const [bookYourTicketForms2Value, setBookYourTicketForms2Value] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <section className={[styles.bookYourTicket, className].join(" ")}>
        <div className={styles.bookingContent}>
          <div className={styles.texts}>
            <div className={styles.bookYourTicketWrapper}>
              <h1 className={styles.bookYourTicket1}>Book Your Ticket</h1>
            </div>
            <div className={styles.loremIpsumDolor}>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, adipiscing elit. sed do eiusmod tempor
              incididunt ut.
            </div>
          </div>
        </div>
        <img
          className={styles.illustration22}
          alt=""
          src="/illustration-2-2@2x.png"
        />
        <div className={styles.bookingFormWrapper}>
          <div className={styles.bookingForm}>
            <div className={styles.formContainer}>
              <FormControl
                className={styles.bookYourTicketForms}
                variant="standard"
                sx={{
                  borderRadius: "0px 0px 0px 0px",
                  width: "258px",
                  height: "44px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "44px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "44px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "44px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "44px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary">From</InputLabel>
                <Select
                  color="primary"
                  name="from"
                  defaultValue="Hyderabad"
                  label="From"
                  disableUnderline
                  displayEmpty
                >
                  <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                  <MenuItem value="Banglore">Banglore</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <FormControl
                className={styles.bookYourTicketForms1}
                variant="standard"
                sx={{
                  borderRadius: "0px 0px 0px 0px",
                  width: "235px",
                  height: "44px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "44px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "44px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "44px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "44px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary">To</InputLabel>
                <Select
                  color="primary"
                  name="to"
                  id="to"
                  defaultValue="Banglore"
                  label="To"
                  disableUnderline
                  displayEmpty
                >
                  <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                  <MenuItem value="Banglore">Banglore</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <div className={styles.bookYourTicketForms2}>
                <DatePicker
                  value={bookYourTicketForms2Value}
                  onChange={(newValue: any) => {
                    setBookYourTicketForms2Value(newValue);
                  }}
                  sx={{
                    fieldset: {
                      borderColor: "transparent",
                      borderTopWidth: 0,
                      borderRightWidth: 1,
                      borderBottomWidth: 0,
                      borderLeftWidth: 0,
                    },
                    "&:hover": {
                      fieldset: { borderColor: "transparent" },
                      ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent",
                      },
                    },
                    "& input::placeholder": {
                      textColor: "#8a8a8a",
                      fontSize: 14,
                    },
                    input: {
                      color: "#8a8a8a",
                      fontSize: 14,
                      textAlign: "left",
                      fontWeight: "400",
                    },
                    "& .MuiInputBase-root": {
                      height: 44,
                      gap: "8px",
                      flexDirection: { flexDirection: "row" },
                    },
                  }}
                  slotProps={{
                    textField: {
                      size: "medium",
                      fullWidth: false,
                      required: false,
                      autoFocus: false,
                      error: false,
                      color: "primary",
                      placeholder: "Date",
                    },
                    openPickerIcon: {
                      component: () => (
                        <img width="24px" height="24px" src="/icons-2.svg" />
                      ),
                    },
                  }}
                  label="24-04-2024"
                />
              </div>
            </div>
            <button className={styles.button}>
              <div className={styles.applyNow}>Search Buses</div>
            </button>
          </div>
        </div>
        <div className={styles.illustration21Wrapper}>
          <img
            className={styles.illustration21}
            loading="lazy"
            alt=""
            src="/illustration-2-1@2x.png"
          />
        </div>
        <div className={styles.illustration23} />
      </section>
    </LocalizationProvider>
  );
};

export default BookYourTicket;
