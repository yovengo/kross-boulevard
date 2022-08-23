import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SearchQuery.module.scss';

import { useSelector } from 'react-redux';
import { getSneakers, getSneakersLoadingStatus } from '../../../store/sneakers';
import { Magnifier } from '../../../assets/svg';

const SearchQuery = () => {
  const sneakers = useSelector(getSneakers());
  const isLoading = useSelector(getSneakersLoadingStatus());

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = ({ target }) => {
    setSearchQuery(target.value);
  };

  const handleClearSearchQuery = () => {
    setSearchQuery('');
  };

  if (isLoading) return '';

  const filteredSneakers = sneakers.filter((s) => s?.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1);

  return (
    <div className={styles.parent}>
      <form className={styles.form}>
        <Magnifier />
        <input
          className={styles.input}
          type="text"
          name="searchQuery"
          placeholder="Search..."
          onChange={handleSearchQuery}
          value={searchQuery}
        />
      </form>
      {searchQuery.length !== 0 && filteredSneakers.length !== 0 && (
        <div className={styles.searchResultContainer}>
          <ul>
            {filteredSneakers.slice(0, 8).map((item) => {
              return (
                <div key={item._id} onClick={handleClearSearchQuery} className={styles.searchResultItem}>
                  <Link to={`/sneakers/${item._id}`}>
                    <li className={styles.searchResultInscription}>{item.name}</li>
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchQuery;
