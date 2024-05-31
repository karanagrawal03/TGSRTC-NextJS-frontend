import { useState } from "react";
import AccordionItem from "../accordians";
import styles from "./index.module.css";
import { AirportPushpakData } from "../../constants/AirPortPushpakRouteData";


const TimingsTab = () => {
  const [expandedIndices, setExpandedIndices] = useState<(number | null)[]>(
    Array(AirportPushpakData.length).fill(null)
  );

  const handleChange = (cardIndex: number, timingIndex: number) => {
    setExpandedIndices((prevIndices) =>
      prevIndices.map((expandedIndex, idx) =>
        idx === cardIndex
          ? expandedIndex === timingIndex
            ? null
            : timingIndex
          : expandedIndex
      )
    );
  };

  return (
    <div className={styles.container}>
      {AirportPushpakData.map((card, cardIndex) => (
        <div key={cardIndex} className={styles.card}>
          <div className={styles.routesContainer}>
            {card.routes.map((route, index) => (
              <div className={styles.valuesContainer} key={index}>
                <p className={styles.name}>{route.name}</p>
                <p className={styles.value}>{route.value}</p>
              </div>
            ))}
          </div>
          <div className={styles.eachAccordian}>
            <ol className={styles.studentConcessionalRoutePas}>
              {card.timings.map((timing, timingIndex) => (
                <AccordionItem
                  key={timingIndex}
                  name={timing.name}
                  info={timing.info}
                  containerClassName={styles.accordianTabStyles}
                  expanded={expandedIndices[cardIndex] === timingIndex}
                  onChange={() => handleChange(cardIndex, timingIndex)}
                />
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimingsTab;
