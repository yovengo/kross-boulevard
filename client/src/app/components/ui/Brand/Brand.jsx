import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getBrandById, getBrandsLoadingStatus } from '../../../store/brands';

const Brand = ({ id }) => {
  const isLoading = useSelector(getBrandsLoadingStatus());
  const brand = useSelector(getBrandById(id));

  if (!isLoading) {
    return <span>{brand?.name}</span>;
  } else return 'Loading...';
};
Brand.propTypes = {
  id: PropTypes.string,
};
export default Brand;
