import Tables from "../tables"
import styles from './index.module.css'
const HireBus=()=>{
    const hirebus=[
        {
          "S.No": "1",
          "Notification": "Tender Notification for supply of  Metro Express, City Ordinary, City Suburban and City Mofussil  type buses under HIRE SCHEME for operation on the identified routes by the  Regions of Gr.HYD ZONE, TSRTC",
          "Last Date": "03.01.2024"
        },
        {
          "S.No": "1(a)",
          "Notification": "Tender Schedule for supply of 340 buses of 2023-Model  Bharat Stage-VI - OBD-II or later model make new Metro Express, City Ordinary, City Suburban and City Mofussil   type buses to TSRTC under Hire Scheme to ply on identified routes",
          "Last Date": "03.01.2024"
        },
        {
          "S.No": "1(b)",
          "Notification": " Tender Application for Metro Express, City Ordinary, City Suburban and City Mofussil type buses."
        },
        {
          "S.No": "1(c)",
          "Notification": "Floor rate charts for   Metro Express, City Ordinary, City Suburban and City Mofussil type buses."
        },
        {
          "S.No": "1(d)",
          "Notification": "(1).Specifications of PHB City Ordinary, Metro Express - 2023, (2.)DRGS-CITYORD-2023, (3).DRGS-MEXP--2023 (4).All seat frames and colour schemes Designes"
        },
        {
          "S.No": "1(e)",
          "Notification": "Approved fabricators list - 2023"
        },
        {
          "S.No": "1(f)",
          "Notification": "The Prospective Entrepreneur shall draw Demand Draft towards Application fee and Caution deposit separately in favour of CURRENT A/C of Dy. Chief Accounts Officer, TSRTC, Secunderabad Region."
        },
        {
          "S.No": "1(g)",
          "Notification": "Pre- bid meeting with entrepreneurs",
          "Last Date": "28.12.2023",
          "Note": "For any query/Clarification please contact Asst.Traffic Manager(Planning) - 9100998230"
        }
      ]
    return(
        <div className={styles.container}>
        <p className={styles.headingText}>OutSourcing Contracts</p>
            <Tables rows={hirebus} />
        </div>
    )
}
export default HireBus;