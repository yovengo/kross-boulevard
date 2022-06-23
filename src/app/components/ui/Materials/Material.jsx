import React from 'react';
import PropTypes from 'prop-types';
import { useMaterials } from '../../../hooks/useMaterials';

const Material = ({ id }) => {
  const { getMaterial, isLoading } = useMaterials();
  const { name } = getMaterial(id);
  if (!isLoading) {
    return <span className="px-2 ml-1 bg-gray-100 rounded-xl">{name} </span>;
  } else {
    return 'Loading...';
  }
};
Material.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Material;
