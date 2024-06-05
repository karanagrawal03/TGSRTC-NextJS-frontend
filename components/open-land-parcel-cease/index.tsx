import Tables from "../tables";
import styles from './index.module.css'
const OpenLandParcelCease=()=>{
    const data=[
        {
          "S.No": "1",
          "Notification": "Notification for Leasing out Open Land Parcels in prime locations in Hyderabad & Secunderabad twin cities at Kachiguda, Medchal, Shamirpet, Chengicharla, Rasheedgud-1, Rasheedguda-2(Shamshabad), Turkayamjal-1, Turkayamjal-2",
          "Last Date": "15.03.2024"
      
        },
        {
          "S.No": "2",
          "Notification": "CORRIGENDUM - Monetization of open lands located at Kachiguda, Medchal, Shamirpet, Hakimpet, Chengicherla, Turkayamjal-2 and Rasheedguda -1 &2 – Queries received from Bidders in pre-bid meeting on 27.02.2024 – Communication of approval",
          "Last Date": ""
       
        }
      ]
      
    return(
      <div className={styles.container}>
      <p className={styles.headingText}>OutSourcing Contracts</p>
          <Tables rows={data} />
        </div>
    )
}
export default OpenLandParcelCease;