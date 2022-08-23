import React from 'react';
import PropTypes from 'prop-types';
import styles from './RadioField.module.scss';

const RadioField = ({ options, name, onChange, value, label }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className={styles.parent}>
      <label htmlFor="inline-radio" className={styles.label}>
        {label}
      </label>
      <div className={styles.inputContainer}>
        {options.map((option) => (
          <div key={option.name + '_' + option.value} className={styles.radioItem}>
            <input
              id={option.name + '_' + option.value}
              type="radio"
              value={option.value}
              name={name}
              checked={option.value === value}
              onChange={handleChange}
              className={styles.input}
            />
            <label htmlFor={option.name + '_' + option.value} className={styles.inputLabel}>
              {option.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
RadioField.protoTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
};
export default RadioField;
