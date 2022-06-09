import React from 'react';
import useMockData from '../utils/mockData';

const DataInit = () => {
  const { error, initialize, progress, status } = useMockData();

  const handleClick = () => {
    initialize();
  };

  return (
    <div className="container mx-auto p-5 max-w-2xl">
      <h1 className="text-3xl mb-2">Инициализация данных в FireBase</h1>
      <ul className="mb-2">
        <li className="text-xl">Status: {status}</li>
        <li className="text-xl">Progress: {progress}%</li>
        {error && <li className="text-xl">Error: {error}</li>}
      </ul>
      <button
        className="inline-flex items-center bg-gray-200 border-0 py-2 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
        onClick={handleClick}
      >
        Инициализировать
      </button>
    </div>
  );
};

export default DataInit;
