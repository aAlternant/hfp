import React from 'react';
import { Checkbox } from 'pretty-checkbox-react';
import './cell.scss';

export const Cell = ({ isActivated, setStatus, setIsChangesNotSaved }) => {
  const changeHandler = () => {
    setIsChangesNotSaved(true);
    setStatus(!isActivated);
  };

  return (
    <div className="cell">
      <Checkbox
        defaultChecked={isActivated}
        onChange={changeHandler}
        animation="smooth"
        style={{
          fontSize: `${35 * 0.09259}vh`,
        }}
        icon={<img src="habitsCalendar/checkmark2.svg" alt="checkmark" />}
      />
    </div>
  );
};
