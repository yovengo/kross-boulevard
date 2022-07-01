import React from 'react';
import PropTypes from 'prop-types';

const Material = ({ _id, name }) => {
  return (
    <span key={_id} className="px-2 ml-1 bg-gray-100 rounded-xl">
      {name}{' '}
    </span>
  );
};
Material.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string,
};
export default Material;
