import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SearchQuery.module.scss';

import { Magnifier } from '../../../assets/svg';

import { useSelector } from 'react-redux';
import { getSneakers, getSneakersLoadingStatus } from '../../../store/sneakers';

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

  if (isLoading) return null;

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
            {filteredSneakers.slice(0, 16).map((sneakers) => {
              return (
                <div key={sneakers._id} onClick={handleClearSearchQuery} className={styles.searchResultItem}>
                  <Link to={`/sneakers/${sneakers._id}`}>
                    <li className={styles.searchResultInscription}>{sneakers.name}</li>
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
