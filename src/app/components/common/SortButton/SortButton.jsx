import React from 'react';
import PropTypes from 'prop-types';
import styles from './SortButton.module.scss';

const SortButton = ({ onSort }) => {
  return (
    <div className={styles.parent}>
      <select onChange={onSort} role="button" className={styles.select}>
        <option value="name asc">Sort by name (A-Z)</option>
        <option value="name desc">Sort by name (Z-A)</option>
        <option value="price asc">Price low to high</option>
        <option value="price desc">Price high to low</option>
      </select>
    </div>
  );
};
SortButton.propTypes = {
  onSort: PropTypes.func.isRequired,
};
export default SortButton;
