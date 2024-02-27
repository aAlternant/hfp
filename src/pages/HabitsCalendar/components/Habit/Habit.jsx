import React from 'react';
import styles from '../DialyHabits/dialyHabits.module.scss';
import { X } from 'react-feather';
import axios from '../../../../api/axios';

export const Habit = ({ iconsList, habit, handleHabitDeleteClick, handleHabitNameChange }) => {
  const [isIconChangeModalActive, setIsIconChangeModalActive] = React.useState(false);
  const [activeIcon, setActiveIcon] = React.useState(habit.icon);

  const changeIconHandler = async (name) => {
    try {
      const reqAnswer = await axios.patch('/habits-calendar/change-habit-icon', {
        id: habit.id,
        icon: name,
      });

      const iconName = reqAnswer.data.data.icon;

      setActiveIcon(iconName);
      setIsIconChangeModalActive(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles['dialyHabits__habit']}>
      <X
        className={styles['dialyHabits__habit-delete']}
        onClick={() => handleHabitDeleteClick(habit.id)}
      />
      <img
        className={styles['dialyHabits__habit-icon']}
        src={`/habitsCalendar/icons/${activeIcon}.svg`}
        alt="Icon"
        onClick={() => setIsIconChangeModalActive(!isIconChangeModalActive)}
      />
      <div className={styles['dialyHabits__habit-name']}>{habit.name}</div>
      <img
        className={styles['dialyHabits__habit-status']}
        src={`/habitsCalendar/statuses/${habit.status}.svg`}
        style={{
          display: habit.status ? 'block' : 'none',
        }}
        alt="Status"
      />
      {isIconChangeModalActive && (
        <div
          className={styles['dialyHabits__habit__iconsModal']}
          onBlur={() => setIsIconChangeModalActive(false)}
          tabIndex={3}>
          {iconsList.map((icon) => (
            <div className={styles['dialyHabits__habit__iconsModal-element']}>
              <img
                className={styles['dialyHabits__habit__iconsModal-icon']}
                src={icon.url}
                alt="???"
                onClick={() => changeIconHandler(icon.name)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
