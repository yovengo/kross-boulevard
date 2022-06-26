import React from 'react';
import PropTypes from 'prop-types';

const CheckBoxField = ({ name, value, onChange, children, error }) => {
  const handleChange = () => {
    onChange({ name: name, value: !value });
  };

  return (
    <div className="relative mb-4">
      <input
        id={name}
        type="checkbox"
        value=""
        onChange={handleChange}
        checked={value}
        className="w-4 h-4 bg-gray-100 rounded border-gray-300 focus:ring-red-700 focus:ring-1"
      />
      <label htmlFor={name} className="ml-2 text-base text-gray-700 leading-8">
        {children}
      </label>
      {error && <p className="text-sm text-red-700">{error}</p>}
    </div>
  );
};
CheckBoxField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  error: PropTypes.string,
};
export default CheckBoxField;
