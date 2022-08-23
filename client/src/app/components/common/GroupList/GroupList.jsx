import React from 'react';
import PropTypes from 'prop-types';
import styles from './GroupList.module.scss';

const GroupList = ({ items, selectedItem, onClearFilter, onItemSelect }) => {
  return (
    <ul className={styles.parent}>
      <div className={styles.itemsContainer}>
        <li
          onClick={() => {
            onClearFilter();
          }}
          role="button"
          className={`${styles.firstItem} ${!selectedItem && styles.firstItem_selected}`}
        >
          All Brands
        </li>
        {items.map((item) => (
          <li
            key={item._id}
            onClick={() => {
              onItemSelect(item);
            }}
            role="button"
            className={`${styles.item} ${item === selectedItem && styles.item_selected}`}
          >
            {item.name}
          </li>
        ))}
      </div>
    </ul>
  );
};
GroupList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  selectedItem: PropTypes.object,
  onClearFilter: PropTypes.func,
  onItemSelect: PropTypes.func.isRequired,
};
export default GroupList;
