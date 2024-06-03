import { NextPage } from "next";
import styles from './index.module.css';

export type ReservationConnectivityType={
  connectivityTitle:string;
  connectivityListData:string[];
}
const ReservationConnectivity:NextPage<ReservationConnectivityType> = ({connectivityTitle,connectivityListData}) => {
  return (
    <div className={styles.bulletPointContainer1}>
      <div className={styles.title2}>
        <h2 className={styles.guidingPrinciplesOf1}>{connectivityTitle}</h2>
      </div>
      <div className={styles.list}>
        {connectivityListData?.map((each: any, index: number) => (
          <div className={styles.row}>
            <div className={styles.dot}></div>
            <div className={styles.listItem} key={index}>
              {each}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ReservationConnectivity;
