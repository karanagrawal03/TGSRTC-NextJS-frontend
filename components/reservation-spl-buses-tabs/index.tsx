import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MunchintalaTab from "../munchitala-tab";
import HyderabadTab from "../hyderabad-tab";
import YadagiriguttaTab from "../yadagirigutta-tab";
import AirPortPushpak from "../airport-pushpak-tab";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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

export default function ReservationBusesTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          border: "2px solid",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Muchintala" {...a11yProps(0)} />
          <Tab label="Airport Pushpak" {...a11yProps(1)} />
          <Tab label="Hyderabad to Yadagirigutta" {...a11yProps(2)} />
          <Tab label="Yadagirigutta to Hyderabad" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <MunchintalaTab />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <AirPortPushpak />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <HyderabadTab />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <YadagiriguttaTab />
      </CustomTabPanel>
    </Box>
  );
}
