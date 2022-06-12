import React from 'react';
import { SneakersTiles } from '../../ui';

const SneakersListPage = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <SneakersTiles />
        </div>
      </div>
    </section>
  );
};

export default SneakersListPage;
