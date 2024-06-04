import React, { useState, useEffect } from "react";
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
import {
  FROM_LABEL,
  TO_LABEL,
  INTERCITY,
  INTRACITY,
  ROUND_TRIP,
  SEARCH_BUSSES,
  TODAY_LABEL,
  TOMMAROW_LABEL,
} from "../../constants";
import { NextPage } from "next";

export type BookYourTicketType = {
  className?: string;
  routes: { from: string; to: string }[];
  onRouteSelect: (from: string, to: string) => void;
  selectedTo: string;
  selectedFrom: string;
};

const buttons = [
  { label: TODAY_LABEL, style: ReservationFormStyle.button1 },
  { label: TOMMAROW_LABEL, style: ReservationFormStyle.button2 },
];

const ReservationForm: NextPage<BookYourTicketType> = ({
  routes,
  onRouteSelect,
  selectedFrom,
  selectedTo,
}) => {

  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [isClicked, setIsClicked] = useState(false);

  // from input logic
         
  const handleFromChange = (event: any) => {
    onRouteSelect(event.target.value, selectedTo);
  };

   // to input logic

  const handleToChange = (event: any) => {
    onRouteSelect(selectedFrom,event.target.value);
  };

 // swapping icon logic

  const handleExchange = () => {
    setIsClicked(!isClicked);
      onRouteSelect(selectedTo, selectedFrom);
  };

 // default date logic

  const handleDateChange = (newValue: any) => {
    setSelectedDate(newValue);
  };

 // today button date logic

  const handleTodayClick = () => {
    setSelectedDate(dayjs());
  };

 // tommarow button date logic

  const handleTomorrowClick = () => {
    setSelectedDate(dayjs().add(1, "day"));
  };

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
                  id="from-label"
                >
                  {FROM_LABEL}
                </InputLabel>
                <Select
                  labelId="from-label"
                  id="from-select"
                  value={selectedFrom}
                  label="from"
                  onChange={handleFromChange}
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
                  {routes.map((location) => (
                    <MenuItem key={location.from} value={location.from}>
                      {location.from}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
               className={styles.exchangeIcon}
                onClick={handleExchange}
              >
                <img loading="lazy" alt="exchange icon" src="/exchange.svg" />
              </Button>
            </Box>
            <Box sx={ReservationFormStyle.inputBox2}>
              <FormControl sx={ReservationFormStyle.formControl}>
                <InputLabel id="to-label" sx={ReservationFormStyle.inputLabel}>
                  {TO_LABEL}
                </InputLabel>
                <Select
                  labelId="to-label"
                  id="to-select"
                  value={selectedTo}
                  label="to"
                  onChange={handleToChange}
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
                  {routes.map((location) => (
                    <MenuItem key={location.to} value={location.to}>
                      {location.to}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box sx={ReservationFormStyle.inputBox3}>
            <Box sx={ReservationFormStyle.inputBox4}>
              <Box sx={ReservationFormStyle.inputBox5}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={selectedDate}
                    onChange={handleDateChange}
                    format="DD-MM-YYYY"
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
                {buttons.map((button, index) => (
                  <Button
                    key={button.label}
                    variant="contained"
                    sx={button.style}
                    onClick={
                      index === 0 ? handleTodayClick : handleTomorrowClick
                    }
                  >
                    {button.label}
                  </Button>
                ))}
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
