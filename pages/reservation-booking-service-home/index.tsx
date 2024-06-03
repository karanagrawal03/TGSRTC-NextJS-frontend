import BookYourTicket from "../../components/BookYourTicket";
import ReservationKPIs from "../../components/reservation-kpi";
import styles from "./index.module.css";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";
import { useEffect } from "react";
import CustomerSupport from "../../components/customer-support";
import ReservationConnectivity from "../../components/reservation-connectivity";
import ReservationStandards from "../../components/reservation-standards";
import ReservationServices from "../../components/reservation-services";
import ReservationHero from "../../components/reservation-landing-hero";
import SpecialBuses from "../../components/special-buses";


const ReservationBookingServiceHome: NextPageReservationBookingServiceHomeType =() => {
    
    const { data, doFetch } = useFetch();
    useEffect(() => {
      doFetch(`/reservation-landing-pages?populate=*`);
    }, []);

    return (
      <section className={styles.ReservationBookingServiceHome}>
        <ReservationHero 
          heroTitle={data?.heroTitle} 
          heroSubTitle={data?.heroSubTitle} 
          heroWebImage={data?.heroWebImage}
          heroMobileImage={data?.heroMobileImage} 
        />
        <BookYourTicket routes={data?.viewAllRoutes} />
        <ReservationKPIs 
          kpiData={data?.kpi}
        />
        <SpecialBuses 
          specialBusOffersTitle={data?.specialBusOffersTitle}
          specialBusOffersData={data?.specialBusOffersData}
        />
        <CustomerSupport
          customerSupportWebImage={data?.customerSupportWebImage}
          customerSupportMobileImage={data?.customerSupportMobileImage}
          customerSupportTitle={data?.customerSupportTitle}
          customerSupportSubTitle={data?.customerSupportSubTitle} 
          customerSupportEmail={data?.customerSupportEmail}
          customerSupportContactNumber1={data?.customerSupportContactNumber1}
          customerSupportContactNumber2={data?.customerSupportContactNumber2}
        />
        <section className={styles.ReservationBookingServiceHomeInner}>
          <div className={styles.frameContainer}>
           <ReservationStandards 
            TGSRTCDeliveringExcellenceTitle={data?.TGSRTCDeliveringExcellenceTitle}
            TGSRTCDeliveringExcellenceSubtitle={data?.TGSRTCDeliveringExcellenceSubtitle}
            TGSRTCDeliveringExcellenceContent={data?.TGSRTCDeliveringExcellenceContent}
           />
           <ReservationServices 
            typesOfServiceTitle={data?.typesOfServiceTitle}
            typesOfServiceContent={data?.typesOfServiceContent}
            TGSRTCDeliveringExcellenceTableData={data?.TGSRTCDeliveringExcellenceTableData}
           />
           <ReservationConnectivity 
            connectivityTitle={data?.connectivityTitle}
            connectivityListData={data?.connectivityListData}
           />
          </div>
        </section>
      </section>
    );
  };

export default ReservationBookingServiceHome;
