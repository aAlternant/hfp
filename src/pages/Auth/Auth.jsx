import { useState } from 'react';
import styles from './auth.module.scss';
import { Input } from '../../components/Input/Input';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import { Button } from './components/Submit/Button';

export const Auth = ({ loginButton }) => {
  const [isLoginPage, setIsLoginPage] = useState(loginButton);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const signUpHandler = async (email, username, password, passwordConfirm) => {
    try {
      await axios.post('/users/signUp', {
        email,
        username,
        password,
        passwordConfirm,
      });

      return navigate('/habits-calendar');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const logInHandler = async (username, password) => {
    try {
      await axios.post('/users/login', {
        username,
        password,
      });

      return navigate('/habits-calendar');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const formSubmitHandler = async (formData) => {
    // Handle of experimental(!) react form action

    const password = formData.get('Password');
    if (!password || password.length < 8) {
      return setError('Password must be at least 8 characters long');
    }
    const username = formData.get('Username');
    if (!username || username.length < 6) {
      return setError('Username must be at least 6 characters long');
    }

    if (isLoginPage) {
      await logInHandler(username, password);
    } else {
      const email = formData.get('Email');
      const passwordConfirm = formData.get('Password confirmation');

      if (password !== passwordConfirm) return setError("The passwords don't match!");

      await signUpHandler(email, username, password, passwordConfirm);
    }
  };
  return (
    <div className={styles['auth-page']}>
      <div className={styles['auth-page__inner']}>
        <h1 className={styles['auth-page__title']}>Welcome to HFP</h1>
        <h2 className={styles['auth-page__subtitle']}>{isLoginPage ? 'Login' : 'Registration'}</h2>
        <form action={formSubmitHandler} className={styles['auth-page__container']}>
          {!isLoginPage && (
            <Input text="Email" isRequired={true} type="email" icon="fa-solid fa-envelope" />
          )}

          <Input text="Username" icon="fa-solid fa-user" isRequired={true} />
          <Input text="Password" type="password" icon="fa-solid fa-lock" isRequired={true} />
          {!isLoginPage && (
            <Input
              text="Password confirmation"
              type="password"
              icon="fa-solid fa-lock"
              isRequired={true}
            />
          )}

          {isLoginPage && <span className={styles['auth-page__recover']}>Forgot password?</span>}

          <h3 className={`${styles.error} ${error.length > 0 ? styles.active : ''}`}>{error}</h3>

          <Button isLoginPage={isLoginPage} />

          <p>or</p>
          <Link to={isLoginPage ? '/register' : '/login'}>
            <p className={styles['auth-page__change']} onClick={() => setIsLoginPage(!isLoginPage)}>
              {!isLoginPage ? 'Log in' : 'Sign up'}
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};
