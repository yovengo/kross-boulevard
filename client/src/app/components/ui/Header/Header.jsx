import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

import { SearchQuery } from '../SearchQuery';
import { ProfileDropDown } from '../ProfileDropDown';
import { CartIcon, Cross, DropDownIcon, Logo } from '../../../assets/svg';

import { useSelector } from 'react-redux';
import { getCartData, getIsLoggedIn } from '../../../store/users';
import PropTypes from 'prop-types';

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn());
  const currentCart = useSelector(getCartData());

  const [menuState, setMenuState] = useState(false);

  const navigation = [
    { title: 'Home', path: '/' },
    { title: 'Sneakers', path: '/sneakers' },
    // { title: 'Init', path: '/init' },
  ];
  return (
    <nav className={styles.parent}>
      <div className={styles.mainContainer}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={styles.hiddenContainer}>
          <div className={`${styles.hiddenMenu} ${!menuState && 'hidden'}`}>
            <ul className={styles.hiddenNavContainer}>
              {navigation.map((item, index) => (
                <li key={index} className={styles.hiddenNavItem}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
              {isLoggedIn && (
                <li className={styles.hiddenNavItem}>
                  <Link to="/init">Init</Link>
                </li>
              )}
            </ul>
            {isLoggedIn ? (
              <>
                <Link to="/cart" className={styles.hiddenCartLink}>
                  <CartIcon />
                  {currentCart && <div className={styles.hiddenCartItemsCounter}>{currentCart.length}</div>}
                </Link>
                <ProfileDropDown class={styles.hiddenProfileDropDown} />
              </>
            ) : (
              <button className={styles.hiddenLoginBtn}>
                <Link to="/login" className={styles.hiddenLoginLink}>
                  Login
                </Link>
              </button>
            )}
          </div>
          <div className={styles.secondaryContainer}>
            <SearchQuery />
            {isLoggedIn ? (
              <>
                <Link to="/cart" className={styles.cartLink}>
                  <CartIcon />
                  {currentCart && <div className={styles.cartItemsCounter}>{currentCart.length}</div>}
                </Link>
                <ProfileDropDown class={styles.profileDropDown} />
              </>
            ) : (
              <button className={styles.loginBtn}>
                <Link to="/login" className={styles.loginLink}>
                  Login
                </Link>
              </button>
            )}

            <button className={styles.setMenuBtn} onClick={() => setMenuState(!menuState)}>
              {menuState ? <Cross /> : <DropDownIcon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
Header.propTypes = {
  currentCart: PropTypes.any,
};
export default Header;
