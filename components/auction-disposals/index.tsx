import Tables from "../tables";
import styles from './index.module.css'
const AuctionDisposals = () => {
  const autionsdiopsals = [
    {
      "S.No": "1.",
      Notification:
        "Notification for Scrap Vehicles/Power vehicles/Bus Bodies/materials /Tyres/Tyre material/tubes/Flaps/Rubber buffing power/Machinery/Obsolete surplus spare parts/ Serviceable Major Units etc., available at Karimnagar",
      "Last Date": "27.03.2024",
    },
    {
      "S.No": "2.",
      Notification:
        "Notification for Scrap Vehicles/Power vehicles/Bus Bodies/materials /Tyres/Tyre material/tubes/Flaps/Rubber buffing power/Machinery/Obsolete surplus spare parts/ Serviceable Major Units etc., available at HZ/Uppal",
      "Last Date": "20.03.2024",
    },
  ];
  return (
    <div className={styles.container}>
    <p className={styles.headingText}>OutSourcing Contracts</p>
      <Tables rows={autionsdiopsals} />
    </div>
  );
};
export default AuctionDisposals;
