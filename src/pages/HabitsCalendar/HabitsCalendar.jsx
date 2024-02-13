import React from 'react';
import styles from './habitsCalendar.module.scss';
import 'react-circular-progressbar/dist/styles.css';
import { CalendarHeader } from './components/Header/CalendarHeader';
import { Table } from './components/Table/Table';
import { DialyHabits } from './components/DialyHabits/DialyHabits.jsx';
import { HabitsProgress } from './components/HabitsProgress/HabitsProgress.jsx';

export const HabitsCalendar = () => {
  const days = new Array(30);
  const habits = new Array(3);
  habits.fill('Running');
  for (let i = 0; i < days.length; i++) {
    days[i] = {
      date: i + 1,
      habits: [
        {
          id: 0,
          isCompleted: Math.floor(Math.random() * 100) + 1 > 50,
        },
        {
          id: 1,
          isCompleted: Math.floor(Math.random() * 100) + 1 > 50,
        },
        {
          id: 2,
          isCompleted: Math.floor(Math.random() * 100) + 1 > 50,
        },
        // {
        //   id: 3,
        //   isCompleted: Math.floor(Math.random() * 100) + 1 > 50,
        // },
        // {
        //   id: 4,
        //   isCompleted: Math.floor(Math.random() * 100) + 1 > 50,
        // },
        // {
        //   id: 5,
        //   isCompleted: Math.floor(Math.random() * 100) + 1 > 50,
        // },
      ],
    };
  }

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData(days);
  }, []);

  const daysCompletionPercentages = data.map((day) => {
    const totalHabits = day.habits.length;
    const completedHabits = day.habits.filter((habit) => habit.isCompleted).length;
    const percentage = Math.floor((completedHabits / totalHabits) * 100);
    return percentage;
  });

  const monthProgress = Math.floor(
    daysCompletionPercentages.reduce((sum, percentage) => sum + percentage, 0) /
      daysCompletionPercentages.length,
  );

  return (
    <div className={styles.body}>
      <div className={styles.inner}>
        <CalendarHeader daysProgress={daysCompletionPercentages} monthProgress={monthProgress} />
        <section className={styles.content}>
          <DialyHabits habits={1} />
          <Table days={data} habits={habits} />
          <HabitsProgress
            habitsProgress={[
              { percentage: 53.33, text: "You're doing a great job!" },
              { percentage: 99.99, text: "You're doing a great job!" },
              { percentage: 99.99, text: "You're doing a great job!" },
            ]}
          />
        </section>
        {/* <div
          style={{
            gridColumn: 'date/monthProgress',
            display: 'grid',
            gridTemplateColumns: 'subgrid',
            gridTemplateRows: 'subgrid',
          }}>
          <div style={{ gridArea: 'date' }}></div>
        </div> */}
      </div>
    </div>
  );
};
