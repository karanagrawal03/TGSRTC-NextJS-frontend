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
import { SelectChangeEvent } from "@mui/material";
interface TendersData {
  TotalData: any;
}
const TendersComponent: React.FC<TendersData> = ({ TotalData }) => {
  const [selectedTender, setSelectedTender] = useState(0);
  const handleClick = (index: number) => {
    setSelectedTender(index);
  };

  const handleSelectChange = (event: SelectChangeEvent<number>) => {
    const index = event.target.value as number;
    setSelectedTender(index);
  };

  const components = [
    {
      name: "OutSoursingControls",
      component: (
        <OutSoursingControls
          outSourcingData={TotalData?.outSourcingContractsData}
          outSourcingContractText={TotalData?.outSourcingContractsText}
          outSourcingLinks={TotalData?.outSourcingLinks}
        />
      ),
    },

    {
      name: "OpenLandParcelCease",
      component: (
        <OpenLandParcelCease
          openLandParcelOnLeaseText={TotalData?.openLandParcelOnLeaseText}
          openLandParcelOnLeaseData={TotalData?.openLandParcelOnLeaseData}
          openLandParcelOnLeaseLinks={TotalData?.openLandParcelOnLeaseLinks}
        />
      ),
    },
    {
      name: "ProcrumentAndSupplies",
      component: (
        <ProcrumentAndSupplies
          procruementAndSuppliesText={TotalData?.procruementAndSuppliesText}
          procruementAndSuppliesData={TotalData?.procruementAndSuppliesData}
          procruementAndSuppliesLinks={TotalData?.procruementAndSuppliesLinks}
        />
      ),
    },
    {
      name: "StallsAndShops",
      component: (
        <StallsAndShops
          stallsAndShopsText={TotalData?.stallsAndShopsText}
          stallsAndShopsData={TotalData?.stallsAndShopsData}
          stallsAndShopsLinks={TotalData?.stallsAndShopsLinks}
        />
      ),
    },
    {
      name: "SoftwareAndItProjects",
      component: (
        <ITPrjects
          ITProductsData={TotalData?.ITProductsData}
          ITProductsText={TotalData?.ITProductsText}
          itProductsLinks={TotalData?.itProductsLinks}
        />
      ),
    },
    {
      name: "Advertisemnets",
      component: (
        <Adversiments
          advertisementsAndFuelsText={TotalData?.advertisementsAndFuelsText}
          advertisementsAndFuelsData={TotalData?.advertisementsAndFuelsData}
          advertisementsAndFuelsLinks={TotalData?.advertisementsAndFuelsLinks}
        />
      ),
    },
    {
      name: "AutionsAndDisposals",
      component: (
        <AuctionDisposals
          auctionsText={TotalData?.auctionsText}
          auctionsData={TotalData?.auctionsData}
          auctionsLinks={TotalData?.auctionsLinks}
        />
      ),
    },
    {
      name: "Chassis&Bodies",
      component: (
        <ChassisAndBodies
          chassisBodiesText={TotalData?.chassisBodiesText}
          chassisBodiesData={TotalData?.chassisBodiesData}
          chassisBodiesLinks={TotalData?.chassisBodiesLinks}
        />
      ),
    },
    {
      name: "ElectricBuses",
      component: (
        <ElectricBuses
          electricBusesText={TotalData?.electricBusesText}
          electricBusesData={TotalData?.electricBusesData}
          electricBusesLinks={TotalData?.electricBusesLinks}
        />
      ),
    },

    {
      name: "CivilEngineeringWorks",
      component: (
        <CivilWorks
          civilWorksText={TotalData?.civilWorksText}
          civilWorksData={TotalData?.civilWorksData}
          civilWorksLinks={TotalData?.civilWorksLinks}
        />
      ),
    },

    {
      name: "HireBuses",
      component: (
        <HireBus
          hireBusData={TotalData?.hireBusData}
          hireBusText={TotalData?.hireBusText}
          hireBusLinks={TotalData?.hireBusLinks}
        />
      ),
    },
    {
      name: "OtherContracts",
      component: (
        <OtherContracts
          otherContractsData={TotalData?.otherContractsData}
          otherContractsText={TotalData?.otherContractsText}
          otherContractsLinks={TotalData?.otherContractsLinks}
        />
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.tendersTab}>
          {TotalData?.tendersTotalArray.map((e: any, index: number) => (
            <p
              key={index}
              className={`${styles.tenderText} ${selectedTender === index ? styles.selected : ""
                }`}
              onClick={() => handleClick(index)}
            >
              {e}
            </p>
          ))}
        </div>
        <div className={styles.muiForm}>
          <FormControl fullWidth>
            <InputLabel id=""></InputLabel>
            <Select
              labelId=""
              id=""
              value={selectedTender}
              onChange={handleSelectChange}
              label=""
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
              {TotalData?.tendersTotalArray.map(
                (option: string, index: number) => (
                  <MenuItem key={index} value={index}>
                    {option}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </div>
        {components[selectedTender]?.component}
      </div>
    </div>
  );
};

export default TendersComponent;
