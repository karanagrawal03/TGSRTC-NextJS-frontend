import type { NextPage } from "next";
import Header1 from "../../components/header1";
import FrameComponent from "../../components/frame-component";
import styles from "./index.module.css";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import accordian from "../public/accordian-dropdown.svg";
import AccordionItem from "../../components/accordians";
import {
  APPLY_AND_RENEW,
  KNOW_MORE_ABOUT_STUDENT_PASSES,
  STUDENT_PASSES,
} from "../../constants";
import Header from "../../components/header";
const BusPassStudentPasses: NextPageBusPassStudentPassesType = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [width, setWidth] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth > 750);
      console.log(width);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleChange = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const array = [
    {
      name: "student",
      info: [
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
      ],
    },
    {
      name: "student2",
      info: [
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
      ],
    },
    {
      name: "student3",
      info: [
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
      ],
    },
    {
      name: "student4",
      info: [
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
      ],
    },
  ];

  return (
    <div className={styles.busPassStudentPasses}>
      <Header />
      <section className={styles.busPassesHeroStudentPasses}>
        {width ? (
          <img
            className={styles.bgIcon}
            alt="bus-pass-main-section"
            src="/bus-pass-main-section@2x.png"
          />
        ) : (
          <img
            className={styles.bgIconmobile}
            alt="mobile-image"
            src="/mobile-bus-pass-bg.png"
          />
        )}
        <div className={styles.contentWrapper}>
          <h1 className={styles.studentPasses}>{STUDENT_PASSES}</h1>
          <h2 className={styles.applyRenew}>{APPLY_AND_RENEW}</h2>
        </div>
      </section>
      <section className={styles.busPassStudentPasses1}>
        <div className={styles.knowMoreAboutStudentPassesWrapper}>
          <h2 className={styles.knowMoreAbout}>
            {KNOW_MORE_ABOUT_STUDENT_PASSES}
          </h2>
        </div>
        <div className={styles.eachAccordian}>
          <ol className={styles.studentConcessionalRoutePas}>
            {array.map((e, index) => (
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
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default BusPassStudentPasses;
