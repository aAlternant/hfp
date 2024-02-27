import React from 'react';
import styles from './dialyHabits.module.scss';
import axios from '../../../../api/axios';
import { Habit } from '../Habit/Habit';

export const DialyHabits = ({
  habits,
  addHabitInState,
  removeHabitFromState,
  handleHabitNameChange,
  iconsList,
}) => {
  const [isInputVisible, setIsInputVisible] = React.useState(false);
  const [newHabit, setNewHabit] = React.useState('');

  const inputRef = React.useRef(null);

  const validInputRedexp = /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ0-9_.\-!? ]*$/u;

  const showRedEffectWarning = () => {
    inputRef.current.style.outlineColor = 'red';
    setTimeout(() => {
      inputRef.current.style.outlineColor = 'black';
    }, 500);
  };

  const addNewHabit = async (name) => {
    if (name.length < 1) {
      return showRedEffectWarning();
    }
    try {
      const reqAnser = await axios.patch('/habits-calendar/add-habit', {
        name,
      });

      const habit = reqAnser.data.data;

      addHabitInState(habit);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = () => {
    addNewHabit(newHabit);
  };

  const handleAddNewHabitClick = () => {
    setIsInputVisible(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 50);
  };

  const handleHabitInputChanging = (e) => {
    let text = e.target.value;
    if (text.length > 12 || !text.match(validInputRedexp)) {
      e.preventDefault();
      return showRedEffectWarning();
    }

    setNewHabit(text);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
      setNewHabit('');
      setIsInputVisible(false);
    }
  };

  const handleHabitDeleteClick = async (id) => {
    try {
      await axios.patch('/habits-calendar/delete-habit', {
        id,
      });

      removeHabitFromState(id);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles['dialyHabits']}>
      <h2 className={styles['dialyHabits-title']}>Dialy Habits</h2>
      {habits.map((habit) => (
        <Habit
          key={habit.id + iconsList.length}
          habit={habit}
          iconsList={iconsList}
          handleHabitDeleteClick={handleHabitDeleteClick}
          handleHabitNameChange={(name) => handleHabitNameChange(habit.id, name)}
        />
      ))}
      <input
        className={styles['dialyHabits__input']}
        type="text"
        value={newHabit}
        onChange={handleHabitInputChanging}
        onKeyUp={handleKeyPress}
        onBlur={() => setIsInputVisible(false)}
        placeholder="Enter a habit name"
        ref={inputRef}
        style={{ display: isInputVisible ? 'block' : 'none' }}
      />
      <div className={styles['dialyHabits__add']} onClick={handleAddNewHabitClick}>
        {!isInputVisible && <b>+</b>}
        <span>{isInputVisible ? 'Press Enter to confirm' : 'Add a new habit'}</span>
      </div>
    </div>
  );
};
