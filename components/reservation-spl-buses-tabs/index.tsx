import React, { useState, SyntheticEvent } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import MunchintalaTab from "../munchitala-tab";
import HyderabadTab from "../hyderabad-tab";
import YadagiriguttaTab from "../yadagirigutta-tab";
import AirPortPushpak from "../airport-pushpak-tab";
import styles from "./index.module.css";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ width: "100%" }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const tabsData = [
  {
    label: "Muchintala",
    component: <MunchintalaTab />,
  },
  {
    label: "Airport Pushpak",
    component: <AirPortPushpak />,
  },
  {
    label: "Hyderabad to Yadagirigutta",
    component: <HyderabadTab />,
  },
  {
    label: "Yadagirigutta to Hyderabad",
    component: <YadagiriguttaTab />,
  },
];

const ReservationBusesTabs: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSelectChange = (event: SelectChangeEvent<number>) => {
    setValue(event.target.value as number);
  };

  return (
    <Box
      sx={{
        width: "100%",
        "&.MuiTabs-root": {
          width: "100%",
        },
      }}
    >
      <div className={styles.muiTabs}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#09843E",
                border: "1px solid #09843E",
              },
            }}
            sx={{
              "&.MuiTabs-root": {
                width: "100%",
              },
              marginTop: "24px",
            }}
          >
            {tabsData.map((tab, index) => (
              <Tab
                className={styles.muiTabssection}
                sx={{
                  flex: 1,

                  width: "295px",
                  fontSize: 16,
                  fontWeight: 500,
                  fontFamily: "var(--font-montserrat)",
                  lineHeight: 0,
                  textAlign: "left",
                  textTransform: "none",
                  color: "#4D4D4D",
                  textColor: "#4D4D4D",
                  indicatorColor: "#4D4D4D",
                  ariaLabel: "secondary tabs example",
                  marginTop: "-11px",
                  "&.Mui-selected": {
                    color: "#CD342B !important",
                    fontWeight: 700,
                  },
                }}
                key={index}
                label={tab.label}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </Box>
        {tabsData.map((tab, index) => (
          <CustomTabPanel key={index} value={value} index={index}>
            {tab.component}
          </CustomTabPanel>
        ))}
      </div>
      <div className={styles.muiForm}>
        <FormControl fullWidth>
          <InputLabel id=""></InputLabel>
          <Select
            labelId=""
            id=""
            value={value}
            label=""
            sx={{
              borderRadius: "6px",
              fontFamily: "var(--font-playfair-display)",
              fontSize: 16,
              fontWeight: 500,
              backgroundColor:"#FFFFFF",
              textAlign: "left",
            }}
            onChange={handleSelectChange}
          >
            {tabsData.map((tab, index) => (
              <MenuItem key={index} value={index}>
                {tab.label}
              </MenuItem>
            ))}
          </Select>
          {tabsData.map((tab, index) => (
            <CustomTabPanel key={index} value={value} index={index}>
              <div style={{ paddingTop: "24px" }}>{tab.component}</div>
            </CustomTabPanel>
          ))}
        </FormControl>
      </div>
    </Box>
  );
};

export default ReservationBusesTabs;
