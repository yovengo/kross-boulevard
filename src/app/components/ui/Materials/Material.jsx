import React from 'react';
import PropTypes from 'prop-types';
import styles from './Material.module.scss';

const Material = ({ _id, name }) => {
  return (
    <span key={_id} className={styles.material}>
      {name}{' '}
    </span>
  );
};
Material.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string,
};
export default Material;
