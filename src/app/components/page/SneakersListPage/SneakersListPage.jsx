import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { GroupList, Pagination, SortButton } from '../../common';
import { SneakersTiles } from '../../ui';
import { useSneakers } from '../../../hooks/useSneakers';
import { useBrand } from '../../../hooks/useBrand';
import { paginate } from '../../../utils/paginate';

const SneakersListPage = () => {
  const sneakers = useSneakers();
  const { brands } = useBrand();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState();
  const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' });

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedBrand]);

  const pageSize = 16;
  const filteredSneakers = selectedBrand
    ? sneakers.filter((s) => s.brand === selectedBrand._id)
    : sneakers;
  const count = filteredSneakers.length;
  const sortedSneakers = _.orderBy(filteredSneakers, sortBy.iter, sortBy.order);
  const sneakersCrop = paginate(sortedSneakers, currentPage, pageSize);

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

  const handleSort = ({ target }) => {
    const splitValue = target.value.split(' ');
    setSortBy({ iter: splitValue[0], order: splitValue[1] });
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {brands && (
          <div className="lg:flex justify-between pb-8">
            <GroupList
              items={brands}
              selectedItem={selectedBrand}
              onClearFilter={handleClearFilter}
              onItemSelect={handleBrandSelect}
            />
            <SortButton onSort={handleSort} />
          </div>
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
