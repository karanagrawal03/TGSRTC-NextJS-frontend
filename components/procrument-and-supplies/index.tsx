import Tables from "../tables"
import styles from './index.module.css'
const ProcrumentAndSupplies=()=>{
    const data=[
        {
          "No.": "01.",
          "Notification": "Notification for TSRTC ZIVA Packaged Drinking Water Bottles with sizes of 250ml bottles as per the BIS specification IS:14543:2016 to deliver to TSRTC Zonal Stores,Uppal,Hyderabad and Zonal stores karimnagar from the manufacturers of Packaged Drinking Water Bottles.",
          "Last Date": "15.03.2024"
        },
        {
          "No.": "",
          "Notification": "TSRTC ZIVA water bottle Enquiry Form, Terms & Conditions"
        },
        {
          "No.": "",
          "Notification": "TSRTC ZIVA water bottle Specification"
        },
        {
          "No.": "1(a)",
          "Notification": "ADDENDUM - Water Bottles - procurement of TSRTC ZIVA packaged drinking water bottles 250ml."
        }
      ]
      return(
        <div className={styles.container}>
                <p className={styles.headingText}>OutSourcing Contracts</p>
          <Tables rows={data} />
        </div>
      )
                    
}
export default ProcrumentAndSupplies;