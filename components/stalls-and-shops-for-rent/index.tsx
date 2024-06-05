import Tables from "../tables"

const StallsAndShops=()=>{
    const stallsandshopsfrRent=[
        {
          "No.": "01.",
          "Notification": "Notification for e-tender & manual tender for Stalls, Canteen, Parking etc., in the bus stations of Nizamabad Region",
          "Last Date": "02.04.2024"
        },
        {
          "No.": "",
          "Notification": "CORRIGENDUM - To e-tender & manual tender for Stalls, Canteen, Parking etc., in the bus stations of Nizamabad Region",
          "Last Date": "12.06.2024"
        },
        {
          "No.": "02.",
          "Notification": "Notification for Auction & manual tender for Stalls, Canteen, Parking etc., in the bus stations of Secunderabad Region",
          "Last Date": "25.03.2024"
        },
        {
          "No.": "",
          "Notification": "Tender FORM for Stalls, Canteen, Parking etc., in the bus stations of Secunderabad Region"
        },
        {
          "No.": "",
          "Notification": "DESCRIPTION OF ITEMS TO BE SOLD/SERVICES OFFERED. for Stalls, Canteen, Parking etc., in the bus stations of Secunderabad Region"
        },
        {
          "No.": "03.",
          "Notification": "Notification for Manual , e-tender & Auction tender for Canteen, Stalls & Open spaces of various bus stations of Hyderabad Region",
          "Last Date": "27.03.2024"
        },
        {
          "No.": "04.",
          "Notification": "NOTIFICATION FOR TENDER DOCUMENT FOR APPOINTMENT OF LICENSEES FOR STALLS/ OPEN SPACES, AT VARIOUS POINTS, etc., IN THE BUS STATIONS OF HYDERABAD REGION",
          "Last Date": "27.03.2024"
        },
        {
          "No.": "4(a)",
          "Notification": "Tender FORM for Manual tender for Canteen, Stalls & Open spaces etc., of various bus stations of Hyderabad Region"
        },
        {
          "No.": "4(b)",
          "Notification": "Tender FORM for Auction tender for Canteen, Stalls & Open spaces etc., of various bus stations of Hyderabad Region"
        },
        {
          "No.": "4(c)",
          "Notification": "Tender FORM for e-tender for Canteen, Stalls & Open spaces etc., of various bus stations of Hyderabad Region"
        },
        {
          "No.": "05.",
          "Notification": "Notification for e-tender for Canteen, Stalls,Cycle-Scooter stands etc., in the vacant stalls and open spaces located in the bus stations of Khammam Region",
          "Last Date": "01.04.2024"
        },
        {
          "No.": "",
          "Notification": "CORRIGENDUM - e-tender for Canteen, Stalls,Cycle-Scooter stands etc., located in the bus stations of Khammam Region - Change of Dates"
        },
        {
          "No.": "",
          "Notification": "e- TENDER FORM AND TERMS & CONDITIONS of Khammam Region"
        },
        {
          "No.": "06.",
          "Notification": "Notification for Manual tender for Canteen, Stalls,Cycle-Scooter stands etc., in the vacant stalls and open spaces located in the bus stations of Khammam Region",
          "Last Date": "02.04.2024"
        },
        {
          "No.": "",
          "Notification": "MANUAL TENDER FORM AND TERMS CONDITIONS of Khammam Region"
        },
        {
          "No.": "",
          "Notification": "Khammam region drawings"
        },
        {
          "No.": "07.",
          "Notification": "Notification for manual tender for Pucca/Open/Canteens & Parking stalls in the Bus stations of Medak Region",
          "Last Date": "27.03.2024"
        },
        {
          "No.": "08.",
          "Notification": "Notification for e-tender for stalls, Open spaces etc., located in CBS , MGBS & JBS of Ranga Reddy Region",
          "Last Date": "03.04.2024"
        },
        {
          "No.": "",
          "Notification": "CORRIGENDUM - e-tender for stalls, Open spaces etc., located in CBS , MGBS & JBS of Ranga Reddy Region - Change of Dates"
        },
        {
          "No.": "",
          "Notification": "e-tender FORM for stalls, Open spaces etc., located in CBS , MGBS & JBS of Ranga Reddy Region"
        },
        {
          "No.": "09.",
          "Notification": "Notification for manual tender for Stalls, Open spaces, Two Wheeler/Four Wheeler parking stands etc., in various Bus Stations of Ranga Reddy Region",
          "Last Date": "02.04.2024"
        },
        {
          "No.": "",
          "Notification": "CORRIGENDUM - No.P4/797(1-Auction tender)/2024, Dt.25.03.2024 , Manual tender, Auction tender are deferred and further dates will be informed in due course."
        },
        {
          "No.": "",
          "Notification": "Manual tender APPLICATION FORM"
        },
        {
          "No.": "10.",
          "Notification": "Notification for Auction tender for Stalls, Open spaces, Two Wheeler/Four Wheeler parking stands etc., in various Bus Stations of Ranga Reddy Region",
          "Last Date": "01.04.2024"
        },
        {
          "No.": "",
          "Notification": "CORRIGENDUM - No.P4/797(1-Auction tender)/2024, Dt.25.03.2024 , Manual tender, Auction tender are deferred and further dates will be informed in due course."
        },
        {
          "No.": "",
          "Notification": "Auction tender APPLICATION FORM"
        },
        {
          "No.": "11.",
          "Notification": "Notification for manual tender for Stall, canteen, parking etc., in the bus stations of Nalgonda Region",
          "Last Date": "02.04.2024"
        },
        {
          "No.": "",
          "Notification": "Manual tender FORM Stall, canteen, parking etc., in the bus stations of Nalgonda Region"
        },
        {
          "No.": "",
          "Notification": "CORRIGENDUM - To manual Stall, canteen, parking etc., in the bus stations of Nalgonda Region",
          "Last Date": "13.06.2024"
        },
        {
          "No.": "12.",
          "Notification": "Notification for e-tender for Stall, canteen, parking etc., in the bus stations of Nalgonda Region",
          "Last Date": "02.04.2024"
        },
        {
          "No.": "",
          "Notification": "CORRIGENDUM - To e-tender for Stall, canteen, parking etc., in the bus stations of Nalgonda Region",
          "Last Date": "10.06.2024"
        },
        {
          "No.": "13.",
          "Notification": "Notification for Auction tender for Stall,Open spaces,canteen, parking etc., in the bus stations of Nalgonda Region",
          "Last Date": "04.04.2024"
        },
        {
          "No.": "",
          "Notification": "Auction tender FORM for Stall,Open spaces,canteen, parking etc., in the bus stations of Nalgonda Region"
        },
        {
          "No.": "",
          "Notification": "CORRIGENDUM - Auction for Stall,Open spaces,canteen, parking etc., in the bus stations of Nalgonda Region",
          "Last Date": "13.06.2024"
        },
        {
          "No.": "14.",
          "Notification": "Notification for Auction for Stall,Canteen, parking etc., in the bus stations of Adilabad Region",
          "Last Date": "03.04.204"
        },
        {
          "No.": "",
          "Notification": "CORRIGENDUM -Auction & Manual tender for Stall,Canteen, parking etc., in the bus stations of Adilabad Region"
        },
        {
          "No.": "15.",
          "Notification": "Notification for e- tender for Stall,Canteen, parking etc., in the bus stations of Adilabad Region",
          "Last Date": "28.03.2024"
        },
        {
          "No.": "",
          "Notification": "CORRIGENDUM - e-tender for Stall,Canteen, parking etc., in the bus stations of Adilabad Region"
        },
        {
          "No.": "16.",
          "Notification": "Notification for Manual for Stall,Canteen, parking etc., in the bus stations of Adilabad Region",
          "Last Date": "27.03.2024"
        },
        {
          "No.": "",
          "Notification": "CORRIGENDUM -Auction & Manual tender for Stall,Canteen, parking etc., in the bus stations of Adilabad Region"
        },
        {
          "No.": "17.",
          "Notification": "Notification for TGSRTC logistics (cargo and parcel service ) agents in the bus station erstwhile Nalgonda Region",
          "Last Date": "02.04.2024"
        },
        {
          "No.": "",
          "Notification": "Tender FORM for logistics (cargo and parcel service ) agents in the bus station erstwhile Nalgonda Region"
        },
        {
          "No.": "",
          "Notification": "CORRIGENDUM - TGSRTC logistics (cargo and parcel",
          "Last Date": "13.06.2024"
        }
      ]
    return(
        <div>
                <Tables rows={stallsandshopsfrRent} />
        </div>
    )
}
export default StallsAndShops;