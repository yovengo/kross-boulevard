import React from 'react';
import PropTypes from 'prop-types';
import { useBrand } from '../../../hooks/useBrand';

const Brand = ({ id }) => {
  const { isLoading, getBrand } = useBrand();
  const brand = getBrand(id);

  if (!isLoading) {
    return <span>{brand.name}</span>;
  } else return 'Loading...';
};
Brand.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Brand;
