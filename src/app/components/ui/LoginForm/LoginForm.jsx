import React, { useState } from 'react';
import { TextField } from '../../common/form';

const LoginForm = () => {
  const [data, setData] = useState({ email: '', password: '' });

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Email" name="email" value={data.email} onChange={handleChange} />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
