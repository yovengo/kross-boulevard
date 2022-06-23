import React from 'react';
import PropTypes from 'prop-types';

const SortButton = ({ onSort }) => {
  return (
    <div className="text-gray-900 pt-8 lg:pt-0">
      <select
        onChange={onSort}
        role="button"
        className="w-full p-3 px-4 text-lg font-medium bg-white border rounded-xl outline-none appearance-none hover:bg-[#f3f1f4]"
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
