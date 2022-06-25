import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/svg/Logo';
import { SearchQuery } from '../SearchQuery';

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  const navigation = [
    { title: 'Home', path: '/' },
    { title: 'Sneakers', path: '/sneakers' },
    { title: 'Init', path: '/init' },
  ];
  return (
    <nav className="bg-white shadow-sm">
      <div className="flex items-center space-x-8 py-3 px-10  mx-auto">
        <div className="flex-none lg:flex-initial">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div
            className={`bg-white absolute z-20 w-full top-16 left-0 p-2 border-b lg:static lg:block lg:border-none ${
              menuState ? '' : 'hidden'
            }`}
          >
            <ul className="mt-4 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
              {navigation.map((item, index) => (
                <li key={index} className="text-gray-900 hover:text-red-700">
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            <SearchQuery />
            <div className="lg:block hidden">
              <Link
                to="/login"
                className="py-2.5 px-4 text-gray-900 text-lg font-medium bg-gray-200 hover:text-red-700 rounded-xl"
              >
                Login
              </Link>
            </div>
            <button
              className="outline-none text-gray-400 block lg:hidden"
              onClick={() => setMenuState(!menuState)}
            >
              {menuState ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
