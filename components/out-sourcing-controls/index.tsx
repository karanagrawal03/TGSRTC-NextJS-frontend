import Tables from "../tables";
import styles from "./index.module.css";
const OutSoursingControls = () => {
  const data = [
    {
      "No.": "01.",
      Notification:
        "Notification for Sweeping Cleaning & Washing Garage yards etc.,Upkeep of bus stations ,Asst. to Mechanics,Artisan Cader,Sharmiks/Man power of Cargo vehicles of Hyderabad Region of Greater Hyderabad Zone",
      "Last Date": "30.03.2024",
    },
    {
      "No.": "",
      Notification: "UPKEEP OF BUS STATIONS_Tender Form.",
      "Last Date": "",
    },
    {
      "No.": "",
      Notification: "GARAGE YARD_TENDER - FORM",
      "Last Date": "",
    },
    {
      "No.": "",
      Notification: "CARGO SHRAMIKS TENDER FORM",
      "Last Date": "",
    },
    {
      "No.": "",
      Notification: "ASST. TO MECHANICS TENDER FORM-2023",
      "Last Date": "",
    },
    {
      "No.": "",
      Notification: "ARTISANS_ TENDER - FORM",
      "Last Date": "",
    },
    {
      "No.": "02.",
      Notification:
        "Notification for Sweeping Cleaning & Washing of buses to the depots etc.,Bus stations Sweeping of old bus stations,Maintenance contract of Bus station including sweeping cleaning etc., and HSD oil topup to the depots, Asst. to the Mechanics , Garrage Sweeping works to the depot of Khammam Region",
      "Last Date": "03.04.2024",
    },
    {
      "No.": "",
      Notifications:
        "CORRIGENDUM - Maintenance garage sweeping , Cleaning etc., of KMM region - Deferred and Note the Revised dates.",
      "Last Date": "",
    },
    {
      "No.": "",
      Notifications:
        "CORRIGENDUM - Maintenance garage sweeping , Cleaning etc., of KMM region - Deferred and Note the Revised dates.",
      "Last Date": "",
    },
    {
      "No.": "",
      Notification: "a. Tender form garage sweeping of KMM region",
      "Last Date": "",
    },
    {
      "No.": "",
      Notification:
        "b. Washing of buses Tender forms OTHER THAN YLD DEPOT 24 BUSES (1)",
      "Last Date": "",
    },
    {
      "No.": "",
      Notification:
        "c. Washing of buses Tender forms OTHER THAN SPL DEPOT 26 BUSES",
      "Last Date": "",
    },
    {
      "No.": "",
      Notification:
        "TENDER FORM -SWEEPING & CLEANING AND MAINTENANCE OF FREE TOILETS",
      "Last Date": "",
    },
    {
      "No.": "",
      Notification: "Tender form for ASSTS TO MECHANICS BCM,KTDM, YLD",
      "Last Date": "",
    },
    {
      "No.": "",
      Notification: "T.FORM FOR Wash & SW BCM 33 BUSES",
      "Last Date": "",
    },
    {
      "No.": "",
      Notification:
        "Khammam Region sweeping cleaning & MOPPING Special type buses at Sathupally Depot",
      "Last Date": "",
    },
    {
      "No.": "",
      Notification: "KHAMMAM REGION HSD OIL TOP UP",
      "Last Date": "",
    },
    {
      "No.": "",
      Notification: "Khammam Old Bus Station Sweeping cleaning",
      "Last Date": "",
    },
    {
      "No.": "03.",
      Notification:
        "Notification for Sweeping, Cleaning, Washing of Blankets , HSD OIL Topup, Trimmer & AC Technician of Ranga Reddy Region",
      "Last Date": "26.03.2024",
    },
    {
      "No.": "",
      Notifications:
        "CORRIGENDUM - To Sweeping, Cleaning, Washing of Blankets , HSD OIL Topup, Trimmer & AC Technician of Ranga Reddy Region are Deferred and further dates will be informed in due course.",
      "Last Date": "",
    },
    {
      "No.": "04.",
      Notification:
        "Notification for Maintenance of Free Toilets at Miryalguda Bus Stations of Nalgonda Region",
      "Last Date": "04.04.2024",
    },
    {
      "No.": "",
      Notifications:
        "CORRIGENDUM - For Maintenance of Free Toilets at Miryalguda Bus Stations of Nalgonda Region",
      "Last Date": "",
    },
    {
      "No.": "",
      Notifications:
        "Tender FORM for Maintenance of Free Toilets at Miryalguda Bus Stations of Nalgonda Region",
      "Last Date": "",
    },
    {
      "No.": "05.",
      Notification:
        "Notification for Sweeping , Washing, Mopping, cleaning of bus stations/ Buses /Yards & maintenance of Greenary, HSD OIL topup , Attender in Rajadhani & Lahari, Maintenance of Free Toilets etc., of Adhilabad Region",
      "Last Date": "27.03.2024",
    },
    {
      "No.": "",
      Notifications:
        "CORRIGENDUM - To the tender for Sweeping , Washing, Mopping, cleaning of bus stations/ Buses /Yards & maintenance of Greenary, HSD OIL topup , Attender in Rajadhani & Lahari, Maintenance of Free Toilets etc., of Adhilabad Region",
      "Last Date": "",
    },
  ];

  return (
    <div className={styles.container}>
      <p className={styles.headingText}>OutSourcing Contracts</p>
      <Tables rows={data} />
    </div>
  );
};
export default OutSoursingControls;
