import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { TextField } from '../../common/form';
import { useAuth } from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const history = useHistory();

  const [data, setData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [enterError, setEnterError] = useState(null);

  const { signIn } = useAuth();

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
    setEnterError(null);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    try {
      await signIn(data);
      history.push('/');
    } catch (error) {
      setEnterError(error.message);
    }
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
      {enterError ? (
        <p className="mb-1 text-sm text-red-700">{enterError}</p>
      ) : (
        <p className="mb-1 text-sm">&#8205;</p>
      )}
      <button
        type="submit"
        disabled={!isValid || enterError}
        className="w-full text-white bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-red-700 rounded text-lg disabled:bg-gray-300"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
