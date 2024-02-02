import React from 'react';
import styles from './habitsCalendar.module.scss';
import 'react-circular-progressbar/dist/styles.css';
import { CalendarHeader } from './components/Header/CalendarHeader';

export const HabitsCalendar = () => {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <CalendarHeader />
      </div>
    </div>
  );
};
