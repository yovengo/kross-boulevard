import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import materialService from '../services/material.service';

const MaterialContext = React.createContext();

export const useMaterials = () => {
  return useContext(MaterialContext);
};

export const MaterialProvider = ({ children }) => {
  const [materials, setMaterials] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMaterialsList();
  }, []);

  useEffect(() => {
    if (error !== null) {
      console.log(error);
      setError(null);
    }
  }, [error]);

  async function getMaterialsList() {
    try {
      const { content } = await materialService.fetchAll();
      setMaterials(content);
      setLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  }

  function getMaterial(id) {
    return materials.find((m) => m._id === id);
  }

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }

  return (
    <MaterialContext.Provider value={{ getMaterial, materials, isLoading }}>
      {children}
    </MaterialContext.Provider>
  );
};

MaterialProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
