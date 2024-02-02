import { useState } from 'react';
import styles from './auth.module.scss';
import { Input } from '../../components/Input/Input';
import { Link } from 'react-router-dom';

export const Auth = ({ loginButton }) => {
  const [isLoginPage, setIsLoginPage] = useState(loginButton);
  return (
    <div className={styles['auth-page']}>
      <div className={styles['auth-page__inner']}>
        <h1 className={styles['auth-page__title']}>Welcome to HFP</h1>
        <h2 className={styles['auth-page__subtitle']}>{isLoginPage ? 'Login' : 'Registration'}</h2>
        <div className={styles['auth-page__container']}>
          {isLoginPage ? null : <Input text="Email" type="email" icon="fa-solid fa-envelope" />}
          <Input text="Username" icon="fa-solid fa-user" />
          <Input text="Password" icon="fa-solid fa-lock" />
          {isLoginPage ? (
            <span className={styles['auth-page__recover']}>Forgot password?</span>
          ) : null}
          <button type="button" className={styles['auth-page__button']} onClick={() => 'clink!'}>
            {isLoginPage ? 'Log in' : 'Sign up'}
          </button>
          <p>or</p>
          <Link to={isLoginPage ? '/register' : '/login'}>
            <p className={styles['auth-page__change']} onClick={() => setIsLoginPage(!isLoginPage)}>
              {!isLoginPage ? 'Log in' : 'Sign up'}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
