import Tables from "../tables"
import styles from './index.module.css'
const OtherContracts=()=>{
    const otherContracts=[
        {
          "S.No": "01",
          "Notification": "Notification for Manual Tender Notification for tenders for the work \"Providing Infrastructure facilities at temporary Bus Terminals Medaram, Tadwai, Kamaram, Narlapur/Chintal X Roads and other Jathara Operating points for Medaram Jathara-2024\"",
          "Last Date": "13.12.2023"
        },
        {
          "S.No": "02",
          "Notification": "Notification for Fabrication of certain sub-assemblies for 20 to 40 buses per month for different types of Bus Bodies at BBW,TSRTC,Miyapur and Painting works for new buses for 20 to 40 buses per month at BBW,TSRTC, Miyapur",
          "Last Date": "14.12.2023"
        }
      ]
    return(
        <div className={styles.container}>
        <p className={styles.headingText}>OutSourcing Contracts</p>
            <Tables rows={otherContracts} />
        </div>
    )
}
export default OtherContracts;