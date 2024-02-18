import React from 'react';
import LoadingSpin from 'react-loading-spin';
import styles from '../../auth.module.scss';
import { useFormStatus } from 'react-dom';

export const Button = ({ isLoginPage }) => {
  const { pending } = useFormStatus(); // From experimental react

  return (
    <button type="submit" className={styles['auth-page__button']} disabled={pending}>
      {!pending && (isLoginPage ? 'Log in' : 'Sign up')}
      {pending && <LoadingSpin size={24} primaryColor="purple" secondaryColor="white" />}
    </button>
  );
};
