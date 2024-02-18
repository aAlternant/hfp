import React from 'react';
import styles from './dialyHabits.module.scss';

export const DialyHabits = ({ habits }) => {
  return (
    <div className={styles['dialyHabits']}>
      <h2 className={styles['dialyHabits-title']}>Dialy Habits</h2>
      {habits.map((habit) => {
        return (
          <div className={styles['dialyHabits__habit']}>
            <img
              className={styles['dialyHabits__habit-icon']}
              src={`/icons/${habit.icon}`}
              alt="Running"
            />
            <div className={styles['dialyHabits__habit-name']}>{habit.name}</div>
            <img
              className={styles['dialyHabits__habit-status']}
              src={`/icons/${habit.status}.svg`}
              alt="Alert"
            />
          </div>
        );
      })}
      <div className={styles['dialyHabits__add']}>
        <b>+</b>
        <span>Add a new habit</span>
      </div>
    </div>
  );
};
