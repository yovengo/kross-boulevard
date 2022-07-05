import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { TextField } from '../../common/form';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthError, signIn } from '../../../store/users';

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [data, setData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const loginError = useSelector(getAuthError());

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validateScheme = yup.object().shape({
    password: yup.string().required('Password is required'),
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
    const redirect = history.location.state ? history.location.state.from.pathname : '/';
    dispatch(signIn({ payload: data, redirect }));
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
        label="Password"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      {loginError ? (
        <p className="mb-1 text-sm text-red-700">{loginError}</p>
      ) : (
        <p className="mb-1 text-sm">&#8205;</p>
      )}
      <button
        type="submit"
        disabled={!isValid}
        className="w-full text-white bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-red-700 rounded text-lg disabled:bg-gray-300"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
