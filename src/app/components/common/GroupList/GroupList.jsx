import React from 'react';
import PropTypes from 'prop-types';

const GroupList = ({ items, selectedItem, onClearFilter, onItemSelect }) => {
  return (
    <div className="pb-8">
      <ul className="lg:flex w-auto text-lg font-medium text-gray-900 bg-white">
        <div className="lg:flex border-2 rounded-xl">
          <li
            onClick={() => {
              onClearFilter();
            }}
            role="button"
            className={
              'flex justify-center p-3 px-4 align-middle lg:border-r-2 lg:border-b-0 border-b-2 lg:first:rounded-l-xl hover:text-red-700 bg-gray-200 hover:bg-gray-200' +
              (!selectedItem ? ' bg-gray-200' : '')
            }
          >
            All brands
          </li>
          {items.map((item) => (
            <li
              key={item._id}
              onClick={() => {
                onItemSelect(item);
              }}
              role="button"
              className={
                'flex justify-center align-middle p-3 px-4 lg:border-r-2 lg:border-b-0 border-b-2 lg:last:rounded-r-xl last:border-none hover:text-red-700 hover:bg-[#f3f1f4] ' +
                (item === selectedItem ? ' bg-[#f3f1f4]' : '')
              }
            >
              {item.name}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};
GroupList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  selectedItem: PropTypes.object,
  onClearFilter: PropTypes.func,
  onItemSelect: PropTypes.func.isRequired,
};
export default GroupList;
