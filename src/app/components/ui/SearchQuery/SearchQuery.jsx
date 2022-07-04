import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  if (isLoading) return 'Loading...';

  const filteredSneakers = sneakers.filter(
    (s) => s.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
  );

  return (
    <div className="flex flex-col">
      <form className="flex items-center space-x-2 border rounded-xl p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 flex-none text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
          type="text"
          name="searchQuery"
          placeholder="Search..."
          onChange={handleSearchQuery}
          value={searchQuery}
        />
      </form>
      {searchQuery.length !== 0 && filteredSneakers.length !== 0 && (
        <div className="absolute top-[3.6rem] w-[14.3rem] h-40 border rounded-xl bg-white overflow-y-scroll">
          <ul>
            {filteredSneakers.slice(0, 8).map((item) => {
              return (
                <div
                  key={item._id}
                  onClick={handleClearSearchQuery}
                  className="border-b last:border-none hover:bg-[#f3f1f4] hover:text-red-700 first:rounded-t-xl last:rounded-b-xl"
                >
                  <Link to={`/sneakers/${item._id}`}>
                    <li className="flex justify-start py-2 px-1">{item.name}</li>
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
