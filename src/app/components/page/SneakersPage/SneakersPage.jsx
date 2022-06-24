import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSneakers } from '../../../hooks/useSneakers';
import { Brand, MaterialsList, Slider } from '../../ui';
import { useBrand } from '../../../hooks/useBrand';

const SneakersPage = ({ sneakersId }) => {
  const { getSneakersById } = useSneakers();
  const sneakers = getSneakersById(sneakersId);

  const { getBrand } = useBrand();
  const brand = getBrand(sneakers.brand);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (sneakers && brand) {
    return (
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-14 mx-auto">
          <h1 className="text-2xl text-gray-900 font-medium">
            <Link to="/">Home</Link> > <Link to="/sneakers">Sneakers</Link> >{' '}
            <span className="text-gray-500">{sneakers.name}</span>
          </h1>
          <div className="lg:w-4/5 py-8 mx-auto flex flex-wrap">
            <Slider images={sneakers.image} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-md title-font text-gray-500 tracking-widest">
                <Brand id={sneakers.brand} />
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {sneakers.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex py-2">
                  <a href={brand.officialSiteURL} className="text-gray-500" target="_blank">
                    <img
                      src="https://www.svgrepo.com/show/14443/home.svg"
                      alt="Official site"
                      className="w-5 h-5 opacity-50"
                    />
                  </a>
                  <a href={brand.instagramURL} className="text-gray-500" target="_blank">
                    <img
                      src="https://cdn.worldvectorlogo.com/logos/instagram-glyph-1.svg"
                      alt="Instagram"
                      className="ml-2 w-5 h-5 opacity-50"
                    />
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{sneakers.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex flex-col">
                  <span className="mb-1">
                    Materials: <MaterialsList materials={sneakers.materials} />
                  </span>
                  <span className="mt-1">
                    Sex: <span className="px-2 ml-1 bg-gray-100 rounded-xl">{sneakers.sex}</span>
                  </span>
                </div>
              </div>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex items-center">
                  <span className="mr-3">Sizes:</span>
                  <div className="relative">
                    <select
                      role="button"
                      className="rounded-xl border appearance-none border-gray-300 py-2 focus:outline-none text-base pl-3 pr-10 hover:bg-[#f3f1f4]"
                    >
                      {sneakers.sizes.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {sneakers.price} &#8381;
                </span>
                <button className="flex ml-auto text-gray-900 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:text-red-700 rounded-xl">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return 'Loading...';
  }
};
SneakersPage.propTypes = {
  sneakersId: PropTypes.string.isRequired,
};
export default SneakersPage;
