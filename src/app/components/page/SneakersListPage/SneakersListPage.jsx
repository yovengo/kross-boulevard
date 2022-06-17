import React, { useEffect, useState } from 'react';
import { SneakersTiles } from '../../ui';
import { GroupList, Pagination } from '../../common';
import { useSneakers } from '../../../hooks/useSneakers';
import { paginate } from '../../../utils/paginate';
import { useBrand } from '../../../hooks/useBrand';

const SneakersListPage = () => {
  const sneakers = useSneakers();
  const { brands } = useBrand();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState();

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedBrand]);

  const pageSize = 16;
  const filteredSneakers = selectedBrand
    ? sneakers.filter((s) => s.brand === selectedBrand._id)
    : sneakers;
  const count = filteredSneakers.length;
  const sneakersCrop = paginate(filteredSneakers, currentPage, pageSize);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
    window.scroll(0, 0);
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
  };

  const handleClearFilter = () => {
    setSelectedBrand();
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {brands && (
          <GroupList
            items={brands}
            selectedItem={selectedBrand}
            onClearFilter={handleClearFilter}
            onItemSelect={handleBrandSelect}
          />
        )}
        <div>
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
