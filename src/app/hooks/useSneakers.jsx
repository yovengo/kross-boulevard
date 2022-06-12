import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import sneakersService from '../services/sneakers.service';

const SneakersContext = React.createContext();

export const useSneakers = () => {
  return useContext(SneakersContext);
};

export const SneakersProvider = ({ children }) => {
  const [sneakers, setSneakers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSneakers();
  }, []);

  useEffect(() => {
    if (error !== null) {
      console.log(error);
      setError(null);
    }
  }, [error]);

  async function getSneakers() {
    try {
      const { content } = await sneakersService.get();
      setSneakers(content);
      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  }

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }

  return (
    <SneakersContext.Provider value={sneakers}>
      {!isLoading ? children : 'Loading...'}
    </SneakersContext.Provider>
  );
};

SneakersProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
