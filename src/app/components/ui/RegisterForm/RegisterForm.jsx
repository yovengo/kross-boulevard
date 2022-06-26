import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { CheckBoxField, TextField } from '../../common/form';

const RegisterForm = () => {
  const [data, setData] = useState({ email: '', password: '', name: '', licence: false });
  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validateScheme = yup.object().shape({
    licence: yup.boolean().oneOf([true], 'The Terms & Conditions must be accepted.'),
    password: yup
      .string()
      .required('Password is required')
      .matches(/(?=.*[A-Z])/, 'Password must contain at least one capital letter')
      .matches(/(?=.*\d)/, 'Password must contain at least one number')
      .matches(
        /(?=.*[!@#$%^&*])/,
        'The password must contain one of the special characters !@#$%^&*'
      )
      .matches(/(?=.{8,})/, 'Password must be at least 8 characters long'),
    name: yup.string().required('Full name is required'),
    email: yup.string().required('Email is required').email('Email entered incorrectly'),
  });

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    validateScheme
      .validate(data)
      .then(() => setErrors({}))
      .catch((err) => setErrors({ [err.path]: err.message }));
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label="Full name"
        name="name"
        value={data.name}
        onChange={handleChange}
        error={errors.name}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <CheckBoxField
        value={data.licence}
        onChange={handleChange}
        name="licence"
        error={errors.licence}
      >
        I Agree with the{' '}
        <a href="#" className="font-medium">
          Terms & Conditions
        </a>
      </CheckBoxField>
      <button
        type="submit"
        disabled={!isValid}
        className="w-full text-white bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-red-700 rounded text-lg disabled:bg-gray-300"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
