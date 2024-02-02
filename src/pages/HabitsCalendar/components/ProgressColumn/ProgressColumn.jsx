import React, { useState, useEffect } from 'react';
import styles from './progressColumn.module.scss';

export const ProgressColumn = ({ progress, colors }) => {
  const [barColor, setBarColor] = useState(colors.default);

  useEffect(() => {
    if (progress === 100) {
      setBarColor(colors.perfect);
    } else if (progress >= 75) {
      setBarColor(colors.good);
    } else if (progress >= 50) {
      setBarColor(colors.well);
    } else {
      setBarColor(colors.default);
    }
  }, [progress, colors.good, colors.perfect, colors.well, colors.default]);

  const barStyle = {
    height: `${progress}%`,
    backgroundColor: barColor,
  };

  return (
    <div className={styles['progressColumn']}>
      <div className={styles['progressColumn-bar']} style={barStyle} />
      <span className={styles['progressColumn-value']}>{progress}%</span>
    </div>
  );
};
