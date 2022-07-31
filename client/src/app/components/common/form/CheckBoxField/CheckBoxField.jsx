import React from 'react';
import PropTypes from 'prop-types';
import styles from './CheckBoxField.module.scss';

const CheckBoxField = ({ name, value, onChange, children, error }) => {
  const handleChange = () => {
    onChange({ name: name, value: !value });
  };

  return (
    <div className={styles.parent}>
      <input
        id={name}
        type="checkbox"
        value=""
        onChange={handleChange}
        checked={value}
        className={styles.input}
      />
      <label htmlFor={name} className={styles.label}>
        {children}
      </label>
      {error && <p className={styles.error}>{error}</p>}
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
