import { useRouter } from 'next/router';
import Link from 'next/link';
import type { NextPage } from 'next';
import styles from './header.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  HOME,
  RESERVATION_LABEL,
  TOURISM,
  BUS_CONTRACT_RATES,
  CONCESSION_SCHEMES,
  RESERVATION_POINTS,
  SPECIAL_BUS_TIMINGS,
  RESERVATION_FAQ,
  BUS_DETAILS,
  GENERAL_PASS,
  LOGISTICS,
  LOGISTICS_CONTACTS,
  LOGISTICS_FAQ,
  OTHER_PASSES,
  RT_CONTACTS,
  STUDENT_PASSES,
  ABOUT,
  CONTACT_US,
  CORPORATION,
  EVENTS_AWARDS,
  IT_INITIATIVES,
  LEADERSHIP,
  TENDERS,
  TGSRTC_HOSPITAL,
  BUS_PASSES,
  RESERVATIONS_LINK,
  RESERVATIONS_TOURISM_LINK,
  RESERVATIONS_CONTRACT_LINK,
  LOGISTICS_LINK,
  RESERVATIONS_BUS_LINK,
  RESERVATIONS_FAQ_LINK,
  RESERVATIONS_SPL_BUS_LINK,
  RESERVATIONS_POINTS_LINK,
  RESERVATIONS_CONCESSION_LINK,
  LOGISTICS_CONTACTS_LINK,
  LOGISTICS_RATES_LINK,
  BUS_PASS_LINK,
  BUS_PASS_GENERAL_LINK,
  BUS_PASS_STUDENT_LINK,
  BUS_PASS_OTHER_LINK,
  BUS_PASS_FAQ_LINK,
  ABOUT_LINK,
  ABOUT_IT_LINK,
  ABOUT_LEADERSHIP_LINK,
  ABOUT_CORPORATION_LINK,
  ABOUT_EVENTS_LINK,
  TENDERS_LINK,
  HOSPITAL_LINK,
  CONTACT_US_LINK
} from '../constants';

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = '' }) => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // scroll floating header 

  const flotingHeader = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 100) {
        if (window.scrollY > lastScrollY) {
          // Scroll Down
          setShowHeader(false);
        } else {
          // Scroll Up
          setShowHeader(true);
        }
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', flotingHeader);

      return () => {
        window.removeEventListener('scroll', flotingHeader);
      };
    }
  }, [lastScrollY]);

  // Mobile tab toggle menu bar 

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${className} ${showHeader ? '' : styles.headerHidden}`}>
      <>
        <Link href="/" className={styles.headerTabLink}>
          <div className={styles.tsrtcLogo}>
            <img
              className={styles.tsrtcLogoIcon}
              loading="lazy"
              alt="tsrtc-logo"
              src="/tsrtc-logo@2x.png"
            />
            <div className={styles.tsrtcHeaderTextLogo}>
              <img
                className={styles.icon}
                loading="lazy"
                alt="tsrtc-header-text-logo"
                src="/header-text-logo.png"
              />
              <img
                className={styles.telanganaStateRoadTransport}
                loading="lazy"
                alt="tsrtc-logo"
                src="/telangana-state-road-transport-corporation1.png"
              />
            </div>
          </div>

          <div className={styles.tsrtcMobileLogoIconSection}>
            <img
              className={styles.tsrtcMobileLogoIcon}
              loading="lazy"
              alt="tsrtc-mobile-logo"
              src="/tsrtc-mobile-logo@2x.png"
            />
          </div>
        </Link>
      </>

      <div className={styles.tabContainer}>
        <div className={styles.headerTabLink}>
          <Link href="/" className={isActive('/') ? styles.activeTab : styles.navTabs}>
            <span className={styles.reservations}>{HOME}</span>
          </Link>
        </div>
        <div className={styles.headerTabLink}>
          <Link href={RESERVATIONS_LINK} className={isActive(RESERVATIONS_LINK) ? styles.activeTab : styles.navTabs}>
            <span className={styles.reservations}>{RESERVATION_LABEL}</span>
          </Link>
          <ul className={styles.dropdownMenu}>
            <li className={styles.headerListItemLink}>
              <Link href={RESERVATIONS_TOURISM_LINK} className={isActive(RESERVATIONS_TOURISM_LINK) ? '' : ''}>
                <span className={styles.dropdownItem}>{TOURISM}</span>
              </Link>
            </li>
            <li className={styles.headerListItemLink}>
              <Link href={RESERVATIONS_CONTRACT_LINK} className={isActive(RESERVATIONS_CONTRACT_LINK) ? styles.listItem : styles.listItem}>
                <span className={styles.dropdownItem}>{BUS_CONTRACT_RATES}</span>
              </Link>
            </li>
            <li className={styles.headerListItemLink}>
              <Link href={RESERVATIONS_CONCESSION_LINK} className={isActive(RESERVATIONS_CONCESSION_LINK) ? styles.listItem : styles.listItem}>
                <span className={styles.dropdownItem}>{CONCESSION_SCHEMES}</span>
              </Link>
            </li>
            <li className={styles.headerListItemLink}>
              <Link href={RESERVATIONS_POINTS_LINK} className={isActive(RESERVATIONS_POINTS_LINK) ? styles.listItem : styles.listItem}>
                <span className={styles.dropdownItem}>{RESERVATION_POINTS}</span>
              </Link>
            </li>
            <li className={styles.headerListItemLink}>
              <Link href={RESERVATIONS_SPL_BUS_LINK} className={isActive(RESERVATIONS_SPL_BUS_LINK) ? styles.listItem : styles.listItem}>
                <span className={styles.dropdownItem}>{SPECIAL_BUS_TIMINGS}</span>
              </Link>
            </li>
            <li className={styles.headerListItemLink}>
              <Link href={RESERVATIONS_FAQ_LINK} className={isActive(RESERVATIONS_FAQ_LINK) ? styles.listItem : styles.listItem}>
                <span className={styles.dropdownItem}>{RESERVATION_FAQ}</span>
              </Link>
            </li>
            <li className={styles.headerListItemLink}>
              <Link href={RESERVATIONS_BUS_LINK} className={isActive(RESERVATIONS_BUS_LINK) ? styles.listItem : styles.listItem}>
                <span className={styles.dropdownItem}>{BUS_DETAILS}</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.headerTabLink}>
          <Link href={LOGISTICS_LINK} className={isActive(LOGISTICS_LINK) ? styles.activeTab : styles.navTabs}>
            <span className={styles.reservations}>{LOGISTICS}</span>
          </Link>
          <ul className={styles.dropdownMenu}>
            <li className={styles.headerListItemLink}>
              <Link href={LOGISTICS_CONTACTS_LINK} className={isActive(LOGISTICS_CONTACTS_LINK) ? styles.listItem : styles.listItem}>
                <span className={styles.dropdownItem}>{LOGISTICS_CONTACTS}</span>
              </Link>
            </li>
            <li className={styles.headerListItemLink}>
              <Link href={LOGISTICS_RATES_LINK} className={isActive(LOGISTICS_RATES_LINK) ? styles.listItem : styles.listItem}>
                <span className={styles.dropdownItem}>{RT_CONTACTS}</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.headerTabLink}>
          <Link href={BUS_PASS_LINK} className={isActive(BUS_PASS_LINK) ? styles.activeTab : styles.navTabs}>
            <span className={styles.reservations}>{BUS_PASSES}</span>
          </Link>
          <ul className={styles.dropdownMenu}>
            <li className={styles.headerListItemLink}>
              <Link href={BUS_PASS_STUDENT_LINK} className={isActive(BUS_PASS_STUDENT_LINK) ? styles.listItem : styles.listItem}>
                <span className={styles.dropdownItem}>{STUDENT_PASSES}</span>
              </Link>
            </li>
            <li className={styles.headerListItemLink}>
              <Link href={BUS_PASS_GENERAL_LINK} className={isActive(BUS_PASS_GENERAL_LINK) ? styles.listItem : styles.listItem}>
                <span className={styles.dropdownItem}>{GENERAL_PASS}</span>
              </Link>
            </li>
            <li className={styles.headerListItemLink}>
              <Link href={BUS_PASS_OTHER_LINK} className={isActive(BUS_PASS_OTHER_LINK) ? styles.listItem : styles.listItem}>
                <span className={styles.dropdownItem}>{OTHER_PASSES}</span>
              </Link>
            </li>
            <li className={styles.headerListItemLink}>
              <Link href={BUS_PASS_FAQ_LINK} className={isActive(BUS_PASS_FAQ_LINK) ? styles.listItem : styles.listItem}>
                <span className={styles.dropdownItem}>{LOGISTICS_FAQ}</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.headerTabLink}>
          <Link href={ABOUT_LINK} className={isActive(ABOUT_LINK) ? styles.activeTab : styles.navTabs}>
            <span className={styles.reservations}>{ABOUT}</span>
          </Link>
          <ul className={styles.dropdownMenu}>
            <li className={styles.headerListItemLink}>
              <Link href={ABOUT_IT_LINK} className={isActive(ABOUT_IT_LINK) ? styles.listItem : styles.listItem}>
                <span className={styles.dropdownItem}>{IT_INITIATIVES}</span>
              </Link>
            </li>
            <li className={styles.headerListItemLink}>
              <Link href={ABOUT_LEADERSHIP_LINK} className={isActive(ABOUT_LEADERSHIP_LINK) ? styles.listItem : styles.listItem}>
                <span className={styles.dropdownItem}>{LEADERSHIP}</span>
              </Link>
            </li>
            <li className={styles.headerListItemLink}>
              <Link href={ABOUT_CORPORATION_LINK} className={isActive(ABOUT_CORPORATION_LINK) ? styles.listItem : styles.listItem}>
                <span className={styles.dropdownItem}>{CORPORATION}</span>
              </Link>
            </li>
            <li className={styles.headerListItemLink}>
              <Link href={ABOUT_EVENTS_LINK} className={isActive(ABOUT_EVENTS_LINK) ? styles.listItem : styles.listItem}>
                <span className={styles.dropdownItem}>{EVENTS_AWARDS}</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.headerTabLink}>
          <Link href={TENDERS_LINK} className={isActive(TENDERS_LINK) ? styles.activeTab : styles.navTabs}>
            <span className={styles.reservations}>{TENDERS}</span>
          </Link>
        </div>
        <div className={styles.headerTabLink}>
          <Link href={HOSPITAL_LINK} className={isActive(HOSPITAL_LINK) ? styles.activeTab : styles.navTabs}>
            <span className={styles.reservations}>{TGSRTC_HOSPITAL}</span>
          </Link>
        </div>
        <div className={styles.headerTabLink}>
          <Link href={CONTACT_US_LINK} className={isActive(CONTACT_US_LINK) ? styles.activeTab : styles.navTabs}>
            <span className={styles.reservations}>{CONTACT_US}</span>
          </Link>
        </div>
      </div>


      <div className={styles.headerMobileIconSection} onClick={toggleMenu}>
        <Image
          className={styles.headerMobileIcon}
          loading="lazy"
          alt="tsrtc-mobile-header-icon"
          src="/header-mobile-icon.svg"
          width={24}
          height={24}
        />

        {isMenuOpen &&
          <>
            <div className={styles.closeIconSection} onClick={closeMenu}>
              <Image
                className={styles.closeIcon}
                loading="lazy"
                alt="close-menu-icon"
                src="/close-button.svg"
                width={24}
                height={24}
              />
            </div>

            <div className={`${isMenuOpen ? `${styles.slideMenu} ${styles.open}` : `${styles.slideMenu}`}`}>
              <div className={styles.headerTabLink}>
                <Link href="/" className={isActive('/') ? styles.activeTab : styles.navTabs}>
                  <span className={styles.reservations}>{HOME}</span>
                </Link>
              </div>
              <div className={styles.headerTabLink}>
                <Link href={RESERVATIONS_LINK} className={isActive(RESERVATIONS_LINK) ? styles.activeTab : styles.navTabs}>
                  <span className={styles.reservations1}>{RESERVATION_LABEL}</span>
                </Link>
              </div>
              <div className={styles.headerTabLink}>
                <Link href={RESERVATIONS_TOURISM_LINK} className={isActive(RESERVATIONS_TOURISM_LINK) ? styles.activeTab : styles.navTabs}>
                  <span className={styles.reservations1}>{TOURISM}</span>
                </Link>
              </div>
              <div className={styles.headerTabLink}>
                <Link href={RESERVATIONS_CONTRACT_LINK} className={isActive(RESERVATIONS_CONTRACT_LINK) ? styles.activeTab : styles.navTabs}>
                  <span className={styles.reservations1}>{BUS_CONTRACT_RATES}</span>
                </Link>
              </div>
              <div className={styles.headerTabLink}>
                <Link href={RESERVATIONS_BUS_LINK} className={isActive(RESERVATIONS_BUS_LINK) ? styles.activeTab : styles.navTabs}>
                  <span className={styles.reservations1}>{BUS_DETAILS}</span>
                </Link>
              </div>
              <div className={styles.headerTabLink}>
                <Link href={LOGISTICS_LINK} className={isActive(LOGISTICS_LINK) ? styles.activeTab : styles.navTabs}>
                  <span className={styles.reservations1}>{LOGISTICS}</span>
                </Link>
              </div>
              <div className={styles.headerTabLink}>
                <Link href={BUS_PASS_LINK} className={isActive(BUS_PASS_LINK) ? styles.activeTab : styles.navTabs}>
                  <span className={styles.reservations1}>{BUS_PASSES}</span>
                </Link>
              </div>
              <div className={styles.headerTabLink}>
                <Link href={BUS_PASS_OTHER_LINK} className={isActive(BUS_PASS_OTHER_LINK) ? styles.activeTab : styles.navTabs}>
                  <span className={styles.reservations1}>{OTHER_PASSES}</span>
                </Link>
              </div>
              <div className={styles.headerTabLink}>
                <Link href={ABOUT_LINK} className={isActive(ABOUT_LINK) ? styles.activeTab : styles.navTabs}>
                  <span className={styles.reservations1}>{ABOUT}</span>
                </Link>
              </div>
              <div className={styles.headerTabLink}>
                <Link href={TENDERS_LINK} className={isActive(TENDERS_LINK) ? styles.activeTab : styles.navTabs}>
                  <span className={styles.reservations1}>{TENDERS}</span>
                </Link>
              </div>
              <div className={styles.headerTabLink}>
                <Link href={HOSPITAL_LINK} className={isActive(HOSPITAL_LINK) ? styles.activeTab : styles.navTabs}>
                  <span className={styles.reservations1}>{TGSRTC_HOSPITAL}</span>
                </Link>
              </div>
              <div className={styles.headerTabLink}>
                <Link href={CONTACT_US_LINK} className={isActive(CONTACT_US_LINK) ? styles.activeTab : styles.navTabs}>
                  <span className={styles.reservations1}>{CONTACT_US}</span>
                </Link>
              </div>
            </div>
          </>
        }
      </div>
    </header>
  );
};

export default Header;