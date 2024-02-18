import React from 'react';
import styles from './habitsCalendar.module.scss';
import 'react-circular-progressbar/dist/styles.css';
import { CalendarHeader } from './components/Header/CalendarHeader';
import { Table } from './components/Table/Table';
import { DialyHabits } from './components/DialyHabits/DialyHabits.jsx';
import { HabitsProgress } from './components/HabitsProgress/HabitsProgress.jsx';
import axios from '../../api/axios.js';
import { useNavigate } from 'react-router-dom';

export const HabitsCalendar = () => {
  const [days, setDays] = React.useState([]);
  const [habits, setHabits] = React.useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const respData = await axios.post('users/habits-calendar');
      const { data } = respData.data;

      setDays(data.days);
      setHabits(data.habits);
    } catch (error) {
      console.log(error);
      return navigate('/login');
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  const daysCompletionPercentages = days.map((day) => {
    const percentage = Math.floor((day.completedHabits.length / (habits.length || 1)) * 100);
    return percentage;
  });

  const monthProgress = parseFloat(
    (
      daysCompletionPercentages.reduce((sum, percentage) => sum + percentage, 0) /
      daysCompletionPercentages.length
    ).toFixed(1),
  );

  const countOfCompletedHabitsDays = days.reduce(
    (sumLength, day) => (sumLength += day.completedHabits.length),
    0,
  );

  const habitsProgress = habits.map((habit) => {
    const completedDays = days.filter((day) => day.completedHabits.includes(habit.id));
    const percentage = Math.floor((completedDays.length / days.length) * 100);

    return {
      percentage,
      text: "You're doing a great job",
    };
  });

  return (
    <div className={styles.body}>
      <div className={styles.inner}>
        <CalendarHeader
          daysProgress={daysCompletionPercentages}
          countOfHabitsDays={habits.length * days.length}
          countOfCompletedHabitsDays={countOfCompletedHabitsDays}
          monthProgress={monthProgress}
        />
        <section className={styles.content}>
          <DialyHabits habits={habits} />
          <Table days={days} setDays={setDays} habits={habits} />
          <HabitsProgress habitsProgress={habitsProgress} />
        </section>
      </div>
    </div>
  );
};
