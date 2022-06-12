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
          <Link to={`/sneakers/${s._id}`} className="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={s.image}
            />
          </Link>
          <div className="mt-4">
            <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1">
              <Brand id={s.brand} />
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">{s.name}</h2>
            <p className="mt-1">{s.price} &#8381;</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default SneakersTiles;
