import React from 'react';
import styles from './dialyHabits.module.scss';

export const DialyHabits = ({ habits }) => {
  return (
    <div className={styles['dialyHabits']}>
      <h2 className={styles['dialyHabits-title']}>Dialy Habits</h2>
      <div className={styles['dialyHabits__habit']}>
        <img className={styles['dialyHabits__habit-icon']} src="/icons/running.svg" alt="Running" />
        <div className={styles['dialyHabits__habit-name']}>Running</div>
        <img className={styles['dialyHabits__habit-status']} src="/icons/alert.svg" alt="Alert" />
      </div>
      <div className={styles['dialyHabits__habit']}>
        <img className={styles['dialyHabits__habit-icon']} src="/icons/running.svg" alt="Running" />
        <div className={styles['dialyHabits__habit-name']}>Running</div>
        <img className={styles['dialyHabits__habit-status']} src="/icons/alert.svg" alt="Alert" />
      </div>
      <div className={styles['dialyHabits__habit']}>
        <img className={styles['dialyHabits__habit-icon']} src="/icons/running.svg" alt="Running" />
        <div className={styles['dialyHabits__habit-name']}>Running</div>
        <img className={styles['dialyHabits__habit-status']} src="/icons/alert.svg" alt="Alert" />
      </div>
    </div>
  );
};
