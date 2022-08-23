import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectField.module.scss';

const SelectField = ({ label, value, onChange, defaultOption, options }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className={styles.parent}>
      <label htmlFor="countries" className={styles.label}>
        {label}
      </label>
      <select id="countries" name="brand" value={value} onChange={handleChange} className={styles.select}>
        <option disabled value="">
          {defaultOption}
        </option>
        {options &&
          options.map((option) => (
            <option value={option._id} key={option._id}>
              {option.name}
            </option>
          ))}
      </select>
    </div>
  );
};
SelectField.propType = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  defaultOption: PropTypes.string,
  options: PropTypes.array,
};
export default SelectField;
