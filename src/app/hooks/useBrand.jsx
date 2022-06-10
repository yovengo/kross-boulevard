import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import brandService from '../services/brand.service';

const BrandContext = React.createContext();

export const useBrand = () => {
  return useContext(BrandContext);
};

export const BrandProvider = ({ children }) => {
  const [brands, setBrands] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBrandsList();
  }, []);

  useEffect(() => {
    if (error !== null) {
      console.log(error);
      setError(null);
    }
  }, [error]);

  async function getBrandsList() {
    try {
      const { content } = await brandService.get();
      setBrands(content);
      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  }

  function getBrand(id) {
    return brands.find((b) => b._id === id);
  }

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }

  return (
    <BrandContext.Provider value={{ getBrand, brands, isLoading }}>
      {children}
    </BrandContext.Provider>
  );
};

BrandProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
