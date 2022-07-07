import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Kross Boulevard is your guide to the world of sneakers
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            We are a rapidly developing project that will not leave anyone indifferent. New arrivals
            every week, limited-edition pairs of sneakers and much more are waiting for you with us.
            Join us and be in style
          </p>
          <Link
            to="/sneakers"
            className="text-center text-white bg-red-600 rounded-xl py-2 px-8 mt-4 hover:bg-red-700"
          >
            <button>Here goes!</button>
          </Link>
        </div>
        <h1 className="mb-4 text-2xl font-medium title-font text-gray-900">Editor's Choice</h1>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Link to="/sneakers/11b20b5880ed49eaa9156849f6967s03">
                <img
                  alt="sneakers"
                  className="w-full object-cover h-full lg:h-80 object-center block"
                  src="https://sneakerhead.ru/upload/iblock/72a/72a01d87a05d27120da22935512cf324.jpg"
                />
              </Link>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Link to="/sneakers/11b20b5880ed49eaa9156849f6967s39">
                <img
                  alt="sneakers"
                  className="w-full object-cover h-full lg:h-80 object-center block"
                  src="https://sneakerhead.ru/upload/iblock/41a/41afe44c435f252b7857d4b657072a9f.JPG"
                />
              </Link>
            </div>
            <div className="md:p-2 p-1 w-full">
              <Link to="/sneakers/11b20b5880ed49eaa9156849f6967s36">
                <img
                  alt="sneakers"
                  className="w-full h-full lg:h-80 object-cover object-center block"
                  src="https://sneakerhead.ru/upload/iblock/4e6/4e6e19ec045189b5b356d11a3461ac65.jpg"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Link to="/sneakers/11b20b5880ed49eaa9156849f6967s26">
                <img
                  alt="sneakers"
                  className="w-full h-full lg:h-80 object-cover object-center block"
                  src="https://sneakerhead.ru/upload/iblock/2b3/2b38316401f32983bed685bde617a797.jpg"
                />
              </Link>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Link to="/sneakers/11b20b5880ed49eaa9156849f6967s56">
                <img
                  alt="sneakers"
                  className="w-full object-cover h-full lg:h-80 object-center block"
                  src="https://sneakerhead.ru/upload/iblock/6a8/6a84a75476d7fece2dc72defe69c34c7.jpg"
                />
              </Link>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Link to="/sneakers/11b20b5880ed49eaa9156849f6967s65">
                <img
                  alt="sneakers"
                  className="w-full object-cover h-full lg:h-80 object-center block"
                  src="https://sneakerhead.ru/upload/iblock/c05/c05fd3482ea5998c99fb497fdb54fb4b.jpg"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
