import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav className="pt-8">
      <ul className="flex text-gray-900 lg:text-lg">
        <div className="border rounded-xl bg-white">
          {pages.map((page) => (
            <button
              onClick={() => onPageChange(page)}
              key={'page_' + page}
              className={
                'p-3 px-4 hover:text-red-700 hover:bg-[#f3f1f4] transition-colors border-r first:rounded-l-xl last:rounded-r-xl last:border-none' +
                (page === currentPage ? ' bg-[#f3f1f4]' : '')
              }
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
