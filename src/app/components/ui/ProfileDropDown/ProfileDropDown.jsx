import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProfileDropDown.module.scss';

import { useSelector } from 'react-redux';
import { getCurrentUser, getIsLoggedIn } from '../../../store/users';
import { DefaultAvatar } from '../../../assets/svg';

const ProfileDropDown = (props) => {
  const currentUser = useSelector(getCurrentUser());
  const isLoggedIn = useSelector(getIsLoggedIn());

  const [state, setState] = useState(false);
  const navigation = [{ title: 'Log Out', path: '/logout' }];
  if (isLoggedIn && currentUser) {
    return (
      <div className={`${styles.parent} ${props.class}`}>
        <div className={styles.hiddenContainer}>
          <button className={styles.avatarBtn} onClick={() => setState(!state)}>
            <DefaultAvatar />
          </button>
          <div className={styles.hiddenUserInfo}>
            <span className={styles.hiddenUserName}>{currentUser.name}</span>
            <span className={styles.hiddenUserEmail}>{currentUser.email}</span>
          </div>
        </div>
        <ul className={`${styles.itemsContainer} ${!state && 'lg:hidden'}`}>
          <li className={styles.userName}>{currentUser.name}</li>
          <li className={styles.userEmail}>{currentUser.email}</li>
          {navigation.map((item, index) => (
            <li key={index}>
              <Link className={styles.link} to={item.path}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  } else return '';
};
export default ProfileDropDown;
