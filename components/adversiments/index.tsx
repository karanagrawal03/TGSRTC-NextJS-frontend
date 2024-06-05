import Tables from "../tables"
import styles from './index.module.css'
const Adversiments=()=>{
    const adversiments=[
        {
          "S.No": "1.",
          "Notification": "E-Tender Document for Appointment of Region wise Advertising contractors for display of Ads through erection of Unipoles in the uncovered premises of the Bus stations of ADB region of the Corporation",
          "Last Date": "06.03.2024"
        },
        {
          "S.No": "2.",
          "Notification": "E-Tender document for appointment of Region wise Advertising contractor for display of ads  in covered area (under the roof) of Bus Stations of RR,MBNR,MDK,SEC Regions of the corporation",
          "Last Date": "06.03.2024"
        },
        {
          "S.No": "3.",
          "Notification": "E-TENDER DOCUMENT FOR APPOINTMENT OF  OUTLET WISE SERVICE PROVIDER FOR DISPENSING FUEL, OTHER ALLIED PRODUCTS SALES AND OTHER RELATED ACTIVITIES INCLUDING DAY TO DAY OPERATION AND MAINTENANCE OF FUEL OUTLET OF TSRTC",
          "Last Date": "06.03.2024"
        },
        {
          "S.No": "4.",
          "Notification": "E-Tender Document for Appointment of Advertising contractor for display of Ads through installation of Big LED Screens &   SMALL  digital TVs in the Jublee Bus Station (JBS)  of Rangareddy Region",
          "Last Date": "06.03.2024"
        },
        {
          "S.No": "5.",
          "Notification": "E-Tender Document for Appointment of Advertising contractors for display of Ads at MGBS through  fixation of Dynamic Digital Screens and Back lit Boards on Pillars for a period of five years",
          "Last Date": "06.03.2024"
        },
        {
          "S.No": "6.",
          "Notification": "E-Tender Document for Appointment of Advertising contractor for display of ads    through Big LED Screens &  Small digital TVs (LED/LCD/Plasama TVs) in the Bus Stations of various regions of the corporation",
          "Last Date": "06.03.2024"
        },
        {
          "S.No": "7.",
          "Notification": "E-Tender Document for Appointment of Region wise Advertising Contractors for display of Ads through provision and maintenance of Grab Handles with Advertisement Rights in the buses (including Hire) of various Regions (Except KMM & SEC)",
          "Last Date": "06.03.2024"
        },
        {
          "S.No": "8.",
          "Notification": "E-Tender Document for Appointment of Advertising contractorfor Procuring and supply of Ads for display on Face Freshener Sachets which are being distributed to the passengers of AC buses (Rajdhani, Lahari & Garuda Plus)of the Corporation for a period of five years.",
          "Last Date": "06.03.2024"
        },
        {
          "S.No": "9.",
          "Notification": "E-Tender Document for Appointment of Advertising contractor for display of Ads on the space earmarked above the stalls and additional space on walls (approx. 5000 sft) Mahatma Gandhi Bus Station (MGBS)  of Rangareddy Region",
          "Last Date": "06.03.2024"
        },
        {
          "S.No": "10.",
          "Notification": "E-Tender Document for Appointment of  Outlet Wise Service Provider for Obtaining No Objection Certificate (NOC)and Dispensing Fuel, Other Allied Products Sales and Other Related Activities Including Day to Day Operation and Maintenance of Fuel Outlet of TSRTC",
          "Last Date": ""
        }
      ]
      return(
        <div className={styles.container}>
        <p className={styles.headingText}>OutSourcing Contracts</p>
            <Tables rows={adversiments} />
        </div>
      )
}
export default Adversiments;