import Tables from "../tables"
import styles from './index.module.css'
const CivilWorks=()=>{
    
  const civilworks=[
    {
      "S.No": "1",
      "Notification": "Notification for modernizatio of bus stations, Improvement to electrification for bus stations, Providing CC pavements etc., in various bus depots -",
      "Last Date": "12.02.2024"
    },
    {
      "Notification": "AMENDMENT NO(1) to Tender notice no.08/CCE/2023-2024, Dt.31.01.2024 for modernizatio of bus stations, Improvement to electrification for bus stations, Providing CC pavements etc., in various bus depots"
    }
  ]
    return(
        <div className={styles.container}>
        <p className={styles.headingText}>OutSourcing Contracts</p>
            <Tables rows={civilworks} />
        </div>
    )
}
export default CivilWorks;