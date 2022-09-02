import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TextField.module.scss';
import { Eye, EyeOff } from '../../../../assets/svg';

const TextField = ({ label, type, name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className={styles.parent}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <div className={styles.inputContainer}>
        <input
          type={showPassword ? 'text' : type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={`
            ${styles.input} ${type === 'password' && styles.input__password} ${error && styles.input_error}`}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={toggleShowPassword}
            className={`${styles.eyeBtn} ${error && styles.eyeBtn_error}`}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        )}
      </div>
      {error && <p className={styles.error}>{error}</p>}
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  onChange: PropTypes.func,
  error: PropTypes.string,
};
export default TextField;
