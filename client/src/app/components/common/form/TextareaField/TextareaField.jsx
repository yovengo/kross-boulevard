import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextareaField.module.scss';

const TextareaField = ({ label, name, value, onChange }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className={styles.parent}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <textarea id={name} name={name} value={value} onChange={handleChange} className={styles.textarea} />
    </div>
  );
};
TextareaField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default TextareaField;
