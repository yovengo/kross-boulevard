import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './SneakersTiles.module.scss';

import { Brand } from '../Brand';

const SneakersTiles = ({ sneakers }) => {
  return (
    <div className={styles.parent}>
      {sneakers.map((sneakersPair) => (
        <div className={styles.mainContainer} key={sneakersPair._id}>
          <Link to={`/sneakers/${sneakersPair._id}`}>
            <div className={styles.secondaryContainer}>
              <div className={styles.imgContainer}>
                <img alt="sneakers" className={styles.img} src={sneakersPair.image[0]} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.brandMainContainer}>
                  <span className={styles.brandSecondaryContainer}>
                    <Brand id={sneakersPair.brand} />
                  </span>
                </h3>
                <h2 className={styles.name}>{sneakersPair.name}</h2>
                <p className={styles.price}>{sneakersPair.price} &#8381;</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
SneakersTiles.propTypes = {
  sneakers: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default SneakersTiles;
