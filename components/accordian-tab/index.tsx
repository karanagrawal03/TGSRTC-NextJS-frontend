import React from "react";
import Links from "../Links";
import AccordiansHeading from "../accordians-heading";
import BulletPoints from "../bullet-points";
import Tables from "../tables";

interface DataItem {
  type: "link" | "heading" | "bullet points" | "table";
  text?: string;
  data?: string[] | { [key: string]: string | number }[];
}

interface AccordianTabProps {
  array: { data: DataItem[] }[];
}
const AccordianTab: React.FC<AccordianTabProps> = ({ array }) => {
  const array2 = [
    {
      data: [
        {
          type: "link",
          text: "https://online.tsrtcpass.in/counterstupass.do?prm=hyd",
        },
        {
          type: "heading",
          text: "a. Student Quarterly Route Bus Pass",
        },
        {
          type: "bullet points",
          data: [
            "Eligible for the Students above 12 years age.",
            "This Bus Pass can be issued for the distance upto 4 KMs, 8 KMs, 12 KMs, 18 KMs & 22 KMs with concessional tariff as furnished in below table.",
          ],
        },
        {
          type: "table",
          data: [
            {
              DistanceInKms: "Distance In Kms",
              Name: "Name",
            },
            {
              DistanceInKms: 45,
              Name: 450,
            },
            {
              DistanceInKms: 50,
              Name: 450,
            },
            {
              DistanceInKms: 0,
              Name: 450,
            },
            {
              DistanceInKms: 9,
              Name: 450,
            },
          ],
        },
        {
          type: "bullet points",
          data: [
            "Validity period – for 3 months (Quarterly).",
            "Applicant can apply online at www.online.tsrtcpass.in",
          ],
        },
      ],
    },
  ];
  console.log(array[0])

  return (
    <div>
      {array[0].data.map((item, index) => {
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
