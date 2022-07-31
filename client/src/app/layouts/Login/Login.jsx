import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Login.module.scss';

import { LoginForm, RegisterForm } from '../../components/ui';

const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(type === 'register' ? type : 'login');

  const toggleFormType = () => {
    setFormType((prevState) => (prevState === 'register' ? 'login' : 'register'));
  };

  return (
    <section className={styles.parent}>
      <div className={styles.mainContainer}>
        <div className={styles.leftContent}>
          <h1 className={styles.leftHeading}>Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
          <p className={styles.leftParagraph}>
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan
            tousled etsy austin.
          </p>
        </div>
        <div className={styles.rightContent}>
          {formType === 'register' ? (
            <>
              <h2 className={styles.registerHeading}>Register</h2>
              <RegisterForm />
              <p className={styles.registerParagraph}>
                Already have account?{' '}
                <a role="button" className={styles.anchorToLogin} onClick={toggleFormType}>
                  Sign In
                </a>
              </p>
            </>
          ) : (
            <>
              <h2 className={styles.loginHeading}>Login</h2>
              <LoginForm />
              <p className={styles.loginParagraph}>
                Dont have account?{' '}
                <a role="button" className={styles.anchorToRegister} onClick={toggleFormType}>
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
