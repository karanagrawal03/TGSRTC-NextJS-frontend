import type { NextPage } from "next";
import FrameComponent7 from "../../components/logistics-home-banner";
import MainContent from "../../components/logistics-home-book-your-cargo";
import ContentRight from "../../components/logistics-home-about-logistics";
import FrameComponent6 from "../../components/logistics-home-business";
import styles from "./index.module.css";
import { useEffect } from "react";
import useFetch from "../../services/service";

const LogisticsTSRTCHome: NextPageLogisticsTSRTCHomeType = () => {
  const { data, doFetch } = useFetch();
  console.log(data)
  useEffect(() => {
    doFetch(`/logistics-landings?populate=*`);
  }, []);
  console.log(data)
  return (
    <div className={styles.logisticsTsrtcHome}>
       <FrameComponent7 data={data} />
      <MainContent data={data} />
      <ContentRight data={data} />
      <FrameComponent6 data={data} />
    </div>
  );
};

export default LogisticsTSRTCHome;
