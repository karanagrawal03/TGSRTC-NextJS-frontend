import type { NextPage } from "next";
import ReservationHeroTourism from "../../components/contract-rates-banner";
import styles from "./index.module.css";
import ContractRatesTable1 from "../../components/contract-rates-table1";
import ContractRatesTable3 from "../../components/contract-rates-table3";
import ContractRatesTable2 from "../../components/contract-rates-table2";
import ContractRatesTable5 from "../../components/contract-rates-table5";
import ContractRatesTable4 from "../../components/contract-rates-table4";
import { useEffect } from "react";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";

const ReservationBusOnContractRa: NextPageReservationBusOnContractRaType =() => {
  const { data, doFetch } = useFetch();

  useEffect(() => {
    doFetch(`/reservation-bus-on-contract-rates?populate=*`);
  }, []);
  // console.log({ data }, "tourism data", UPLOADS_BASE_URL);

  return (
    <div className={styles.reservationBusOnContractRa}>
      <ReservationHeroTourism data={data} />
      <div className={styles.reservationContractRatesTab}>
        <ContractRatesTable1 data={data}  />
        <ContractRatesTable2 data={data} />
        <div className={styles.tableTitleParent}>
          <ContractRatesTable3 data={data} />
          <ContractRatesTable4 data={data} />
          <ContractRatesTable5 data={data} />
        </div>
      </div>
    </div>
  );
};

export default ReservationBusOnContractRa;