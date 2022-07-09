import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './Pagination.module.scss';

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav className={styles.parent}>
      <ul className={styles.mainContainer}>
        <div className={styles.itemsContainer}>
          {pages.map((page) => (
            <button
              onClick={() => onPageChange(page)}
              key={'page_' + page}
              className={`${styles.btn} ${page === currentPage && styles.btn_selected}`}
            >
              <li>{page}</li>
            </button>
          ))}
        </div>
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
export default Pagination;
