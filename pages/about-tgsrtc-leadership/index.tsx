import { useEffect } from "react";
import useFetch, { UPLOADS_BASE_URL } from "../../services/service";
import styles from "./index.module.css";
import AnimationBus from "../../components/animation-bus";
import AnimationBusMobile from "../../components/animation-bus-mobile";

type LeadershipCard = {
  leaderImage: string;
  leaderName: string;
  leaderDesignation: string;
};

type Data = {
  title: string;
  leadershipCards: LeadershipCard[];
};

const AboutTSRTCLeadership = () => {
  const { data, doFetch } = useFetch<Data>();

  useEffect(() => {
    doFetch(`/about-tsrtc-leaderships?populate=*`);
  }, []);

  const { title, leadershipCards } = data || {};

  return (
    <>
      <AnimationBus />
      <AnimationBusMobile />
      <div className={styles.aboutTsrtcLeadership}>
        <h1 className={styles.title}>{title}</h1>
        <main className={styles.aboutTsrtcLeadershipContent}>
          <div className={styles.tsrtcLeadershipCards}>
            {leadershipCards?.map((leader, index) => (
              <div key={index} className={styles.leadershipCard}>
                <div className={styles.tsrtcLeadershipImagesParent}>
                  <div className={styles.tsrtcLeadershipImages}>
                    <img
                      className={styles.leaderImage}
                      loading="lazy"
                      alt={`Image of ${leader.leaderName}`}
                      src={UPLOADS_BASE_URL + leader.leaderImage}
                    />
                  </div>
                </div>
                <div className={styles.texts}>
                  <h3 className={styles.leaderNameText}>{leader.leaderName}</h3>
                  <div className={styles.position}>
                    {leader.leaderDesignation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default AboutTSRTCLeadership;
