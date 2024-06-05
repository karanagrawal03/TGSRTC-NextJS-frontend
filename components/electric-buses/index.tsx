import Tables from "../tables"
import styles from './index.module.css'
const ElectricBuses=()=>{
    const elevtricbuses= [
        {
          "S.No": "01",
          "Notification": "Notification for Request for Proposal (RFP) for appointment of Operator for Procurement, Supply, Operation and Maintenance of Electric Buses for operation of Inter-City / Intra-City Bus Services on the specified routes on Gross Cost Contract Model.",
          "Last Date": "27.10.2022"
        },
        {
          "S.No": "(a)",
          "Notification": "BID SCHEDULE AND DETAILS - For Electric Buses for operation of Inter-City / Intra-City Bus Services on the specified routes on Gross Cost Contract Model.",
          "Last Date": ""
        }
      ]
      return(
        <div className={styles.container}>
        <p className={styles.headingText}>OutSourcing Contracts</p>
            <Tables rows={elevtricbuses} />
        </div>
      )
}
export default ElectricBuses;