import React from 'react';
import { Link } from 'react-router-dom';
import { useSneakers } from '../../../hooks/useSneakers';
import { Brand } from '../Brand';

const SneakersTiles = () => {
  const sneakers = useSneakers();

  return (
    <>
      {sneakers.map((s) => (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={s._id}>
          <Link to={`/sneakers/${s._id}`}>
            <div className="border-2 bg-[#f3f1f4] rounded-xl pt-24">
              <div className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={s.image[0]}
                />
              </div>
              <div className="pt-4 pl-4 pb-4">
                <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1 ">
                  <span className="bg-gray-200 px-1 py-0.5">
                    <Brand id={s.brand} />
                  </span>
                </h3>
                <h2 className="text-gray-900 hover:text-red-700 transition-colors title-font lg:text-lg font-medium">
                  {s.name}
                </h2>
                <p className="mt-1">{s.price} &#8381;</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default SneakersTiles;
