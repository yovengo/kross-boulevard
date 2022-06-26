import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Eye from '../../../../assets/svg/Eye';
import EyeOff from '../../../../assets/svg/EyeOff';

const TextField = ({ label, type, name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="relative mb-4">
      <label htmlFor={name} className="leading-7 text-gray-600">
        {label}
      </label>
      <div className="flex">
        <input
          type={showPassword ? 'text' : type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={
            'w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8' +
            (type === 'password' ? ' rounded-r-none' : '') +
            (error ? ' border-red-700' : '')
          }
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={toggleShowPassword}
            className={
              'bg-white rounded-r border border-l-0 border-gray-300' +
              (error ? ' border-red-700' : '')
            }
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        )}
      </div>
      {error && <p className="text-sm text-red-700">{error}</p>}
    </div>
  );
};
TextField.defaultProps = {
  type: 'text',
};
TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};
export default TextField;
