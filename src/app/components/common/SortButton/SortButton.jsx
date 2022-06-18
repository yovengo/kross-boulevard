import React from 'react';
import PropTypes from 'prop-types';

const SortButton = ({ onSort }) => {
  return (
    <div className="relative text-gray-900">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      <select
        onChange={(event) => onSort(event)}
        className="w-full p-3 px-4 pr-10 font-medium  bg-white border rounded-xl outline-none appearance-none focus:border-indigo-600"
      >
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
