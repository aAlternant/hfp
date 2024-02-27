import React from 'react';
import styles from './habitsCalendar.module.scss';
import 'react-circular-progressbar/dist/styles.css';
import { CalendarHeader } from './components/Header/CalendarHeader';
import { Table } from './components/Table/Table';
import { DialyHabits } from './components/DialyHabits/DialyHabits.jsx';
import { HabitsProgress } from './components/HabitsProgress/HabitsProgress.jsx';
import axios from '../../api/axios.js';
import { useNavigate } from 'react-router-dom';
import { SaveWarning } from '../../components/SaveWarning/SaveWarning.jsx';

export const HabitsCalendar = () => {
  const [days, setDays] = React.useState([]);
  const [habits, setHabits] = React.useState([]);
  const [isChangesNotSaved, setIsChangesNotSaved] = React.useState(false);
  const [isSavePending, setIsSavePending] = React.useState(false);

  const navigate = useNavigate();
  const baseUrl = '/habits-calendar';

  const getData = async () => {
    try {
      const respData = await axios.post(baseUrl);
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

  const addHabitInState = (habit) => {
    setHabits([...habits, habit]);
  };

  const removeHabitFromState = (id) => {
    const newHabits = habits.filter((habit) => habit.id !== id);
    const newDays = days.map((day) => {
      if (day.completedHabits.includes(id)) {
        return {
          ...day,
          completedHabits: day.completedHabits.filter((hId) => hId !== id),
        };
      }
      return day;
    });
    setHabits(newHabits);
    setDays(newDays);
  };

  const handleChangesSave = async () => {
    try {
      setIsSavePending(true);
      const reqAnwer = await axios.patch(baseUrl + '/update-calendars-days', {
        days,
      });

      const newDays = reqAnwer.data.data;

      setDays(newDays);
      setIsChangesNotSaved(false);
      setIsSavePending(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleHabitNameChange = (id, name) => {
    const newHabits = habits.map((habit) => (habit.id === id ? { ...habit, name: name } : habit));
    setHabits(newHabits);
  };

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

    let text;

    switch (true) {
      case percentage === 100:
        text = "You're amazing!";
        break;
      case percentage >= 75:
        text = "You're succeeding!";
        break;
      case percentage > 50:
        text = "You're doing a great job";
        break;
      case percentage > 25:
        text = "You're on the right track";
        break;
      default:
        text = 'Every action is progress';
        break;
    }

    return {
      percentage,
      text,
    };
  });

  return (
    <div className={styles.body}>
      <nav className={styles.nav}>
        <a
          rel="stylesheet"
          href="/home"
          aria-label="Navigate back to the home page"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}>
          {'<- Back to home'}
        </a>
      </nav>
      <div className={styles.inner}>
        <SaveWarning
          handleChangesSave={handleChangesSave}
          isActive={isChangesNotSaved}
          pending={isSavePending}
        />
        <CalendarHeader
          daysProgress={daysCompletionPercentages}
          countOfHabitsDays={habits.length * days.length}
          countOfCompletedHabitsDays={countOfCompletedHabitsDays}
          monthProgress={monthProgress}
        />
        <section className={styles.content}>
          <DialyHabits
            habits={habits}
            addHabitInState={addHabitInState}
            removeHabitFromState={removeHabitFromState}
            handleHabitNameChange={handleHabitNameChange}
          />
          <Table
            days={days}
            setDays={setDays}
            habits={habits}
            setIsChangesNotSaved={setIsChangesNotSaved}
          />
          <HabitsProgress habitsProgress={habitsProgress} />
        </section>
      </div>
    </div>
  );
};
