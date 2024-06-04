import { useEffect } from "react";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";
import styles from "./index.module.css";

const AboutTSRTCLeadership = () => {
  const { data, doFetch } = useFetch();

  useEffect(() => {
    doFetch(`/about-tsrtc-leaderships?populate=*`);
  }, []);
  console.log(data);
  return (
    <div className={styles.aboutTsrtcLeadership}>
      <h1 className={styles.title}>{data?.title}</h1>
      <main className={styles.aboutTsrtcLeadershipContent}>
        <div className={styles.tsrtcLeadershipCards}>
          {data?.leadershipCards.map((leader, index) => (
            <div key={index} className={styles.leadershipCard}>
              <div className={styles.tsrtcLeadershipImagesParent}>
                <div className={styles.tsrtcLeadershipImages}>
                  <img
                    className={styles.leaderImage}
                    loading="lazy"
                    alt=""
                    src={UPLOADS_BASE_URL + leader?.leaderImage}
                  />
                </div>
              </div>
              <div className={styles.texts}>
                <h3 className={styles.leaderNameText}>{leader?.leaderName}</h3>
                <div className={styles.position}>
                  {leader?.leaderDesignation}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AboutTSRTCLeadership;
