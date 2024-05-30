import type { NextPage } from "next";
import ReservationHeroTourism from "../components/contract-rates-banner";
import styles from "./reservation-bus-on-contract-ra.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import ContractRatesTable1 from "../components/contract-rates-table1";
import ContractRatesTable3 from "../components/contract-rates-table3";
import ContractRatesTable2 from "../components/contract-rates-table2";
import ContractRatesTable5 from "../components/contract-rates-table5";
import ContractRatesTable4 from "../components/contract-rates-table4";

const ReservationBusOnContractRa: NextPageReservationBusOnContractRaType =() => {
    return (
      <div className={styles.reservationBusOnContractRa}>
        <Header />
        <ReservationHeroTourism />
        <div className={styles.reservationContractRatesTab}>
          <ContractRatesTable1 />
          <ContractRatesTable2 />
          <div className={styles.tableTitleParent}>
            <ContractRatesTable3 />
            <ContractRatesTable4 />
            <ContractRatesTable5 />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

export default ReservationBusOnContractRa;
