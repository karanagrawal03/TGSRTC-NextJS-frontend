import React from "react";
import Links from "../Links";
import AccordiansHeading from "../accordians-heading";
import BulletPoints from "../bullet-points";
import Tables from "../tables";

type typeOfTheObject = "link" | "heading" | "bullet points" | "table";

interface DataItem {
  type: typeOfTheObject;
  text?: string;
  data?: string[] | { [key: string]: string | number }[];
}

interface AccordianTabProps {
  array: DataItem[];
}
const AccordianTab: React.FC<AccordianTabProps> = ({ array }) => {
  return (
    <div>
      {array.map((item, index) => {
        switch (item.type) {
          case "link":
            return <Links key={index} text={item.text || ""} />;
          case "heading":
            return <AccordiansHeading key={index} heading={item.text || ""} />;
          case "bullet points":
            return <BulletPoints key={index} items={item.data as string[]} />;
          case "table":
            return (
              <Tables
                key={index}
                rows={item.data as { [key: string]: string | number }[]}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default AccordianTab;
