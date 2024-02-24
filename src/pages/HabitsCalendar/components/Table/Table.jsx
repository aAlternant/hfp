import React from 'react';
import styles from './table.module.scss';
import { Cell } from '../Cell/Cell.jsx';

export const Table = ({ days, habits, setDays, setIsChangesNotSaved }) => {
  const changeCellStatus = (cIdx, hId) => {
    const newDays = [...days];

    const isActivated = newDays[cIdx].completedHabits.includes(hId);

    if (isActivated) {
      // Delete index of selected habit from list of day's completed habits
      const habitIndex = newDays[cIdx].completedHabits.indexOf(hId);
      if (habitIndex !== -1) {
        newDays[cIdx] = {
          ...newDays[cIdx],
          completedHabits: [
            ...newDays[cIdx].completedHabits.slice(0, habitIndex),
            ...newDays[cIdx].completedHabits.slice(habitIndex + 1),
          ],
        };
      }
    } else {
      // Add index of selected habit to list of day's completed habits
      newDays[cIdx] = {
        ...newDays[cIdx],
        completedHabits: [...newDays[cIdx].completedHabits, hId],
      };
    }

    setDays(newDays);
  };

  const isFiveWeeks = days.length % 7;

  return (
    <div className={styles.table}>
      <div className={styles['table__weeks']}>
        <span className={styles['table__weeks-name']}>First week</span>
        <span className={styles['table__weeks-name']}>Second week</span>
        <span className={styles['table__weeks-name']}>Third week</span>
        <span className={styles['table__weeks-name']}>Fourth week</span>
        {isFiveWeeks && (
          <span className={styles['table__weeks-name']}>{`Fifth${
            isFiveWeeks > 1 ? ' week' : ''
          }`}</span>
        )}
      </div>
      <div className={styles['table__days']}>
        {days.map((day) => (
          <span
            className={styles['table__days-index']}
            style={{
              backgroundColor: new Date().getDate() === day.date ? '#98DCC3 ' : 'transparent',
            }}>
            {day.date}
          </span>
        ))}
      </div>

      {habits.map((habit) => (
        <div className={styles['table__cellsRow']}>
          {days.map((day) => (
            <Cell
              key={`${day.date}-${habit.id}`}
              isActivated={day.completedHabits.includes(habit.id)}
              setStatus={() => changeCellStatus(day.date - 1, habit.id)}
              setIsChangesNotSaved={setIsChangesNotSaved}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
