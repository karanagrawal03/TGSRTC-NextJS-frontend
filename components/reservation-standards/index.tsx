import { NextPage } from 'next';
import styles from './index.module.css';

export type ReservationStandardsType={
  TGSRTCDeliveringExcellenceTitle:string;
  TGSRTCDeliveringExcellenceSubtitle:string;
  TGSRTCDeliveringExcellenceContent:string;
}

const ReservationStandards:NextPage<ReservationStandardsType>=({TGSRTCDeliveringExcellenceTitle,TGSRTCDeliveringExcellenceSubtitle,TGSRTCDeliveringExcellenceContent})=>{
    return(
        <div className={styles.frameWrapper}>
        <div className={styles.frameDiv}>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent1}>
              <div className={styles.tgsrtcWrapper}>
                <h1 className={styles.tgsrtc}>{TGSRTCDeliveringExcellenceTitle}</h1>
              </div>
              <h1 className={styles.settingStandardsDelivering}>
                {TGSRTCDeliveringExcellenceSubtitle}
              </h1>
            </div>
          </div>
          <p className={styles.tgsrtcIsCommittedTo}>
           {TGSRTCDeliveringExcellenceContent}
          </p>
        </div>
      </div>
    )
}
export default ReservationStandards;