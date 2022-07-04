import { useState } from 'react';
import { SearchQuery } from '../SearchQuery';
import Logo from '../../../assets/svg/Logo';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCurrentUser, getIsLoggedIn } from '../../../store/users';

const ProfileDropDown = (props) => {
  const currentUser = useSelector(getCurrentUser());
  const [state, setState] = useState(false);
  const navigation = [{ title: 'Log Out', path: '/logout' }];
  if (currentUser) {
    return (
      <div className={`relative ${props.class}`}>
        <div className="flex items-center space-x-4">
          <button
            className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-1 lg:focus:ring-red-700"
            onClick={() => setState(!state)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149452.png"
              alt="user image"
              className="w-full h-full rounded-full"
            />
          </button>
          <div className="lg:hidden">
            <span className="block">{currentUser.name}</span>
            <span className="block text-sm text-gray-500">{currentUser.email}</span>
          </div>
        </div>
        <ul
          className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
            state ? '' : 'lg:hidden'
          }`}
        >
          {navigation.map((item, index) => (
            <li key={index}>
              <Link
                className="block text-gray-900 hover:text-red-700 lg:hover:bg-gray-50 lg:p-2.5"
                to={item.path}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  } else return '';
};

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn());

  const [menuState, setMenuState] = useState(false);

  const navigation = [
    { title: 'Home', path: '/' },
    { title: 'Sneakers', path: '/sneakers' },
    { title: 'Init', path: '/init' },
  ];
  return (
    <nav className="bg-white shadow-sm">
      <div className="flex items-center space-x-8 py-3 px-10 mx-auto">
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
            {isLoggedIn ? (
              <ProfileDropDown class="mt-10 pt-5 border-t lg:hidden" />
            ) : (
              <button className="w-full mt-5 pt-2 pb-2 bg-gray-200 rounded-xl lg:hidden">
                <Link to="/login" className="text-gray-900 text-lg font-medium hover:text-red-700">
                  Login
                </Link>
              </button>
            )}
          </div>
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            <SearchQuery />
            {isLoggedIn ? (
              <ProfileDropDown class="hidden lg:block" />
            ) : (
              <button className="hidden lg:block">
                <Link
                  to="/login"
                  className="py-2.5 px-4 text-gray-900 text-lg font-medium bg-gray-200 hover:text-red-700 rounded-xl"
                >
                  Login
                </Link>
              </button>
            )}

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
