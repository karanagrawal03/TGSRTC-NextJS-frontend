import { useRouter } from 'next/router';
import Link from 'next/link';
import type { NextPage } from 'next';
import styles from './header.module.css';
import Image from 'next/image';
import { log } from 'console';
import { useEffect, useState } from 'react';

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = '' }) => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // Scroll Down
        setShowHeader(false);
      } else {
        // Scroll Up
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);

      return () => {
        window.removeEventListener('scroll', controlHeader);
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
      <Link href="/" className={styles.HeaderTabLink}>
        <div className={styles.tsrtcLogo}>
          <img
            className={styles.tsrtcLogoIcon}
            loading="lazy"
            alt="tsrtc-logo"
            src="/tsrtc-logo@2x.png"
          />

          <div className={styles.tsrtcLogo1}>
            <img className={styles.icon} loading="lazy" alt="" src="/---1.svg" />
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
            src="/tsrtcMobileLogo@2x.png"
          />
        </div>

      </Link>
      <div className={styles.tabContainer}>
        <Link href="/" className={styles.HeaderTabLink}>
          <div className={isActive('/') ? styles.activeTab : styles.navTabs}>
            <div className={styles.reservations}>Home</div>
          </div>
        </Link>
        <Link href="/reservation-booking-service-ho" className={styles.HeaderTabLink}>
          <div className={isActive('/reservation-booking-service-ho') ? styles.activeTab : styles.navTabs}>
            <div className={styles.reservations1}>Reservations</div>
            <ul className={styles.dropdownMenu}>
              <Link href="/reservation-tourism" className={styles.HeaderTabLink}>
                <div className={isActive('/reservation-tourism') ? '' : ''}>
                  <li className={styles.dropdownItem}>Tourism</li>
                </div>
              </Link>
              <Link href="/" className={styles.HeaderTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>Bus on Contract Rates</li>
                </div>
              </Link>
              <Link href="/" className={styles.HeaderTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>Concession Schemes</li>
                </div>
              </Link>
              <Link href="/" className={styles.HeaderTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>Reservations Points</li>
                </div>
              </Link>
              <Link href="/" className={styles.HeaderTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>Special Bus Timings</li>
                </div>
              </Link>
              <Link href="/" className={styles.HeaderTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>Concession Schemes</li>
                </div>
              </Link>
            </ul>
          </div>
        </Link>
        <Link href="/logistics-t-s-r-t-c-home" className={styles.HeaderTabLink}>
          <div className={isActive('/logistics-t-s-r-t-c-home') ? styles.activeTab : styles.navTabs}>
            <div className={styles.reservations2}>Logistics</div>
            <ul className={styles.dropdownMenu}>
              <Link href="/" className={styles.HeaderTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>Contacts</li>
                </div>
              </Link>
              <Link href="/" className={styles.HeaderTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>Rates and Tariffs Contacts</li>
                </div>
              </Link>
            </ul>
          </div>
        </Link>
        <Link href="/bus-pass-services" className={styles.HeaderTabLink}>
          <div className={isActive('/bus-pass-services') ? styles.activeTab : styles.navTabs}>
            <div className={styles.reservations3}>Bus Passes</div>
            <ul className={styles.dropdownMenu}>
              <Link href="/" className={styles.HeaderTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>Student Passes</li>
                </div>
              </Link>
              <Link href="/" className={styles.HeaderTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>General Commuter Pass</li>
                </div>
              </Link>
              <Link href="/" className={styles.HeaderTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>Other Passes</li>
                </div>
              </Link>
              <Link href="/" className={styles.HeaderTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>FAQ</li>
                </div>
              </Link>
            </ul>
          </div>
        </Link>
        <Link href="/about-vision-legacy" className={styles.HeaderTabLink}>
          <div className={isActive('/about-vision-legacy') ? styles.activeTab : styles.navTabs}>
            <div className={styles.reservations4}>About</div>
            <ul className={styles.dropdownMenu}>
              <Link href="/" className={styles.HeaderTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>IT Initiatives</li>
                </div>
              </Link>
              <Link href="/" className={styles.HeaderTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>TSRTC Leadership</li>
                </div>
              </Link>
              <Link href="/" className={styles.HeaderTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>The Corporation</li>
                </div>
              </Link>
              <Link href="/" className={styles.HeaderTabLink}>
                <div className={isActive('/') ? '' : ''}>
                  <li className={styles.dropdownItem}>Events & Awards</li>
                </div>
              </Link>
            </ul>
          </div>
        </Link>
        <Link href="/tenders" className={styles.HeaderTabLink}>
          <div className={isActive('/tenders') ? styles.activeTab : styles.navTabs}>
            <div className={styles.reservations5}>Tenders</div>
          </div>
        </Link>
        <Link href="/hospital-t-s-r-t-c-tarnaka-hospita" className={styles.HeaderTabLink}>
          <div className={isActive('/hospital-t-s-r-t-c-tarnaka-hospita') ? styles.activeTab : styles.navTabs}>
            <div className={styles.reservations6}>TSRTC Hospital</div>
          </div>
        </Link>
        <Link href="/contact-us" className={styles.HeaderTabLink}>
          <div className={isActive('/contact-us') ? styles.activeTab : styles.navTabs}>
            <div className={styles.reservations7}>Contact us</div>
          </div>
        </Link>
      </div>
      <div className={styles.headerMobileIconSection} onClick={toggleMenu}>
        <Image
          className={styles.headerMobileIcon}
          loading="lazy"
          alt="tsrtc-mobile-header-icon"
          src="/headerMobileIcon.svg"
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
                src="/closeButton.svg"
                width={24}
                height={24}
              />
            </div>

            <div className={`${isMenuOpen ? `${styles.slideMenu} ${styles.open}` : `${styles.slideMenu}`}`}>
              <Link href="/" className={styles.HeaderTabLink}>
                <div className={isActive('/') ? styles.activeTab : styles.navTabs}>
                  <div className={styles.reservations}>Home</div>
                </div>
              </Link>
              <Link href="/reservation-booking-service-ho" className={styles.HeaderTabLink}>
                <div className={isActive('/reservation-booking-service-ho') ? styles.activeTab : styles.navTabs}>
                  <div className={styles.reservations1}>Reservations</div>
                </div>
              </Link>
              <Link href="/logistics-t-s-r-t-c-home" className={styles.HeaderTabLink}>
                <div className={isActive('/logistics-t-s-r-t-c-home') ? styles.activeTab : styles.navTabs}>
                  <div className={styles.reservations1}>Logistics</div>
                </div>
              </Link>
              <Link href="/bus-pass-services" className={styles.HeaderTabLink}>
                <div className={isActive('/bus-pass-services') ? styles.activeTab : styles.navTabs}>
                  <div className={styles.reservations1}>Bus Passes</div>
                </div>
              </Link>
              <Link href="/about-vision-legacy" className={styles.HeaderTabLink}>
                <div className={isActive('/about-vision-legacy') ? styles.activeTab : styles.navTabs}>
                  <div className={styles.reservations1}>About</div>
                </div>
              </Link>
              <Link href="/tenders" className={styles.HeaderTabLink}>
                <div className={isActive('/tenders') ? styles.activeTab : styles.navTabs}>
                  <div className={styles.reservations1}>Tenders</div>
                </div>
              </Link>
              <Link href="/hospital-t-s-r-t-c-tarnaka-hospita" className={styles.HeaderTabLink}>
                <div className={isActive('/hospital-t-s-r-t-c-tarnaka-hospita') ? styles.activeTab : styles.navTabs}>
                  <div className={styles.reservations1}>TSRTC Hospital</div>
                </div>
              </Link>
              <Link href="/contact-us" className={styles.HeaderTabLink}>
                <div className={isActive('/contact-us') ? styles.activeTab : styles.navTabs}>
                  <div className={styles.reservations1}>Contact us</div>
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