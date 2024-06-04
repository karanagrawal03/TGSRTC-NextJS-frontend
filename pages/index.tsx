import type { NextPage } from "next";
import styles from "./index.module.css";
import Carousal from "../components/Carosal";
import BookYourTicket from "../components/BookYourTicket/BookYourTicket";
import About from "../components/About/About";
import HomeHero from "../components/HomeHero/HomeHero";
import HomeBookYourServices from "../components/HomeBookYourServices/HomeBookYourServices";
import HomeNewsUpdates from "../components/HomeNewsUpdates/HomeNewsUpdates";
import HomeGamyamApp from "../components/HomeGamyamApp/HomeGamyamApp";
import {
  HYDERABAD,
  BANGALORE,
  CHENNAI,
  VIJAYAWADA,
  SRISAILAM,
  TIRUPATI,
  HERO_TITLE,
  BHADRACHALAM,
  KARIMNAGAR,
  SHIRIDI,
} from "../constants";

const routes = [
  { from: HYDERABAD, to: BANGALORE },
  { from: BANGALORE, to: VIJAYAWADA },
  { from: VIJAYAWADA, to: CHENNAI },
  { from: CHENNAI, to: SRISAILAM },
  { from: SRISAILAM, to: BHADRACHALAM },
  { from: BHADRACHALAM, to: SHIRIDI },
  { from: SHIRIDI, to: TIRUPATI },
  { from: TIRUPATI, to: KARIMNAGAR },
  { from: KARIMNAGAR, to: HYDERABAD }
];


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
