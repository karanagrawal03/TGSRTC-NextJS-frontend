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
  BUS_PASSES
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
      <div>
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
                src="/header-text-logo.svg"
              />
              <img
                className={styles.telanganaStateRoadTransport}
                loading="lazy"
                alt="tsrtc-logo"
                src="/telangana-state-road-transport-corporation1.svg"
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
      </div>

      <div className={styles.tabContainer}>
        <Link href="/" className={styles.headerTabLink}>
          <div className={isActive('/') ? styles.activeTab : styles.navTabs}>
            <div className={styles.reservations}>{HOME}</div>
          </div>
        </Link>
        <Link href="/reservation-booking-service-ho" className={styles.headerTabLink}>
          <div className={isActive('/reservation-booking-service-ho') ? styles.activeTab : styles.navTabs}>
            <div className={styles.reservations1}>{RESERVATION_LABEL}</div>
            <ul className={styles.dropdownMenu}>
              <Link href="/reservation-tourism" className={styles.headerTabLink}>
                <div className={isActive('/reservation-tourism') ? '' : ''}>
                  <li className={styles.dropdownItem}>{TOURISM}</li>
                </div>
              </Link>
              <Link href="/" className={styles.headerTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>{BUS_CONTRACT_RATES}</li>
                </div>
              </Link>
              <Link href="/" className={styles.headerTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>{CONCESSION_SCHEMES}</li>
                </div>
              </Link>
              <Link href="/" className={styles.headerTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>{RESERVATION_POINTS}</li>
                </div>
              </Link>
              <Link href="/" className={styles.headerTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>{SPECIAL_BUS_TIMINGS}</li>
                </div>
              </Link>
              <Link href="/" className={styles.headerTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>{RESERVATION_FAQ}</li>
                </div>
              </Link>
              <Link href="/" className={styles.headerTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>{BUS_DETAILS}</li>
                </div>
              </Link>
            </ul>
          </div>
        </Link>
        <Link href="/logistics-t-s-r-t-c-home" className={styles.headerTabLink}>
          <div className={isActive('/logistics-t-s-r-t-c-home') ? styles.activeTab : styles.navTabs}>
            <div className={styles.reservations2}>{LOGISTICS}</div>
            <ul className={styles.dropdownMenu}>
              <Link href="/" className={styles.headerTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>{LOGISTICS_CONTACTS}</li>
                </div>
              </Link>
              <Link href="/" className={styles.headerTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>{RT_CONTACTS}</li>
                </div>
              </Link>
            </ul>
          </div>
        </Link>
        <Link href="/bus-pass-services" className={styles.headerTabLink}>
          <div className={isActive('/bus-pass-services') ? styles.activeTab : styles.navTabs}>
            <div className={styles.reservations3}>{BUS_PASSES}</div>
            <ul className={styles.dropdownMenu}>
              <Link href="/" className={styles.headerTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>{STUDENT_PASSES}</li>
                </div>
              </Link>
              <Link href="/" className={styles.headerTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>{GENERAL_PASS}</li>
                </div>
              </Link>
              <Link href="/" className={styles.headerTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>{OTHER_PASSES}</li>
                </div>
              </Link>
              <Link href="/" className={styles.headerTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>{LOGISTICS_FAQ}</li>
                </div>
              </Link>
            </ul>
          </div>
        </Link>
        <Link href="/about-vision-legacy" className={styles.headerTabLink}>
          <div className={isActive('/about-vision-legacy') ? styles.activeTab : styles.navTabs}>
            <div className={styles.reservations4}>{ABOUT}</div>
            <ul className={styles.dropdownMenu}>
              <Link href="/" className={styles.headerTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>{IT_INITIATIVES}</li>
                </div>
              </Link>
              <Link href="/" className={styles.headerTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>{LEADERSHIP}</li>
                </div>
              </Link>
              <Link href="/" className={styles.headerTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>{CORPORATION}</li>
                </div>
              </Link>
              <Link href="/" className={styles.headerTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>{EVENTS_AWARDS}</li>
                </div>
              </Link>
            </ul>
          </div>
        </Link>
        <Link href="/tenders" className={styles.headerTabLink}>
          <div className={isActive('/tenders') ? styles.activeTab : styles.navTabs}>
            <div className={styles.reservations5}>{TENDERS}</div>
          </div>
        </Link>
        <Link href="/hospital-t-s-r-t-c-tarnaka-hospita" className={styles.headerTabLink}>
          <div className={isActive('/hospital-t-s-r-t-c-tarnaka-hospita') ? styles.activeTab : styles.navTabs}>
            <div className={styles.reservations6}>{TGSRTC_HOSPITAL}</div>
          </div>
        </Link>
        <Link href="/contact-us" className={styles.headerTabLink}>
          <div className={isActive('/contact-us') ? styles.activeTab : styles.navTabs}>
            <div className={styles.reservations7}>{CONTACT_US}</div>
          </div>
        </Link>
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
              <Link href="/" className={styles.headerTabLink}>
                <div className={isActive('/') ? styles.activeTab : styles.navTabs}>
                  <div className={styles.reservations}>{HOME}</div>
                </div>
              </Link>
              <Link href="/reservation-booking-service-ho" className={styles.headerTabLink}>
                <div className={isActive('/reservation-booking-service-ho') ? styles.activeTab : styles.navTabs}>
                  <div className={styles.reservations1}>{RESERVATION_LABEL}s</div>
                </div>
              </Link>
              <Link href="/logistics-t-s-r-t-c-home" className={styles.headerTabLink}>
                <div className={isActive('/logistics-t-s-r-t-c-home') ? styles.activeTab : styles.navTabs}>
                  <div className={styles.reservations1}>{LOGISTICS}</div>
                </div>
              </Link>
              <Link href="/bus-pass-services" className={styles.headerTabLink}>
                <div className={isActive('/bus-pass-services') ? styles.activeTab : styles.navTabs}>
                  <div className={styles.reservations1}>{BUS_PASSES}</div>
                </div>
              </Link>
              <Link href="/about-vision-legacy" className={styles.headerTabLink}>
                <div className={isActive('/about-vision-legacy') ? styles.activeTab : styles.navTabs}>
                  <div className={styles.reservations1}>{ABOUT}</div>
                </div>
              </Link>
              <Link href="/tenders" className={styles.headerTabLink}>
                <div className={isActive('/tenders') ? styles.activeTab : styles.navTabs}>
                  <div className={styles.reservations1}>{TENDERS}</div>
                </div>
              </Link>
              <Link href="/hospital-t-s-r-t-c-tarnaka-hospita" className={styles.headerTabLink}>
                <div className={isActive('/hospital-t-s-r-t-c-tarnaka-hospita') ? styles.activeTab : styles.navTabs}>
                  <div className={styles.reservations1}>{TGSRTC_HOSPITAL}</div>
                </div>
              </Link>
              <Link href="/contact-us" className={styles.headerTabLink}>
                <div className={isActive('/contact-us') ? styles.activeTab : styles.navTabs}>
                  <div className={styles.reservations1}>{CONTACT_US}</div>
                </div>
              </Link>
            </div>
          </>
        }
      </div>
    </header>
  );
};

export default Header;