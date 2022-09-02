import React from 'react';
import styles from './DataInit.module.scss';

import useMockData from '../../../utils/mockData';
import configFile from '../../../config.json';

const DataInit = () => {
  const { error, initialize, progress, status } = useMockData();

  const handleClick = () => {
    initialize();
  };

  return (
    <div className={styles.parent}>
      <h1 className={styles.heading}>Firebase data initialization</h1>
      <ul className={styles.listContainer}>
        <li>Status: {status}</li>
        <li>Progress: {progress}%</li>
        {error && <li className={styles.error}>Error: {error}</li>}
      </ul>
      <button role="button" disabled={!configFile.isFireBase} className={styles.btn} onClick={handleClick}>
        Initialize
      </button>
    </div>
  );
};

export default DataInit;
