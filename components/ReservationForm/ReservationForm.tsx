import React from "react";
import {
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Box,
  Button,
} from "@mui/material";
import styles from "./ReservationForm.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import ReservationFormStyle from "./ReservationFormStyles";
import { FROM_LABEL, TO_LABEL, HYDERABAD_LABEL, INTERCITY, INTRACITY, ROUND_TRIP, SEARCH_BUSSES, TODAY_LABEL, TOMMAROW_LABEL, VISAKHAPATNAM_LABEL, WARANGAL_LABEL } from "../../constants";

const ReservationForm = () => {
  return (
    <div className={styles.bookYourTicketFormTabs}>
      <div className={styles.searchTabsContainer}>
        <div className={styles.searchTabs}>
          <button className={styles.cityToCityBus} type="button">
            <img
              className={styles.icons}
              alt="Intercity Icon"
              src="/icons.svg"
              loading="lazy"
            />
            <b className={styles.intercity}>{INTERCITY}</b>
          </button>
          <button className={styles.cityToCityBus1} type="button">
            <img
              className={styles.icons1}
              alt="Intracity Icon"
              src="/icons-1.svg"
              loading="lazy"
            />
            <div className={styles.intracity}>{INTRACITY}</div>
          </button>
        </div>
      </div>
      <div className={styles.bookYourTicketForm}>
        <Box sx={ReservationFormStyle.container}>
          <Box sx={ReservationFormStyle.inputContainer}>
            <Box sx={ReservationFormStyle.inputBox1}>
              <FormControl sx={ReservationFormStyle.formControl}>
                <InputLabel
                  sx={ReservationFormStyle.inputLabel}
                  id="demo-simple-select-label"
                >
                  {FROM_LABEL}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={HYDERABAD_LABEL}
                  label="from"
                  // onChange={handleChange}
                  IconComponent={(props) => (
                    <img
                      src="/icons-2.svg"
                      alt="Image Description"
                      {...props}
                      loading="lazy"
                    />
                  )}
                  sx={ReservationFormStyle.select1}
                >
                  <MenuItem value={HYDERABAD_LABEL}>
                    {HYDERABAD_LABEL}
                  </MenuItem>
                  <MenuItem value={WARANGAL_LABEL}>{WARANGAL_LABEL}</MenuItem>
                  <MenuItem value={VISAKHAPATNAM_LABEL}>
                    {VISAKHAPATNAM_LABEL}
                  </MenuItem>
                </Select>
              </FormControl>
              <Button className={styles.exchangeIcon}>
                <img loading="lazy" alt="exchange icon" src="/exchange.svg" />
              </Button>
            </Box>
            <Box sx={ReservationFormStyle.inputBox2}>
              <FormControl sx={ReservationFormStyle.formControl}>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={ReservationFormStyle.inputLabel}
                >
                  {TO_LABEL}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={"Warangal (WL)"}
                  label="to"
                  // onChange={handleChange}
                  IconComponent={(props) => (
                    <img
                      src="/icons-2.svg"
                      alt="Image Description"
                      {...props}
                      loading="lazy"
                    />
                  )}
                  sx={ReservationFormStyle.select2}
                >
                  <MenuItem value={HYDERABAD_LABEL}>
                    {HYDERABAD_LABEL}
                  </MenuItem>
                  <MenuItem value={WARANGAL_LABEL}>{WARANGAL_LABEL}</MenuItem>
                  <MenuItem value={VISAKHAPATNAM_LABEL}>
                    {WARANGAL_LABEL}
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box sx={ReservationFormStyle.inputBox3}>
            <Box sx={ReservationFormStyle.inputBox4}>
              <Box sx={ReservationFormStyle.inputBox5}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    defaultValue={dayjs("14-05-2024")}
                    onChange={(newValue: any) => {
                      console.log(newValue);
                    }}
                    sx={ReservationFormStyle.datePicker}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: false,
                        required: false,
                        autoFocus: false,
                        error: false,
                        color: "primary",
                        placeholder: "Date",
                        InputProps: {
                          sx: {
                            padding: "0 !important",
                          },
                        },
                        InputLabelProps: {
                          sx: ReservationFormStyle.inputLabel2,
                        },
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            width="24px"
                            height="24px"
                            src="/date-icon.svg"
                            loading="lazy"
                          />
                        ),
                      },
                    }}
                    label="Date"
                  />
                </LocalizationProvider>
              </Box>
              <Box sx={ReservationFormStyle.box}>
                <Button variant="contained" sx={ReservationFormStyle.button1}>
                  {TODAY_LABEL}
                </Button>
                <Button variant="contained" sx={ReservationFormStyle.button2}>
                  {TOMMAROW_LABEL}
                </Button>
              </Box>
            </Box>
            <Box sx={ReservationFormStyle.box2}>
              <button className={styles.button}>
                <b className={styles.applyNow}>{SEARCH_BUSSES}</b>
              </button>
            </Box>
          </Box>
        </Box>
        <div className={styles.checkboxField}>
          <input className={styles.frameInput} type="checkbox" />
          <div className={styles.iWantTo}>{ROUND_TRIP}</div>
        </div>
        <Box sx={ReservationFormStyle.box3}>
          <button className={styles.button}>
            <b className={styles.applyNow}>{SEARCH_BUSSES}</b>
          </button>
        </Box>
      </div>
    </div>
  );
};

export default ReservationForm;
