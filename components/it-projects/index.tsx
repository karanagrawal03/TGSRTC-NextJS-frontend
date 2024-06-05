import Tables from "../tables"
import styles from './index.module.css'
const ITPrjects=()=>{
    const ITprojects=[
        {
          "No.": "01.",
          "Notification": "NOTIFICATION FOR TENDER FOR IMPLEMENTATION OF DRIVER MONITORING SYSTEM(DMS) & ADVANCED DRIVER ASSISTANCE SYSTEM(ADAS) IN TSRTC BUSES",
          "Last Date": "27.02.2024"
        },
        {
          "No.": "02.",
          "Notification": "Notification for Proposal for Selection of Service Provider for Implementation of Automatic Fare Collection System (AFCS) in Telangana State Road Transport Corporation",
          "Last Date": "03.02.2024"
        },
        {
          "No.": "2(a)",
          "Notification": "Amendment No. 1 - AMENDMENTS TO THE TENDER NO. SM-III(IT)/AFCS (01)/2023-IT, dt: 11-01-2024 FOR IMPLEMENTATION OF AUTOMATIC FARE COLLECTION SYSTEM IN TSRTC"
        },
        {
          "No.": "2(b)",
          "Notification": "Amendment No. 2 - AMENDMENTS TO THE TENDER NO. SM-III(IT)/AFCS (01)/2023-IT, KEY EVENTS & DATES",
          "Last Date": "09.02.2024"
        },
        {
          "No.": "2(c)",
          "Notification": "AMENDMENTS TO THE TENDER NO. SM-III(IT)/DMS(01)/2023-IT, dt: 10-02-2024 FOR implementation of Advanced Driver Assistance System (ADAS) and Driver Monitoring System (DMS)"
        }
      ]
    return(
        <div className={styles.container}>
        <p className={styles.headingText}>OutSourcing Contracts</p>
            <Tables rows={ITprojects} />
        </div>
    )
}
export default ITPrjects