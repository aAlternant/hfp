import React from 'react';
import styles from './habitsProgress.module.scss';

export const HabitsProgress = ({ habitsProgress }) => {
  const colors = {
    green: '#0E9E50',
    red: '#AC3015',
    orange: '#DBA10F',
  };

  return (
    <div className={styles.habitsProgress}>
      {habitsProgress.map((habit) => {
        let habitColor;
        switch (true) {
          case habit.percentage > 80:
            habitColor = colors.green;
            break;
          case habit.percentage > 30:
            habitColor = colors.orange;
            break;
          default:
            habitColor = colors.red;
            break;
        }
        return (
          <div className={styles['habitsProgress__item']}>
            <span
              className={styles['habitsProgress__item-percentage']}
              style={{ color: habitColor }}>
              <b>{habit.percentage}%</b>
            </span>
            <span className={styles['habitsProgress__item-text']}>{habit.text}</span>
          </div>
        );
      })}
    </div>
  );
};
