import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { LoginForm, RegisterForm } from '../components/ui';

const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(type === 'register' ? type : 'login');
  const toggleFormType = () => {
    setFormType((prevState) => (prevState === 'register' ? 'login' : 'register'));
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Slow-carb next level shoindcgoitch ethical authentic, poko scenester
          </h1>
          <p className="leading-relaxed mt-4">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder
            roathse. Craies vegan tousled etsy austin.
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          {formType === 'register' ? (
            <>
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Register</h2>
              <RegisterForm />
              <p className="text-xs text-gray-500 mt-3">
                Already have account?{' '}
                <a role="button" className="font-medium" onClick={toggleFormType}>
                  Sign In
                </a>
              </p>
            </>
          ) : (
            <>
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
              <LoginForm />
              <p className="text-xs text-gray-500 mt-3">
                Dont have account?{' '}
                <a role="button" className="font-medium" onClick={toggleFormType}>
                  Sign Up
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
