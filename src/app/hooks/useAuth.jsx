import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import userService from '../services/user.service';
import { setTokens } from '../services/localStorage.service';

const httpAuth = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/',
  params: { key: process.env.REACT_APP_FIREBASE_KEY },
});
const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setUser] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error !== null) {
      setError(null);
    }
  }, [error]);

  async function signIn({ email, password }) {
    try {
      const { data } = await httpAuth.post('accounts:signInWithPassword', {
        email,
        password,
        returnSecureToken: true,
      });
      setTokens(data);
      console.log(data);
    } catch (error) {
      errorCatcher(error);
      const { code, message } = error.response.data.error;
      console.log(code, message);
      if (code === 400) {
        switch (message) {
          case 'INVALID_PASSWORD':
            throw new Error('Incorrect email address or password');
          default:
            throw new Error('Too many attempts please, try again later');
        }
      }
    }
  }

  async function signUp({ email, password, ...rest }) {
    try {
      const { data } = await httpAuth.post('accounts:signUp', {
        email,
        password,
        returnSecureToken: true,
      });
      setTokens(data);
      await createUser({ _id: data.localId, email, ...rest });
      console.log(data);
    } catch (error) {
      errorCatcher(error);
      const { code, message } = error.response.data.error;
      console.log(code, message);
      if (code === 400) {
        if (message === 'EMAIL_EXISTS') {
          const errorObject = { email: 'Email address is already exists' };
          throw errorObject;
        }
      }
    }
  }

  async function createUser(data) {
    try {
      const { content } = userService.create(data);
      setUser(content);
    } catch (error) {
      errorCatcher(error);
    }
  }

  function errorCatcher(error) {
    const { message } = error.response.data;
    setError(message);
  }

  return (
    <AuthContext.Provider value={{ signUp, signIn, currentUser }}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
export default AuthProvider;
