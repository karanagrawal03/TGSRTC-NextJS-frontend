import { useState } from "react";
import AccordionItem from "../accordians";
import styles from "./index.module.css";
const TimingsTab = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const handleChange = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const data = [
    {
      name: "hello guru",
      info: [
        {
          type: "timings",
          data: ["00:40", "01:00", "02:00", "03:00"],
        },
      ],
    },
  ];
  return (
    <div>
      <div className={styles.eachAccordian}>
        <ol className={styles.studentConcessionalRoutePas}>
          {data.map((e, index) => (
            <AccordionItem
              key={index}
              name={e.name}
              info={e.info}
              expanded={expandedIndex === index}
              onChange={() => handleChange(index)}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};
export default TimingsTab;
