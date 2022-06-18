import React from 'react';
import PropTypes from 'prop-types';

const GroupList = ({ items, selectedItem, onClearFilter, onItemSelect }) => {
  return (
    <ul className="lg:flex w-auto text-lg font-medium text-gray-900">
      <div className="lg:flex border rounded-xl bg-white">
        <li
          onClick={() => {
            onClearFilter();
          }}
          role="button"
          className={
            'flex justify-center align-middle p-3 px-4  lg:border-r lg:border-b-0 border-b lg:first:rounded-l-xl hover:text-red-700 bg-gray-200 hover:bg-gray-200' +
            (!selectedItem ? ' bg-gray-200' : '')
          }
        >
          AllBrands
        </li>
        {items.map((item) => (
          <li
            key={item._id}
            onClick={() => {
              onItemSelect(item);
            }}
            role="button"
            className={
              'flex justify-center align-middle p-3 px-4 lg:border-r lg:border-b-0 border-b lg:last:rounded-r-xl last:border-none hover:text-red-700 hover:bg-[#f3f1f4] ' +
              (item === selectedItem ? ' bg-[#f3f1f4]' : '')
            }
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
