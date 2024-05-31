import type { NextPage } from "next";
import styles from "./index.module.css";
import Carousal from "../components/Carosal/Carousal";
import BookYourTicket from "../components/BookYourTicket/BookYourTicket";
import About from "../components/About/About";
import HomeHero from "../components/HomeHero/HomeHero";
import HomeBookYourServices from "../components/HomeBookYourServices/HomeBookYourServices";
import HomeNewsUpdates from "../components/HomeNewsUpdates/HomeNewsUpdates";
import HomeGamyamApp from "../components/HomeGamyamApp/HomeGamyamApp";

const Homepage: NextPage = () => {
  return (
    <div className={styles.homepage}>
      <Carousal
        children={[
          <HomeHero />,
          <HomeHero />,
          <HomeHero />,
          <HomeHero />,
          <HomeHero />,
        ]}
        secondary={true}
      />
      <BookYourTicket />
      <HomeBookYourServices />
      <HomeGamyamApp />
      <About />
      <HomeNewsUpdates />
    </div>
  );
};

export default Homepage;
