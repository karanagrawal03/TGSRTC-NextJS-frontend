import Tables from "../tables"
import styles from './index.module.css'
interface AdvertisementsData{
  advertisementsAndFuelsText:string;
  advertisementsAndFuelsData:any;
}
const Adversiments:React.FC<AdvertisementsData>=({advertisementsAndFuelsData,advertisementsAndFuelsText})=>{
      return(
        <div className={styles.container}>
        <p className={styles.headingText}>{advertisementsAndFuelsText}</p>
            <Tables rows={advertisementsAndFuelsData} rowClassName={styles.rowClass} containerClassName={styles.tableContainer}/>
        </div>
      )
}
export default Adversiments;