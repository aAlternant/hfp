import React from 'react';
import { Checkbox } from 'pretty-checkbox-react';
import './cell.scss';

export const Cell = ({ isActivated, setStatus }) => {
  const changeHandler = () => {
    // setStatus(!isActivated);
  };

  return (
    <div className="cell">
      <Checkbox
        onChange={changeHandler}
        animation="smooth"
        style={{
          fontSize: `${35 * 0.09259}vh`,
        }}
        icon={<img src="/icons/checkmark2.svg" alt="checkmark" />}
      />
    </div>
  );
};
