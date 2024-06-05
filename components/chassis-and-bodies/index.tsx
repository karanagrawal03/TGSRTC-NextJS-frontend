import Tables from "../tables"
import styles from './index.module.css'
const ChassisAndBodies=()=>{
    const chassisandbodies=[
        {
          "S.No": "01.",
          "Notification": "Notification for Fabrication of Different types of Bus Bodies",
          "Last Date": "27.04.2023"
        },
        {
          "S.No": "02.",
          "Notification": "Notification for Fabrication of certain sub-assemblies for 20 to 40 buses per month for different types of Bus Bodies at BBW,TSRTC,Miyapur and Painting works for new buses for 20 to 40 buses per month at BBW,TSRTC, Miyapur",
          "Last Date": "14.12.2023"
        }
      ]
      return(
        <div className={styles.container}>
        <p className={styles.headingText}>OutSourcing Contracts</p>
            <Tables rows={chassisandbodies} />
        </div>
      )
}
export default ChassisAndBodies;