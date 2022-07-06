import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCartData } from '../store/users';
import { getSneakersByIds } from '../store/sneakers';
import { Brand } from '../components/ui';

const Cart = () => {
  const currentCart = useSelector(getCartData());
  const sneakers = useSelector(getSneakersByIds(currentCart));

  const subtotal = _.sumBy(sneakers, 'price');
  const shippingCost = subtotal < 8500 && subtotal > 0 ? 750 : 0;
  const orderTotal = subtotal + shippingCost;

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container md:flex md:flex-row px-5 py-24 mx-auto">
        <div className="-my-8 md:w-4/6 divide-y-2 divide-gray-100">
          {sneakers.length !== 0 ? (
            sneakers.map((s) => (
              <div key={s._id} className="py-8 flex flex-wrap md:flex-nowrap">
                <img
                  src={s.image[0]}
                  alt="sneakers"
                  className="md:block hidden w-32 h-32 object-cover object-center rounded-xl"
                />
                <div className="md:w-64 md:mb-0 md:ml-6 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-medium text-gray-500">
                    <Brand id={s.brand} />
                  </span>
                  <span className="font-medium text-gray-700">{s.name}</span>
                  <span className="text-gray-500 mt-2">
                    {s.isInStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                <div className="md:flex-grow md:mr-6">
                  <div className="pb-2">
                    <label htmlFor="">Size: </label>
                    <select
                      defaultValue="0"
                      role="button"
                      className="border rounded-lg appearance-none border-gray-300 py-0.5 focus:outline-none text-base px-5 hover:bg-gray-100"
                    >
                      {s.sizes.map((s, i) => (
                        <option key={s} value={i}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <h2>
                    Product Code: <span className="font-medium">{s._id}</span>
                  </h2>
                  <Link
                    to={`/sneakers/${s._id}`}
                    className="text-red-700 inline-flex items-center mt-4"
                  >
                    Product page
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
                <div>
                  <h2 className="text-xl font-medium text-gray-900 title-font mb-2">
                    {s.price}&nbsp;&#8381;
                  </h2>
                  <button className="text-red-700 underline">Remove</button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-36 flex flex-wrap md:flex-col items-center">
              <h1 className="text-xl font-medium">Your shopping cart is empty :(</h1>
              <p>Add items you want to shop</p>
              <Link to="/sneakers">
                <button className="text-center text-white bg-red-600 rounded-xl py-2 px-8 mt-4 hover:bg-red-700">
                  Shop now
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="md:w-2/6">
          <div className="flex flex-col items-end">
            <div className="w-5/6 bg-gray-100 px-5 py-8 rounded-xl">
              <h1 className="text-gray-900 text-xl font-medium mb-4">Order summary</h1>
              <div className="flex justify-between mb-4 pb-4 border-b">
                Subtotal
                <span className="text-gray-900 font-medium">{subtotal} &#8381;</span>
              </div>
              <div className="flex justify-between mb-4 pb-4 border-b">
                Shipping cost{' '}
                <span className="text-gray-900 font-medium">{shippingCost} &#8381;</span>
              </div>
              <div className="flex justify-between text-gray-900 text-lg font-medium mb-4">
                Order total <span>{orderTotal} &#8381;</span>
              </div>
              <button
                disabled={!currentCart}
                className="text-center text-white bg-red-600 rounded-xl w-full py-2 px-8 hover:bg-red-700 disabled:bg-gray-300"
                role="button"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
