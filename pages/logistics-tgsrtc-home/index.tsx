import type { NextPage } from "next";
import FrameComponent7 from "../../components/logistics-home-banner";
import MainContent from "../../components/logistics-home-book-your-cargo";
import ContentRight from "../../components/logistics-home-about-logistics";
import FrameComponent6 from "../../components/logistics-home-business";
import styles from "./index.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

const LogisticsTSRTCHome: NextPageLogisticsTSRTCHomeType = () => {
  return (
    <div className={styles.logisticsTsrtcHome}>
      <FrameComponent7 />
      <MainContent />
      <ContentRight />
      <FrameComponent6 />
    </div>
  );
};

export default LogisticsTSRTCHome;
