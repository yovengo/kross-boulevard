import React, { useState } from 'react';
import { SneakersTiles } from '../../ui';
import { Pagination } from '../../common';
import { useSneakers } from '../../../hooks/useSneakers';
import { paginate } from '../../../utils/paginate';

const SneakersListPage = () => {
  const sneakers = useSneakers();
  const [currentPage, setCurrentPage] = useState(1);

  const count = sneakers.length;
  const pageSize = 16;
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
    window.scroll(0, 0);
  };
  const sneakersCrop = paginate(sneakers, currentPage, pageSize);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <SneakersTiles sneakers={sneakersCrop} />
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
};

export default SneakersListPage;
