import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          to="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">KrossBlvd</span>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2022 KrossBoulevard —
          <a
            href="https://github.com/yovengo"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @yovengo
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://t.me/yovengowo" target="_blank">
            <img
              src="https://cdn.worldvectorlogo.com/logos/telegram-1.svg"
              alt="Telegram"
              className="w-5 h-5 grayscale"
            />
          </a>
          <a href="https://github.com/yovengo" className="ml-3" target="_blank">
            <img
              src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
              alt="GitHub"
              className="w-5 h-5 opacity-50"
            />
          </a>
          <a
            href="https://www.instagram.com/glhf.ognevoy/"
            className="ml-3 text-gray-500"
            target="_blank"
          >
            <img
              src="https://cdn.worldvectorlogo.com/logos/instagram-glyph-1.svg"
              alt="Instagram"
              className="w-5 h-5 opacity-50"
            />
          </a>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
