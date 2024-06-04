import type { NextPage } from "next";
import styles from "./index.module.css";
import Carousal from "../components/Carosal";
import BookYourTicket from "../components/BookYourTicket/BookYourTicket";
import About from "../components/About/About";
import HomeHero from "../components/HomeHero/HomeHero";
import HomeBookYourServices from "../components/HomeBookYourServices/HomeBookYourServices";
import HomeNewsUpdates from "../components/HomeNewsUpdates/HomeNewsUpdates";
import HomeGamyamApp from "../components/HomeGamyamApp/HomeGamyamApp";
import { HERO_TITLE } from "../constants";
import { routes } from "../constants/book-your-tickets-routes";

const homeHeroTitle = [
  { title: HERO_TITLE },
  { title: HERO_TITLE },
  { title: HERO_TITLE },
  { title: HERO_TITLE },
  { title: HERO_TITLE },
];

const Homepage: NextPage = () => {
  return (
    <div className={styles.homepage}>
      <Carousal
        children={homeHeroTitle.map((item, index) => (
          <HomeHero key={index} title={item.title} />
        ))}
        secondary={true}
      />
      <BookYourTicket routes={routes} />
      <HomeBookYourServices />
      <HomeGamyamApp />
      <About />
      <HomeNewsUpdates />
    </div>
  );
};

export default Homepage;
