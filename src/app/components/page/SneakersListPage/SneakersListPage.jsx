import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { GroupList, Pagination, SortButton } from '../../common';
import { SneakersTiles } from '../../ui';
import { useSneakers } from '../../../hooks/useSneakers';
import { paginate } from '../../../utils/paginate';
import { useSelector } from 'react-redux';
import { getBrands } from '../../../store/brands';

const SneakersListPage = () => {
  const { sneakers } = useSneakers();
  const brands = useSelector(getBrands());
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
      <div className="container px-5 py-14 mx-auto">
        <h1 className="text-2xl text-gray-900 font-medium">
          <Link to="/">Home</Link> > <span className="text-gray-500">Sneakers</span>
        </h1>

        {brands && (
          <div className="lg:flex justify-between py-8">
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
