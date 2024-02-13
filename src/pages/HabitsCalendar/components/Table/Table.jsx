import React from 'react';
import styles from './table.module.scss';
import { Cell } from '../Cell/Cell.jsx';

export const Table = ({ days, habits }) => {
  // const habitsLength = days[0].habits.length;
  const isFiveWeeks = days.length % 7;

  return (
    <div className={styles.table}>
      <div className={styles['table__weeks']}>
        <span className={styles['table__weeks-name']}>First week</span>
        <span className={styles['table__weeks-name']}>Second week</span>
        <span className={styles['table__weeks-name']}>Third week</span>
        <span className={styles['table__weeks-name']}>Fourth week</span>
        {isFiveWeeks && <span className={styles['table__weeks-name']}>Fifth week</span>}
      </div>
      <div className={styles['table__days']}>
        {days.map((day) => (
          <span className={styles['table__days-index']}>{day.date}</span>
        ))}
      </div>
      {/* <div className={styles['table__cellsRow']}>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div> */}
      {habits.map((habit) => (
        <div className={styles['table__cellsRow']}>
          {days.map((day) => (
            <Cell />
          ))}
        </div>
      ))}
    </div>
  );
};
