import { ABOUT_CORPORATION_LINK, ABOUT_EVENTS_LINK, ABOUT_IT_LINK, ABOUT_LEADERSHIP_LINK, ABOUT_LINK, BUS_PASS_FAQ_LINK, BUS_PASS_GENERAL_LINK, BUS_PASS_LINK, BUS_PASS_OTHER_LINK, BUS_PASS_STUDENT_LINK, CONTACT_US_LINK, HOSPITAL_LINK, LOGISTICS_CONTACTS_LINK, LOGISTICS_LINK, LOGISTICS_RATES_LINK, RESERVATIONS_BUS_LINK, RESERVATIONS_CONCESSION_LINK, RESERVATIONS_CONTRACT_LINK, RESERVATIONS_FAQ_LINK, RESERVATIONS_LINK, RESERVATIONS_POINTS_LINK, RESERVATIONS_SPL_BUS_LINK, RESERVATIONS_TOURISM_LINK, TENDERS_LINK } from ".";

export interface Sublinks {
  sublinkDisplayName: string;
  sublink: string;
}

export interface HeaderConfig {
  displayName: string;
  isNavLink: boolean;
  link?: string;
  subLinks?: Sublinks[];
  dropDown?: number;
}

export const headerData: HeaderConfig[] = [
  {
    displayName: "Home",
    isNavLink: true,
    link: "/",
  },
  {
    displayName: "Reservations",
    isNavLink: false,
    dropDown: 0,
    subLinks: [
      {
        sublinkDisplayName: "Reservations Home",
        sublink: RESERVATIONS_LINK,
      },
      {
        sublinkDisplayName: "Tourism",
        sublink: RESERVATIONS_TOURISM_LINK,
      },
      {
        sublinkDisplayName: "Bus on Contract Rates",
        sublink: RESERVATIONS_CONTRACT_LINK,
      },
      {
        sublinkDisplayName: "Special Bus Timings",
        sublink: RESERVATIONS_SPL_BUS_LINK,
      },
      {
        sublinkDisplayName: "Concession Schemes",
        sublink: RESERVATIONS_CONCESSION_LINK,
      },
      {
        sublinkDisplayName: "Reservation Points",
        sublink: RESERVATIONS_POINTS_LINK,
      },
      {
        sublinkDisplayName: "Bus Details",
        sublink: RESERVATIONS_BUS_LINK,
      },
      {
        sublinkDisplayName: "FAQs",
        sublink: RESERVATIONS_FAQ_LINK,
      },
    ],
  },
  {
    displayName: "Logistics",
    isNavLink: false,
    dropDown: 0,
    subLinks: [
      {
        sublinkDisplayName: "Logistics Home",
        sublink: LOGISTICS_LINK,
      },
      {
        sublinkDisplayName: "Contacts",
        sublink: LOGISTICS_CONTACTS_LINK,
      },
      {
        sublinkDisplayName: "Rates and Tariffs Contacts",
        sublink: LOGISTICS_RATES_LINK,
      },
    ],
  },
  {
    displayName: "Bus Passes",
    isNavLink: false,
    dropDown: 0,
    subLinks: [
      {
        sublinkDisplayName: "Bus Passes Home",
        sublink: BUS_PASS_LINK,
      },
      {
        sublinkDisplayName: "Student Passes",
        sublink: BUS_PASS_STUDENT_LINK,
      },
      {
        sublinkDisplayName: "General Commuter Pass",
        sublink: BUS_PASS_GENERAL_LINK,
      },
      {
        sublinkDisplayName: "Other Passes",
        sublink: BUS_PASS_OTHER_LINK,
      },
      {
        sublinkDisplayName: "FAQs",
        sublink: BUS_PASS_FAQ_LINK,
      },
    ],
  },
 
  {
    displayName: "Tenders",
    isNavLink: true,
    link: TENDERS_LINK,
  },
  {
    displayName: "TGSRTC Hospital",
    isNavLink: true,
    link: HOSPITAL_LINK,
  },
  {
    displayName: "About",
    isNavLink: false,
    dropDown: 0,
    subLinks: [
      {
        sublinkDisplayName: "About Home",
        sublink: ABOUT_LINK,
      },
      {
        sublinkDisplayName: "IT Initiatives",
        sublink: ABOUT_IT_LINK,
      },
      {
        sublinkDisplayName: "TGSRTC Leadership",
        sublink: ABOUT_LEADERSHIP_LINK,
      },
      {
        sublinkDisplayName: "The Corporation",
        sublink: ABOUT_CORPORATION_LINK,
      },
      {
        sublinkDisplayName: "Events & Awards",
        sublink: ABOUT_EVENTS_LINK,
      },
    ],
  },
  {
    displayName: "Contact Us",
    isNavLink: true,
    link: CONTACT_US_LINK,
  },
];

