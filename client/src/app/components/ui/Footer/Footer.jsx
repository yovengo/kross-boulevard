import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import Logo from '../../../assets/svg/Logo';
import { GitHub, Instagram, Telegram } from '../../../assets/svg';

const Footer = () => {
  return (
    <footer className={styles.parent}>
      <div className={styles.mainContainer}>
        <Link to="/" className={styles.logo}>
          <Logo />
        </Link>
        <p className={styles.trademark}>
          © 2022 KrossBoulevard —
          <a
            href="https://github.com/yovengo"
            className={styles.personalPage}
            rel="noopener noreferrer"
            target="_blank"
          >
            @yovengo
          </a>
        </p>
        <span className={styles.rightContent}>
          <a href="https://t.me/yovengowo" target="_blank">
            <Telegram />
          </a>
          <a href="https://github.com/yovengo" className={styles.githubLink} target="_blank">
            <GitHub />
          </a>
          <a href="client/src/app/components/ui/Footer/Footer" className={styles.instLink} target="_blank">
            <Instagram />
          </a>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
