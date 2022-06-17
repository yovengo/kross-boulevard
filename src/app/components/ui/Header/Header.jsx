import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/svg/Logo';

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="mx-10 flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Logo />
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/sneakers" className="mr-5 hover:text-gray-900">
            Sneakers
          </Link>
          <Link to="/init" className="mr-5 hover:text-gray-900">
            Init
          </Link>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          <Link to="/" className="hover:text-red-700 pr-1">
            Login
          </Link>{' '}
          /{' '}
          <Link to="/" className="hover:text-red-700 pl-1">
            Register
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
