import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import styles from './MultiSelectField.module.scss';

const MultiSelectField = ({ options, onChange, name, label, defaultValue }) => {
  const multiSelectOptions = options.map((option) => ({
    label: option.name,
    value: option._id,
  }));

  const handleChange = (value) => {
    const materialsIds = Object.keys(value).map((obj) => value[obj].value);
    onChange({ name: name, value: materialsIds });
  };

  return (
    <div className={styles.parent}>
      <label className={styles.label}>{label}</label>
      <Select
        isMulti
        closeMenuOnSelect={false}
        defaultValue={defaultValue}
        options={multiSelectOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
        name={name}
      />
    </div>
  );
};
MultiSelectField.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.array,
};
export default MultiSelectField;
