import React, { useState } from "react";
import OutSoursingControls from "../out-sourcing-controls";
import styles from "./index.module.css";
import OpenLandParcelCease from "../open-land-parcel-cease";
import { MenuItem, FormControl, Select, InputLabel } from "@mui/material";
import ProcrumentAndSupplies from "../procrument-and-supplies";
import OtherContracts from "../otherContracts";
import StallsAndShops from "../stalls-and-shops-for-rent";
import AuctionDisposals from "../auction-disposals";
import Adversiments from "../adversiments";
import ChassisAndBodies from "../chassis-and-bodies";
import ElectricBuses from "../electric-buses";
import CivilWorks from "../civil-works";
import HireBus from "../hire-bus";
import ITPrjects from "../it-projects";

const TendersComponent = () => {
  const [selectedTender, setSelectedTender] = useState(0);
  const [filteredComponent, setFilteredComponent] = useState(null);

  const handleClick = (index: number) => {
    setSelectedTender(index);
    setFilteredComponent(null);
  };

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const index = event.target.value as number;
    setSelectedTender(index);
    setFilteredComponent(null);
  };

  const components = [
    { name: "OutSoursingControls", component: <OutSoursingControls /> },
    { name: "OpenLandParcelCease", component: <OpenLandParcelCease /> },
    { name: "ProcrumentAndSupplies", component: <ProcrumentAndSupplies /> },
    { name: "OtherContracts", component: <OtherContracts /> },
    { name: "StallsAndShops", component: <StallsAndShops /> },
    { name: "AutionsAndDisposals", component: <AuctionDisposals /> },
    { name: "Advertisemnets", component: <Adversiments /> },
    { name: "Chassis&Bodies", component: <ChassisAndBodies /> },
    { name: "SoftwareAndItProjects", component: <ITPrjects /> },
    { name: "ElectricBuses", component: <ElectricBuses /> },
    { name: "CivilEngineeringWorks", component: <CivilWorks /> },
    { name: "HireBuses", component: <HireBus /> },
  ];

  const data = [
    "Out Sourcing Controls",
    "Open Land Parcel on Lease",
    "Procurement & Supplies",
    "Stalls & Shops for Rent",
    "Software and IT Products",
    "Advertisements and Fuel Outlets",
    "Auctions & Disposals",
    "Build Operate & Transfer (BOT)",
    "Chassis & Bodies",
    "Electric Buses",
    "Civil Engineering Works",
    "Hire Buses",
    "Other Contracts",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.tendersTab}>
        {data.map((e, index) => (
          <p
            key={index}
            className={`${styles.tenderText} ${
              selectedTender === index ? styles.selected : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {e}
          </p>
        ))}
      </div>
      <div className={styles.muiForm}>
        <FormControl fullWidth>
          <InputLabel id="filter-label">Filter</InputLabel>
          <Select
            labelId="filter-label"
            id="filter"
            value={selectedTender}
            onChange={handleSelectChange}
            label="Filter"
            sx={{
              borderRadius: "6px",
              fontFamily: "var(--font-playfair-display)",
              fontSize: 16,
              fontWeight: 500,
              backgroundColor: "#FFFFFF",
              textAlign: "left",
              boxShadow: "0px 4px 10px 0px #E8E8E8",
            }}
          >
            {data.map((option, index) => (
              <MenuItem key={index} value={index}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {components[selectedTender]?.component}
    </div>
  );
};

export default TendersComponent;
