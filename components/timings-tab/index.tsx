import { useState } from "react";
import AccordionItem from "../accordians";
import styles from "./index.module.css";

interface TimingsTabProps {
  data: {
    routes: { name: string; value: string }[];
    timings: { name: string; info: { type: string; data: string[] }[] }[];
  }[];
}

const TimingsTab: React.FC<TimingsTabProps> = ({ data }) => {
  const [expandedIndices, setExpandedIndices] = useState<(number | null)[]>(
    Array(data.length).fill(null)
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
  const data3 = [
    {
      routes: [
        { name: "Route", value: "AL" },
        { name: "From", value: "JBS" },
        { name: "To", value: "Tarnaka" },
        { name: "Via", value: "Uppal" },
      ],
      timings: [
        {
          name: "Early morning before 6 am (10)",
          info: [
            {
              type: "timings",
              data: ["00:00", "01:00", "02:00"],
            },
          ],
        },
        {
          name: "Morning 6 am to 12 pm (20)",
          info: [
            {
              type: "timings",
              data: ["06:00", "07:00", "08:00"],
            },
          ],
        },
        {
          name: "Afternoon 12 pm to 6 pm (15)",
          info: [
            {
              type: "timings",
              data: ["12:00", "13:00", "14:00"],
            },
          ],
        },
        {
          name: "Evening 6 pm to 12 am (25)",
          info: [
            {
              type: "timings",
              data: ["18:00", "19:00", "20:00"],
            },
          ],
        },
      ],
    },
    {
      routes: [
        { name: "Route", value: "AL" },
        { name: "From", value: "JBS" },
        { name: "To", value: "Tarnaka" },
        { name: "Via", value: "Uppal" },
      ],
      timings: [
        {
          name: "Early morning before 6 am (10)",
          info: [
            {
              type: "timings",
              data: ["00:00", "01:00", "02:00"],
            },
          ],
        },
        {
          name: "Morning 6 am to 12 pm (20)",
          info: [
            {
              type: "timings",
              data: ["06:00", "07:00", "08:00"],
            },
          ],
        },
        {
          name: "Afternoon 12 pm to 6 pm (15)",
          info: [
            {
              type: "timings",
              data: ["12:00", "13:00", "14:00"],
            },
          ],
        },
        {
          name: "Evening 6 pm to 12 am (25)",
          info: [
            {
              type: "timings",
              data: ["18:00", "19:00", "20:00"],
            },
          ],
        },
      ],
    },
    {
      routes: [
        { name: "Route", value: "AL" },
        { name: "From", value: "JBS" },
        { name: "To", value: "Tarnaka" },
        { name: "Via", value: "Uppal" },
      ],
      timings: [
        {
          name: "Early morning before 6 am (10)",
          info: [
            {
              type: "timings",
              data: ["00:00", "01:00", "02:00"],
            },
          ],
        },
        {
          name: "Morning 6 am to 12 pm (20)",
          info: [
            {
              type: "timings",
              data: ["06:00", "07:00", "08:00"],
            },
          ],
        },
        {
          name: "Afternoon 12 pm to 6 pm (15)",
          info: [
            {
              type: "timings",
              data: ["12:00", "13:00", "14:00"],
            },
          ],
        },
        {
          name: "Evening 6 pm to 12 am (25)",
          info: [
            {
              type: "timings",
              data: ["18:00", "19:00", "20:00"],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      {data3.map((card, cardIndex) => (
        <div key={cardIndex} className={styles.card}>
          <div className={styles.routesContainer}>
            {card.routes.map((route, index) => (
              <div key={index}>
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
